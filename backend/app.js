var createError = require("http-errors");
var express = require("express");
// var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var usersRouter = require("./Routers/userRouter");
var pinsRouters = require("./Routers/pinsRouter");
//var { cloudinary,v2 } = require("cloudinary");

var app = express();
// cloudinary.v2.config({
//     cloud_name: process.CLOUD_NAME,
//   api_key: process.env.CLOUD_API,
//   api_secret: process.env.CLOUD_SEC_API,
// });
// view engine setup
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads' , express.static('uploads'))
app.use("/usersRouter", usersRouter);
app.use("/pinRoutes", pinsRouters);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
