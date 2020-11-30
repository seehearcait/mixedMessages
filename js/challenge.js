const getRandom = (array) => {
    const length = array.length;
    const index =  Math.floor(Math.random()*length)
    return array[index];
}

const challenges = ['Sewing', 'Lipsync', 'Talk Show', 'Commercial', 'Makeover', 'Ball', 'Dancing', 'Acting', 'Snatch Game', 'Singing', 'Personal Branding', 'Comedy', 'Music Video', 'Musical', 'Runway']

const finalPlacement = () => {
    return Math.floor(Math.random()*14)+1
}

const randomChallenge = () => {
    return getRandom(challenges);
};

const winningChallenge = (placement) => {
    if (placement == 14) {
        return 'Sadly, you sashayed away before winning a challenge'
    } else {
        let challenge = randomChallenge();
        return `Your best win was the ${challenge} challenge!`
    }
};

const losingChallenge = (placement, win) => {
    if (placement === 1) {
        return "You're a winner baby!  You are the reigning queen!"
    } else {
        let challenge = randomChallenge();
        // let challenge = win;
        while (challenges.indexOf(challenge) === challenges.indexOf(win)) {
            console.log(`Whoops!  Trying again!`)
            challenge = randomChallenge();
        };
        return `Sadly, you sashayed away after the ${challenge} challenge`;
    }
};


exports.modules = {finalPlacement, randomChallenge, winningChallenge, losingChallenge};