const queenName = require('./js/queenName');


const getRandom = (array) => {
    const length = array.length;
    const index =  Math.floor(Math.random()*length)
    return array[index];
}

// console.log(queenName.firstName);

module.exports = {getRandom};