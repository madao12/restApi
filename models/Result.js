var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Result = new Schema({
    studentResults:
    {
        aem: {
            type: String
        },
        correct: {
            type: Number
        },
        numberOfQuestions: {
            type: Number
        }
    }
});

module.exports = mongoose.model('Result', Result);