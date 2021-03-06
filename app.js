var queenName = require('./js/queenName.js');
var challenges = require('./js/challenge.js');
var catchPhrases = require('./js/catchphrase.js');
const ordinal = require('ordinal');

// ** CONSTRUCT FIRST NAME
const firstName = queenName.modules.getFirstName();
const lastName = queenName.modules.getLastName();
const fullName = firstName + " " + lastName;

// ** FIND PLACEMENT AND CHALLENGE PERFORMANCE
const placement = challenges.modules.finalPlacement();
const challengeWin = challenges.modules.winningChallenge(placement);
const challengeLoss = challenges.modules.losingChallenge(placement, challengeWin);

// ** GET CATCHPHRASE
const catchPhrase =  catchPhrases.getCatchphrase();

const yourProfile = {
    name: fullName,
    placement: ordinal(placement),
    win: challengeWin,
    loss: challengeLoss,
    catchPhrase: catchPhrase
};

console.log(yourProfile);

