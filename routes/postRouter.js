const express = require("express");
const bodyParser = require("body-parser");
const Posts = require("../models/post");
const Users = require("../models/user");
const mongoose = require("mongoose");
var authenticate = require("../authentication");
const multer = require("multer")
const fs = require('fs');
const user = require("../models/user");

const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'/public/images')
    },
    filename : (req,file,cb) => {
        cb(null,`${req.user._id}post`+file.originalname);
    }
})

const imageFileFilter = (req,file,cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
        return cb(new Error("You can only upload images"), false);
    }
    cb(null, true);
}


const upload = multer({ storage: storage, fileFilter : imageFileFilter});

var postRouter = express.Router();

postRouter.use(bodyParser.json());

postRouter.route("/myNewsFeed")
.get(authenticate.verifyUser,(req,res,next) => {
    Posts.find({user : {$in : req.user.following}})
    .populate('user')
    .then((posts)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type","application/json")
        res.json({posts})
    },(err)=> next(err))
    .catch((err) =>next(err))
})

postRouter.route("/:postId/likeAndUnlike")
.put(authenticate.verifyUser, (req,res,user) => {
    Posts.findById(req.params.postId)
    .then((post) => {
        if(post != null){
            if(post.likes.indexOf(req.user._id) < 0){
                post.likes.push(req.user._id);
                post.save()
                .then((post) => {
                    Posts.findById(post._id)
                    .populate('user')
                    .populate('comments.author')
                    .then((post) => {
                        res.statusCode = 200;
                        res.setHeader("Content-Type","application/json");
                        res.json(post);
                    })
                },(err) => next(err))
            }
            else{
                post.likes.remove(req.user._id);
                post.save()
                .then((post) => {
                    Posts.findById(post._id)
                    .populate('user')
                    .populate('comments.author')
                    .then((post) => {
                        res.statusCode = 200;
                        res.setHeader("Content-Type","application/json");
                        res.json(post);
                    })
                },(err) => next(err))
            }
        }
    },(err) => next(err))
    .catch((err) => next(err))
})

postRouter.route("/explore")
.get(authenticate.verifyUser, (req,res,next) => {
    Posts.find({})
        .populate('user')
        .populate('comments.author')
        .then((posts)=>{
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json(posts);
        },(err) => next(err))
        .catch((err) => next(err));
})
.post(authenticate.verifyUser, upload.single('imageFile'), (req,res,next) => {

    if(req.file){
        req.body.user = req.user._id;
        const posts = new Posts({
            image : req.file.filename ,
            caption : req.body.caption,
            user : req.user._id
        })
        posts.save()
        .then((post) => {
            Posts.findById(post._id)
            .populate('user')
            .populate('comments.author')
            .then((post)=>{
                console.log("Post Created ", post);
                res.statusCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json(post);
            })
        },(err) => next(err))
        .catch((err)=>next(err));
    }
    else{
        err = new Error('Post not found');
        err.status = 404;
        return next(err);
    }
})
.put(authenticate.verifyUser, (req,res,next) => {
    res.statusCode = 403;
    res.end("PUT operation is not allowed on /posts")
})



postRouter.route("/:postId")
.get(authenticate.verifyUser, (req,res,next) => {
    Posts.findById(req.params.postId)
        .populate('user')
        .populate('comments.author')
        .then((post) => {
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json([post]);
        },(err)=>next(err))
        .catch((err)=>next(err))
})
.post(authenticate.verifyUser, (req,res,next) => {
    res.statusCode = 403;
    res.end("Post operation is not allowed on /postId");
})
.delete(authenticate.verifyUser, (req,res, next) => [
    Posts.findById(req.params.postId)
    .then((post) => {
        if(post != null){
            if(!post.user.equals(req.user._id)){
                var err = new Error("You are not allowed to delete this post");
                err.status = 403;
                return next(err);
            }
            var path = post.image;
            fs.unlink('/public/images/'+path,(err) => {
                if(err){
                    console.log(err)
                    return;
                }
                console.log("File removed successfully!")
            })
            Posts.findByIdAndRemove(req.params.postId)
            .then((resp) => {
                res.statudCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json(resp);
            },(err) => next(err))
            .catch((err) => next(err))
        }
        else{
            err = new Error("Post " + req.params.postId + " not found");
            err.status = 404;
            return next(err)
        }
    },(err) => next(err))
    .catch((err) => next(err))
])

postRouter.route('/:postId/comments')
.get(authenticate.verifyUser, (req,res,next) => {
    Posts.findById(req.params.postId)
    .populate('user')
    .populate('comments.author')
    .then((post)=>{
        if(post != null){
            res.statusCode = 200;
            res.setHeader("Content-Type","application/json");
            res.json(post.comments);
        }
        else{
            var err = new Error("Post : "+req.params.postId+" not found");
            err.status = 403;
            return next(err);
        }
    },(err) => next(err))
    .catch((err) => next(err));
})
.post(authenticate.verifyUser, (req,res,next) => {

    Posts.findById(req.params.postId)
    .then((post) => {
        if(post != null){
            req.body.author = req.user._id;
            post.comments.push(req.body);
            post.save()
            .then((post) => {
                Posts.findById(post._id)
                .populate('comments.author')
                .populate('user')
                .then((post) => {
                    res.statusCode = 200;
                    res.setHeader("Content-Type","application/json");
                    res.json(post);
                })
            },(err) => next(err))
        }
        else{
            var err = new Error("Post : "+req.params.postId+" not found");
            err.status = 403;
            return next(err);
        }
    },(err) => next(err))
    .catch((err) => next(err))
})
.put(authenticate.verifyUser,(req, res, next) => {
    res.statusCode = 403;
    res.end("Post operation is not allowed on /postId/comments");
})
.delete(authenticate.verifyUser,(req,res,next) => {
    res.statusCode = 403;
    res.end("Delete operation is not allowed on /postId/comments");
})


postRouter.route('/:postId/comments/:commentId')
.delete(authenticate.verifyUser, (req, res,next) => {
    Posts.findById(req.params.postId)
    .then((post) => {
        if(post != null && post.comments.id(req.params.commentId) != null){
            if(post.comments.id(req.params.commentId).author._id.equals(req.user._id)){
                post.comments.id(req.params.commentId).remove();
                post.save()
                .then((post) => {
                    Posts.findById(post._id)
                    .populate('user')
                    .populate('comments.author')
                    .then((post) => {
                        res.statusCode = 200;
                        res.setHeader("Content-Type","application/json");
                        res.json(post);
                    })
                },(err) => next(err))
            }
            else{
                err = new Error("You are not allowed to delete this comment");
                err.status = 403;
                return next(err)
            }
        }
        else if(post == null){
            err = new Error("Post : "+req.params.postId + " does not exists");
            err.status = 404;
            return next(err);
        }
        else{
            err = new Error("Comment : "+req.params.commentId + " does not exists");
            err.status = 404;
            return next(err);
        }
    },(err)=>next(err))
    .catch((err)=>next(err));
})

module.exports = postRouter;