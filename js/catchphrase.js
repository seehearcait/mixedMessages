const catchPhrases = [
    "Absolutely!",
    "After a long night of hooking",
    "America...",
    "Backrolls?",
    "BALONEY!",
    "Bam!",
    "BEAST!",
    "Brown cow, STUNNING!",
    "Cha-ching, motherfuckers! Cha-ching!",
    "Cucu!",
    "Eat it!",
    "Halleloo",
    "Hiiiiiiieeeeee",
    "Anus",
    "Can you hear me, mother?", 
    "Exterminate", 
    "Silly Old Moo!", 
    "Bernie, the bolt!", 
    "Don't panic!", 
    "Permission to Speak, Sir!", 
    "They don't like it up 'em!", 
    "You stupid boy", 
    "Ooh Betty", 
    "Shut that door!", 
    "What a gay day!", "Seems like a nice boy!", "Look at the muck on 'ere!", "You'll like it, not a lot . . . but you'll like it", "Lovely jubbly", "Listen Very Carefully, I Shall Say This Only Once", "I have a cunning plan", "Are you ready? Ladies and Gentlemen! Let's...Play...DARTS!", "During the war...", "You might very well think that; I couldn't possibly comment", "I don't believe it!", "Eh! Eh! Alright! Alright! Calm down! Calm down!", "Does my bum look big in this?", "I'll get me coat", "Is that your final answer?", "You are the Weakest Link! Goodbye!", "Is it cos I is Black?", "Computer says no", "(Three words:) Fab-u-LOUS!", "A complete dahnce di-SAH-ster", "Absolute filth . . . and I LOVED it!", "A real bobby-dazzler", "Cheap as chips", "How very dare you!", "Am I bovvered?", "What a Fucking Liberty!", "Fantastic!", "Let's get the boys on the baize!", "Hello, sweetie.", "Spoilers.", "The Chase is on!"
];

const getRandom = (array) => {
    const length = array.length;
    const index =  Math.floor(Math.random()*length)
    return array[index];
}

const getCatchphrase = () => {
    return getRandom(catchPhrases);
};

module.exports = {getCatchphrase};