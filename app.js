import { modules } from './js/queenName.js';
import { modules as _modules } from './js/challenge.js';
import { getCatchphrase } from './js/catchphrase.js';
import ordinal from 'ordinal';

// ** DOM ELEMENTS
const button = document.getElementById('button')
const message = document.getElementById('message')
const test = document.getElementById('test');

// ** CONSTRUCT FIRST NAME
const firstName = modules.getFirstName();
const lastName = modules.getLastName();
const fullName = firstName + " " + lastName;

// ** FIND PLACEMENT AND CHALLENGE PERFORMANCE
const placement = _modules.finalPlacement();
const challengeWin = _modules.winningChallenge(placement);
const challengeLoss = _modules.losingChallenge(placement, challengeWin);

// ** GET CATCHPHRASE
const catchPhrase =  getCatchphrase();

const yourProfile = {
    name: fullName,
    placement: ordinal(placement),
    win: challengeWin,
    loss: challengeLoss,
    catchPhrase: catchPhrase
};

function displayMessage(profile){
    // console.log('Ran DM')
    test.innerHTML = 'Ran!'
    // message.innerHTML = profile;
}

console.log(yourProfile);

//Button On Click
button.addEventListener('click', displayMessage(yourProfile));
