// import { modules } from './js/queenName.js';
// import { modules as _modules } from './js/challenge.js';
// import { getCatchphrase } from './js/catchphrase.js';
// import ordinal from 'ordinal';

const queenName = require('./js/queenName.js');
const challenge = require('./js/challenge.js');
const phrase = require('./js/catchphrase.js');
const ordinal = require('ordinal');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4001;

app.use(cors());

// // ** DOM ELEMENTS
// const button = document.getElementById('button')
// const message = document.getElementById('message')
// const test = document.getElementById('test');

// // ** CONSTRUCT FIRST NAME
// const firstName = modules.getFirstName();
// const lastName = modules.getLastName();
// const fullName = firstName + " " + lastName;

// ** CONSTRUCT FIRST NAME
const firstName = queenName.modules.getFirstName();
const lastName = queenName.modules.getLastName();
const fullName = firstName + " " + lastName;

// // ** FIND PLACEMENT AND CHALLENGE PERFORMANCE
// const placement = _modules.finalPlacement();
// const challengeWin = _modules.winningChallenge(placement);
// const challengeLoss = _modules.losingChallenge(placement, challengeWin);

// ** FIND PLACEMENT AND CHALLENGE PERFORMANCE
const placement = challenge.modules.finalPlacement()
const challengeWin = challenge.modules.winningChallenge(placement);
const challengeLoss = challenge.modules.losingChallenge(placement, challengeWin);

// ** GET CATCHPHRASE
const catchPhrase =  phrase.getCatchphrase();

const yourProfile = {
    name: fullName,
    placement: ordinal(placement),
    win: challengeWin,
    loss: challengeLoss,
    catchPhrase: catchPhrase
};

function displayMessage(){
    test.innerHTML = 'Ran!'
    message.innerHTML = yourProfile;
};

console.log(yourProfile);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})
