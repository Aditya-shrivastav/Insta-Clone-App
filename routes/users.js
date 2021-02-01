var express = require('express');
var bodyParser = require('body-parser');
var User = require('../models/user');
var passport = require('passport');
var authenticate = require("../authentication");

var userRouter = express.Router();

userRouter.use(bodyParser.json());

/* GET users listing. */
userRouter.post("/signup",(req, res, next) => {

  console.log(req.body)

  User.register(new User({username: req.body.username, email : req.body.email, firstname : req.body.firstname, lastname : req.body.lastname, password: req.body.password}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.json({err: err});
          return ;
        }
        passport.authenticate('local')(req, res, () => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json({success: true, status: 'Registration Successful!'});
        });
      });
    }
  });
})


userRouter.post('/login', (req, res,next) => {

  passport.authenticate('local',(err,user,info)=>{
    if(err){
      return next(err);
    }
    if(!user){
      res.statusCode=401;
      res.setHeader('Content-Type','application/json');
      res.json({success : false, status: 'Login Unsuccessful!', err:'Could not login User'})
    }
    req.logIn(user, (err)=>{
      if(err){
        res.statusCode = 401;
        res.setHeader('Content-Type','application/json');
        res.json({success : false, status: 'Login Unsuccessful!', err:info})
      }
      var token = authenticate.getToken({_id : req.user._id})
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({type: 'LOGIN_SUCCESS',success: true, token : token ,status: 'You are successfully logged in!',userId : req.user._id});
    })
  }) (req,res,next);
  
});

userRouter.put('/changePassword',(req,res,next) => {
  User.findOne({username: req.body.username})
  .then((sanitizedUser) => {
    console.log(sanitizedUser)
    if (sanitizedUser){
      if(sanitizedUser.email === req.body.email){
        sanitizedUser.setPassword(req.body.password, function(){
          sanitizedUser.save();
          res.statusCode = 200;
          res.json({message: "change password successful",success: true})
        })
      }
      else{
        res.statusCode = 500;
        res.json({message: "Wrong email entered",success:false})
      }
    } else {
      res.statusCode = 500;
      res.json({message: "Error : Please try after sometime",success:false})
    }
  },(err) => {
      next(err)
  })
})

module.exports = userRouter;