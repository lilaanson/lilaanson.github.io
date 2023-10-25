
/////////////////////////////////////////////////////////////////FOR ROW ONE

const mysteryOne = document.getElementsByClassName('box')[0];
const bananaOne = document.getElementsByClassName('peel')[0];
const speedOne = document.getElementsByClassName('boost')[0];

mysteryOne.addEventListener('click',mysteryOneCards);
bananaOne.addEventListener('click',bananaOneCards);
speedOne.addEventListener('click',speedOneCards);

const mysteryOneArray = ["1","2","3","4","5","6"];
const bananaOneArray = ["option one. here it will give instructions on something", "option two, this is now giving a different answer"];
const speedOneArray = ["option one. here it will give instructions on something", "option two, this is now giving a different answer"];

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
    var selection = speedOneArray[Math.floor(Math.random()*speedOneArray.length)];
    addText.innerHTML += selection;
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
