var createError = require('http-errors');
var express = require('express');
var path = require('path');
const passport = require('passport')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const url = 'mongodb+srv://Addy:a1d4i8t5y6a1@cluster0.hqq2p.mongodb.net/data?retryWrites=true&w=majority';

const connectionParams={
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true 
}
const PORT = process.env.PORT || 5000;
const hostname = "localhost"
const User = require('./models/user');
const Post = require('./models/post');

const connect = mongoose.connect(url,connectionParams);

connect.then(
  (db) => {
    console.log("Connected correctly to the server");
  },
  (err) => {
    console.log(err);
  }
)

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var postRouter = require('./routes/postRouter');
var profileRouter = require('./routes/profileRouter');

var app = express();

app.use(passport.initialize());
// view engine setup


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/users", userRouter);

app.use("/posts", postRouter);
app.use("/profile",profileRouter);

app.use(passport.session());

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})


app.listen(PORT,()=>{
  console.log(`Server is up and running at http://${hostname}:${PORT}`)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error : err
  });
});

module.exports = app;
