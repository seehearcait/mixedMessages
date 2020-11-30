var queenName = require('./js/queenName.js');
var challenges = require('./js/challenge.js');

// ** CONSTRUCT FIRST NAME
const firstName = queenName.modules.getFirstName();
const lastName = queenName.modules.getLastName();
const fullName = firstName + " " + lastName;

// ** FIND PLACEMENT AND CHALLENGE PERFORMANCE
const placement = challenges.modules.finalPlacement();
const challengeWin = challenges.modules.winningChallenge(placement);
const challengeLoss = challenges.modules.losingChallenge(placement, challengeWin);


console.log(`Well hello, ${fullName}!  You are sickening!`);
console.log(`Your final ranking is ${placement}`);
console.log(`${challengeWin}`);
console.log(`${challengeLoss}`);

