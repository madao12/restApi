var express = require('express');
var app = express();
var mongoose = require('mongoose');
var resultRoutes = express.Router();

var Result = require('../models/Result');


resultRoutes.route('/add').post(function (req, res, next) {
    Result.create( req.body, function (err, post) {
      //if (err) return next(err);
      res.json(post);
    });
  });

  resultRoutes.route('/').get(function (req, res, next) {
    Result.find({}, function (err, results){
      if (err) return next(err);
      res.json(results);
    });
  });

  resultRoutes.route('/delete/:id').get(function (req, res) {
    Result.findByIdAndRemove({_id: req.params.id}, function(err, result){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
  });


  module.exports = resultRoutes;