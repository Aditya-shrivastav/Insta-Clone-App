var express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authentication');
const User = require('../models/user');
const Posts = require('../models/post');
const multerConfig = require('../uploadFIle');
const multer = require('multer');
const fs = require('fs')

const profileRouter = express.Router();

profileRouter.use(bodyParser.json());

const upload = multer({storage: multerConfig.storage , fileFilter : multerConfig.imageFileFilter})

profileRouter.route('/')
.get(authenticate.verifyUser, (req,res,next) => {
    User.findById(req.user._id)
    .populate('followers')
    .populate('following')
    .then((profile) => {
        Posts.find({"user": req.user._id})
        .then((posts) => {
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json({profile, posts})
        },(err) => next(err))
    },(err) => next(err))
    .catch((err) => next(err));
})

profileRouter.route('/users')
.get(authenticate.verifyUser,(req,res,next) => {
    User.find({})
    .then((users) => { 
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json");
        res.json(users)
    },(err) => next(err))
    .catch((err) => next(err))
})

profileRouter.route('/:profileId')
.get(authenticate.verifyUser, (req,res,next) => {
    if(req.params.profileId !== req.user._id){
        User.findById(req.params.profileId)
        .populate('followers')
        .populate('following')
        .then((profile) => {
            if(profile != null){
                Posts.find({"user": profile._id})
                .then((posts) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type","application/json");
                    res.json({profile,posts})
                })
            }
            else{
                err = new Error("User : "+ req.params.profileId+" not found!")
                err.status = 404;
                return next(err);
            }
        },(err) => next(err))
        .catch((err) => next(err))
    }
})

profileRouter.route('/:profileId/followAndUnfollow')
.put(authenticate.verifyUser,(req,res,next) => {
    User.findById(req.params.profileId)
    .then((profile) => {
        if(profile != null){
            if(profile.followers.indexOf(req.user._id) < 0){
                profile.followers.push(req.user._id);
                profile.save()
                .then((profile) => {
                    User.findById(profile._id)
                    .populate('following')
                    .populate('followers')
                    .then((profile)=>{
                        res.statusCode = 200;
                        res.setHeader("Content-Type","application/json");
                        res.json(profile.followers);
                    })
                })
                User.findById(req.user._id)
                .then((profile) => {
                    profile.following.push(req.params.profileId);
                    profile.save()
                    .then((profile) => {
                        User.findById(profile._id)
                        .populate('following')
                        .populate('followers')
                        .then((profile)=>{
                            res.statusCode = 200;
                            res.setHeader("Content-Type","application/json");
                            res.json(profile.following);
                        })
                    })
                })
            }
            else{
                profile.followers.remove(req.user._id);
                profile.save()
                .then((profile) => {
                    User.findById(profile._id)
                    .populate('following')
                    .populate('followers')
                    .then((profile)=>{
                        res.statusCode = 200;
                        res.setHeader("Content-Type","application/json");
                        res.json(profile.followers);
                    })
                })
                User.findById(req.user._id)
                .then((profile) => {
                    profile.following.remove(req.params.profileId);
                    profile.save()
                    .then((profile) => {
                        User.findById(profile._id)
                        .populate('following')
                        .populate('followers')
                        .then((profile)=>{
                            res.statusCode = 200;
                            res.setHeader("Content-Type","application/json");
                            res.json(profile.following);
                        })
                    })
                })
            }
            
        }
        else{
            err = new Error("User : "+req.params.profileId+" does not exist");
            err.status = 404;
            return next(err)
        }
    },(err) => next(err))
    .catch((err) => next(err));
})

profileRouter.route("/changeDp")
.put(authenticate.verifyUser,upload.single('imageFile'), (req,res,next) => {
    User.findById(req.user._id)
    .then((user) => {
        if(req.file != null){
            console.log(req.file)
            fs.unlink('public/images/'+user.photo,(err) => {
                if(err){
                    res.statusCode = 500;
                    res.setHeader("Content-Type","application/json");
                    res.json({err: err})
                }
            })
            user.photo = req.file.filename;
            user.save()
            .then((user) => {
                res.statusCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json(user)
            })
        }
        else{
            err = new Error("Please upload a picture");
            err.status = 403;
            return next(err);
        }
    },(err) => next(err))
    .catch((err)=>next(err));
})

profileRouter.get("/search/:username",authenticate.verifyUser, (req,res,next) => {

        User.find({username : {$regex : req.params.username, $options : '$i'}})
        .populate('followers')
        .populate('following')
        .then((user) => {

            console.log(user)
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json(user)

        })
        .catch((err) => {
            next(err);
        })
})

module.exports = profileRouter;