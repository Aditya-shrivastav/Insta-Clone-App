var passport = require("passport");
var LocalStratergy = require("passport-local").Strategy;
var JwtStratergy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var jwt = require("jsonwebtoken");
var User = require("./models/user");

passport.use(new LocalStratergy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


exports.getToken = (user) => {
    return jwt.sign(user, '1234-5678-0001-1119-2735',{ expiresIn : 360000})
}

var opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = '1234-5678-0001-1119-2735';

exports.jwtPassport = passport.use(new JwtStratergy(opts , 
    (jwt_payload, done) => {
        console.log("Jwt Payload : ", jwt_payload);
        User.findOne({_id : jwt_payload._id}, (err, user) => {
            if(err){
                return done(err, false)
            }
            else if(user){
                return done(null, user)
            }
            else{
                return done(null, false);
            }
        })
    }
))

exports.verifyUser = passport.authenticate('jwt', {session : false});
