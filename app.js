var queenName = require('./js/queenName.js')

// ** CONSTRUCT FIRST NAME
const firstName = queenName.modules.getFirstName();
const lastName = queenName.modules.getLastName();
const fullName = firstName + " " + lastName;

console.log(`Well hello, ${fullName}!  You are sickening!`);

