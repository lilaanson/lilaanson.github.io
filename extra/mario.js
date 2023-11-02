
/////////////////////////////////////////////////////////////////FOR ROW ONE

const mysteryOne = document.getElementsByClassName('box')[0];
const bananaOne = document.getElementsByClassName('peel')[0];
const speedOne = document.getElementsByClassName('boost')[0];

mysteryOne.addEventListener('click',mysteryOneCards);
bananaOne.addEventListener('click',bananaOneCards);
speedOne.addEventListener('click',speedOneCards);

// only 1/3 of all residential buildings have the potential to be wheelchair accessible
const mysteryOneArray = ["You got a star! On your next turn, your moves forward are doubled.","Unfortunately, you cannot collect this mystery box.","Unfortunately, you cannot collect this mystery box.","Unfortunately, you cannot collect this mystery box.","Unfortunately, you cannot collect this mystery box.","You got a POW Block! Move everyone except yourself and the person in the lead 2 spaces back. Any special spaces landed on do not count."];
const bananaOneArray = ["You spun out on a banana. Next turn is skipped", "You spun out on a banana. Next turn is skipped.","You spun out on a banana. Next turn is skipped", "You avoided a banana."];
// under 4% are currently accessible
const speedOneArray = ["Unfortunately, you cannot use this speed boost.", "Move ahead 4 spaces!"];

function mysteryOneCards(){
    addText.replaceChildren();
    var selection = mysteryOneArray[Math.floor(Math.random()*mysteryOneArray.length)];
    addText.innerHTML += selection;
}
function bananaOneCards(){
    addText.replaceChildren();
    var selection = bananaOneArray[Math.floor(Math.random()*bananaOneArray.length)];
    addText.innerHTML += selection;
}
function speedOneCards(){
    addText.replaceChildren();
    var selection = Math.floor(Math.random()*101);
    if(selection > 4){
        addText.innerHTML += speedOneArray[0]
    }   
    else{
        addText.innerHTML += speedOneArray[1]
    }
}

/////////////////////////////////////////////////////////////////FOR ROW TWO

const mysteryTwo = document.getElementsByClassName('box')[1];
const bananaTwo = document.getElementsByClassName('peel')[1];
const speedTwo = document.getElementsByClassName('boost')[1];

mysteryTwo.addEventListener('click',mysteryTwoCards);
bananaTwo.addEventListener('click',bananaTwoCards);
speedTwo.addEventListener('click',speedTwoCards);

const mysteryTwoArray = ["option one. sflkjdlkfsdhere it will give instructions on something", "option two, this is now giving a different answer"];
const bananaTwoArray = ["option one. s;fojweophere it will give instructions on something", "option two, this is now giving a different answer"];
const speedTwoArray = ["option one. hsflsdflksdsere it will give instructions on something", "option two, this is now giving a different answer"];

function mysteryTwoCards(){
    addText.replaceChildren();
    var selection = mysteryTwoArray[Math.floor(Math.random()*mysteryTwoArray.length)];
    addText.innerHTML += selection;
}
function bananaTwoCards(){
    addText.replaceChildren();
    var selection = bananaTwoArray[Math.floor(Math.random()*bananaTwoArray.length)];
    addText.innerHTML += selection;
}
function speedTwoCards(){
    addText.replaceChildren();
    var selection = speedTwoArray[Math.floor(Math.random()*speedTwoArray.length)];
    addText.innerHTML += selection;
}

/////////////////////////////////////////////////////////////////FOR ROW THREE

const mysteryThree = document.getElementsByClassName('box')[2];
const bananaThree = document.getElementsByClassName('peel')[2];
const speedThree = document.getElementsByClassName('boost')[2];

mysteryThree.addEventListener('click',mysteryThreeCards);
bananaThree.addEventListener('click',bananaThreeCards);
speedThree.addEventListener('click',speedThreeCards);

const mysteryThreeArray = ["option one different different . here it will give instructions on something", "option two, this is now giving a different answer"];
const bananaThreeArray = ["option one blah blah. here it will give instructions on something", "option two, this is now giving a different answer"];
const speedThreeArray = ["option one blah blah. here it will give instructions on something", "option two, this is now giving a different answer"];

function mysteryThreeCards(){
    addText.replaceChildren();
    var selection = mysteryThreeArray[Math.floor(Math.random()*mysteryThreeArray.length)];
    addText.innerHTML += selection;
}
function bananaThreeCards(){
    addText.replaceChildren();
    var selection = bananaThreeArray[Math.floor(Math.random()*bananaThreeArray.length)];
    addText.innerHTML += selection;
}
function speedThreeCards(){
    addText.replaceChildren();
    var selection = speedThreeArray[Math.floor(Math.random()*speedThreeArray.length)];
    addText.innerHTML += selection;
}

/////////////////////////////////////////////////////////////////FOR ROW FOUR

const mysteryFour = document.getElementsByClassName('box')[3];
const bananaFour = document.getElementsByClassName('peel')[3];
const speedFour = document.getElementsByClassName('boost')[3];

mysteryFour.addEventListener('click',mysteryFourCards);
bananaFour.addEventListener('click',bananaFourCards);
speedFour.addEventListener('click',speedFourCards);

const mysteryFourArray = ["option one for character FOUR, here it will give instructions on something", "option two, this is now giving a different answer"];
const bananaFourArray = ["option one for character FOUR, here it will give instructions on something", "option two, this is now giving a different answer"];
const speedFourArray = ["option one for character FOUR, here it will give instructions on something", "option two, this is now giving a different answer"];

function mysteryFourCards(){
    addText.replaceChildren();
    var selection = mysteryFourArray[Math.floor(Math.random()*mysteryFourArray.length)];
    addText.innerHTML += selection;
}
function bananaFourCards(){
    addText.replaceChildren();
    var selection = bananaFourArray[Math.floor(Math.random()*bananaFourArray.length)];
    addText.innerHTML += selection;
}
function speedFourCards(){
    addText.replaceChildren();
    var selection = speedFourArray[Math.floor(Math.random()*speedFourArray.length)];
    addText.innerHTML += selection;
}

//////////////////////////////////////////////////////////////////////////////

const addText = document.getElementById('resultText');
