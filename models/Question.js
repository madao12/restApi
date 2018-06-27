var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Question = new Schema({
  _id: String,
  selected:
  [{
    id: {
      type: String
    },
    type: {
      type: String
    },
    numberOfAnswers: {
      type: Number
    },
    name: {
      type: String
    },
    explanation: {
      type: String
    },
    choices: [{
      answear: String,
      istrue: Boolean
    }]
  }]

});

module.exports = mongoose.model('Question', Question);
