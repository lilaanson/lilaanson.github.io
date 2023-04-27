function check() {
    console.log('test');
}

function submit() {
    alert(`Volume set to ${output.textContent}`);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 100) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



//const output = document.querySelector('.output');
//let outputInt = parseInt(output.textContent);
//console.log(outputInt);

//const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
//const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
//const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
//const randomButton = document.querySelector('.random-button').addEventListener('click', random);
//const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');
button.addEventListener('click', updateOutput);
function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


var slider = document.getElementById("myRange");
//var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('mouseover', update);
var sliderOutput = document.querySelector(".slider-output");
var currentVolume = document.getElementById("current-volume");
currentVolume.textContent = `Slide to adjust volume`;
// Update the current slider value (each time you drag the slider handle)
//function update() {
  //sliderOutput.textContent = slider.value; 
//}
function updateVolume(val) {
    //currentVolume.value=val; 
    //currentVolume.textContent = val;
    if (val === undefined){
        sliderOutput.textContent = `Desired volume: 0`;
    }
    else {
    sliderOutput.textContent = `Desired volume: ${val}`;
    }
    
}
updateVolume();
const computerAnswer = document.getElementById("computer-selection-answer");
const yourAnswer = document.getElementById("your-selection-answer");
const loading = document.getElementById("loading");
var buttons = document.getElementById("buttons-to-disappear");
var buttonsBaseline = buttons.style.display

var popUp = document.getElementById("pop-up-screen");
popUp.style.visibility = "hidden";
function game(val) {
    console.log("trigger game");
    // resetting from the last time
    computerAnswer.textContent = "";
    yourAnswer.textContent = "";
    results.textContent = "";
    buttons.style.display = buttonsBaseline;
    loading.style.display = "inline";
    popUp.style.visibility = "visible";

}
const rockSel = document.getElementById("rock");
rockSel.addEventListener('click', rock);
const paperSel = document.getElementById("paper");
paperSel.addEventListener('click', paper);
const scissorsSel = document.getElementById("scissors");
scissorsSel.addEventListener('click', scissors);

var computerChoices = ["rock", "paper", "scissors"]

function rock() {
    const randomIndex = Math.floor(Math.random() * 3)
    console.log(`selected index is ${randomIndex}`);
    if (computerChoices[randomIndex] === "rock"){
        rock();
    }
    else{
        const computerChoice = computerChoices[randomIndex];
        reveal(computerChoice, "rock");
    }

}
function paper() {
    const randomIndex = Math.floor(Math.random() * 3)
    console.log(`selected index is ${randomIndex}`);
    if (computerChoices[randomIndex] === "paper"){
        paper();
    }
    else{
        const computerChoice = computerChoices[randomIndex];
        reveal(computerChoice, "paper");
    }

}
function scissors() {
    const randomIndex = Math.floor(Math.random() * 3)
    console.log(`selected index is ${randomIndex}`);
    if (computerChoices[randomIndex] === "scissors"){
        scissors();
    }
    else{
        const computerChoice = computerChoices[randomIndex];
        reveal(computerChoice, "scissors");
    }
}
function reveal(computerChoice, yourChoice) {
    //console.log(computerChoice);
    loading.style.display = "none";
    computerAnswer.textContent = computerChoice;
    buttons.style.display = "none"
    yourAnswer.textContent = yourChoice;

    console.log("Waiting 2 seconds b4 showing results");
    setTimeout(() => {  finalResults(computerChoice, yourChoice); }, 2000);
}

function finalResults(computerChoice, yourChoice) {
    const storedValue = slider.value; 
    loopCheck = true;
    const results = document.getElementById("results");
    if (yourChoice === "rock"){
        if (computerChoice === "paper"){
            results.textContent = `Computer wins. Resetting volume`;
            console.log("Waiting 2 seconds then resetting");
            setTimeout(() => {  lose(); }, 2000);
        }
        else if (computerChoice === "scissors"){
            results.textContent = `You win. Setting desired volume`;
            console.log("Waiting 2 seconds then resetting");
            setTimeout(() => {  win(storedValue); }, 2000);
        }
    }
    else if(yourChoice === "scissors"){
        if(computerChoice === "paper"){
            results.textContent = `You win. Setting desired volume`;
            console.log("Waiting 2 seconds then resetting");
            setTimeout(() => {  win(storedValue); }, 2000);
        }
        else if (computerChoice === "rock"){
            results.textContent = `Computer wins. Resetting volume`;
            console.log("Waiting 2 seconds then resetting");
            setTimeout(() => {  lose(); }, 2000);
        }

    }
    else if (yourChoice === "paper"){ // paper
        if (computerChoice === "scissors"){
            results.textContent = `Computer wins. Resetting volume`;
            console.log("Waiting 2 seconds then resetting");
            setTimeout(() => {  lose(); }, 2000);
        }
        else if (computerChoice === "rock"){
            results.textContent = `You win. Setting desired volume`;
            console.log("Waiting 2 seconds then resetting");
            setTimeout(() => {  win(storedValue); }, 2000);
            
        }
    }


}
function lose() {
    slider.value = "0";
    sliderOutput.textContent = `Desired volume: 0`;
    popUp.style.visibility = "hidden";
}

function win(storedValue){
    popUp.style.visibility = "hidden";

}