var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var track = require('./trackingDeck');

var splitPossible = function (array) {
    if(array[0].value == array[1].value && track.playerArray.length ==2) {
        score.possibleToSplitPlayer = true;
    }
};

module.exports = splitPossible;


