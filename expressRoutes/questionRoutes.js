var express = require('express');
var app = express();
var mongoose = require('mongoose');
var questionRoutes = express.Router();

var Question = require('../models/Question');


questionRoutes.route('/add').post(function (req, res, next) {
  Question.create( req.body, function (err, post) {
    //if (err) return next(err);
    res.json(post);
  });
});

questionRoutes.route('/update').put(function (req, res, next) {
  Question.findByIdAndUpdate('defaultId', req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


questionRoutes.route('/').get(function (req, res, next) {
  Question.findById('defaultId', function (err, questions){
    if (err) return next(err);
    res.json(questions);
  });
});




module.exports = questionRoutes;
