// GENERAL VARIABLES
const title = document.getElementById("largeTextTitle");
const description = document.getElementById("smallTextDescription");
const buttonHolder = document.getElementById("buttonHolder");
const rolls = document.getElementById("diceRolls");
const diceRollsTitle = document.getElementById("diceRollsTitle");
const diceResult = document.getElementById("diceResult");
const titleScreen = document.getElementById("titleScreen");
const townCenter = document.getElementById("townCenter");
const introPic = document.getElementById("intro");
const backGroundTint = document.getElementById("centered");
const buttonBegin = document.getElementById("buttonBegin");


//BUTTONS
var button1 = document.createElement("Button");
button1.setAttribute("class", "button");
var button2 = document.createElement("Button");
button2.setAttribute("class", "button");
var button3 = document.createElement("Button");
button3.setAttribute("class", "button");
var button5 = document.createElement("Button");
button5.setAttribute("class", "button");

buttonHolder.appendChild(button1);
buttonHolder.appendChild(button2);
buttonHolder.appendChild(button3);
buttonHolder.appendChild(button5);

//INITIALIZING
buttonHolder.style.display = "none";
diceRollsTitle.style.display = "none";
diceResult.style.display = "none";
title.style.display = "none";
description.style.display = "none";
button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
buttonBegin.style.display = "none";
button5.style.display = "none";
titleScreen.style.display = "none";
townCenter.style.display = "none";
introPic.style.display = "none";

button5.addEventListener('click', intro);

function start(){
    title.textContent = "DO NOT LEAVE";
    title.style.display = "block";
    titleScreen.style.display = "block";
    backGroundTint.style.display = "none";
    buttonHolder.style.display = "block";
    buttonBegin.style.display = "block";
    buttonBegin.textContent = "Begin";
    buttonBegin.addEventListener('click', intro);
    console.log("titleScreen");
}
var introTally = 0;
function intro() {
    console.log(introTally);
    backGroundTint.style.display = "block";
    titleScreen.style.display = "none";
    buttonBegin.style.display = "none";
    button5.style.display = "inline";
    button5.textContent = "Next"
    description.style.display = "block";
    if(introTally === 0){
        description.textContent = "The year is 4023. The town of Boulder has been long overrun by nature and occupied by a small group of mystical inhabitants. They live in a proto-like community surrounded by a large gate. Outside of the gate is an unknown and dangerous entity. There is only one rule in the community: Do not leave.";
        introTally += 1;
        introPic.style.display = "block";
        console.log(introTally);
    }
    else if(introTally === 1){
        description.textContent = "Your community is fed up with living in fear of what lies outside the gate. It is your responsibility to prepare what you have and venture outside of the gates.";
        introTally += 1;
    }
    else if(introTally === 2){
        description.textContent = "To do this, you will be given a random starting amount of money to use at three locations around town: the tavern, where you can learn valuable information; the potion shop, where you can buy potions to use on both yourself and your enemy; and the armory, where you can buy both weapons and clothing. Your character strengths will be chosen at random and assigned by you.";
        introTally += 1;
    }
    else if(introTally === 3){
        pickTraits1();
        introTally += 1;
    }
    else if(introTally === 4){
        pickMoney2();
        introTally += 1;
    }
    else if(introTally === 5){
        actuallyBegin();
    }
}

function pickTraits1(){
    button5.style.display = "none";
    introPic.style.display = "none";
    title.style.fontSize = "25";
    townCenter.style.display = "block";
    title.style.display = "block";
    title.textContent = "Character Traits";
    description.style.display = "block";
    description.setAttribute("class", "typeIn");
    description.textContent = "You will get 3 dice roles, each out of 12. Above 6 is increasingly strong, below 6 is increasingly poor. After seeing each individual dice role, you will choose to assign that value to one of the three traits: mind, body, and soul. A strong mind displays acts of intelligence, alertness, perception, and wisdom. A strong body displays acts of strength, dexterity, agility, and endurance. A strong soul displays acts of willpower, vitality, charisma, and luck. Once you assign a value to a trait, you will not be able to change it."
    console.log("Pausing to load in text");
    setTimeout(() => {  pickTraits2(); }, 2000); // change to longer
} 

function pickTraits2(){
    diceRollsTitle.style.display = "block";
    diceRollsTitle.textContent = "Rolling..."
    setTimeout(() => {  displayButtons(); }, 2000); // change to longer
}
function rolling(){
    diceRollsTitle.textContent = "Rolling..."
    setTimeout(() => {  pickTraits3(); }, 2000); // change to longer
}
const characterTraits = {
    "traits": []
};
function displayButtons(){
    buttonHolder.style.display = "block";
    button1.style.display = "inline";
    button2.style.display = "inline";
    button3.style.display = "inline";
    button1.textContent = "Mind";
    button2.textContent = "Body";
    button3.textContent = "Soul";
    button1.addEventListener('click', mind);
    button2.addEventListener('click', body);
    button3.addEventListener('click', soul);
    pickTraits3();
}
function pickTraits3(){
    const value = Math.floor(Math.random() * 13);
    if(value != 0){ // no such thing as 0 character trait
        characterTraits.traits.push(value);
        diceResult.style.display = "block";
        diceRollsTitle.textContent = `Select trait to assign roll to: ${value}`;
        console.log(characterTraits.traits);
    }
    else{
        pickTraits3();
    }
}

function mind(){
    button1.setAttribute("class","disabled");
    if(characterTraits.traits.length === 1){
        const value = characterTraits.traits[0];
        button1.textContent = `Mind: ${value}`;
        characterTraits.traits[0] = {"Trait": "Mind", "Value": value}
        rolling();
    }
    else if(characterTraits.traits.length === 2){
        const value = characterTraits.traits[1];
        button1.textContent = `Mind: ${value}`;
        characterTraits.traits[1] = {"Trait": "Mind", "Value": value}
        rolling();
    }
    else if(characterTraits.traits.length === 3){
        const value = characterTraits.traits[2];
        button1.textContent = `Mind: ${value}`;
        characterTraits.traits[2] = {"Trait": "Mind", "Value": value};
        pickMoney();
    }
}
function body(){
    button2.setAttribute("class","disabled");
    if(characterTraits.traits.length === 1){
        const value = characterTraits.traits[0];
        button2.textContent = `Body: ${value}`;
        characterTraits.traits[0] = {"Trait": "Body", "Value": value};
        rolling();
    }
    else if(characterTraits.traits.length === 2){
        const value = characterTraits.traits[1];
        button2.textContent = `Body: ${value}`;
        characterTraits.traits[1] = {"Trait": "Body", "Value": value};
        rolling();
    }
    else if(characterTraits.traits.length === 3){
        const value = characterTraits.traits[2];
        button2.textContent = `Body: ${value}`;
        characterTraits.traits[2] = {"Trait": "Body", "Value": value};
        pickMoney();
    }
}
function soul(){
    button3.setAttribute("class","disabled");
    if(characterTraits.traits.length === 1){
        const value = characterTraits.traits[0];
        button3.textContent = `Soul: ${value}`;
        characterTraits.traits[0] = {"Trait": "Soul", "Value": value};
        rolling();
    }
    else if(characterTraits.traits.length === 2){
        const value = characterTraits.traits[1];
        button3.textContent = `Soul: ${value}`;
        characterTraits.traits[1] = {"Trait": "Soul", "Value": value};
        rolling();
    }
    else if(characterTraits.traits.length === 3){
        const value = characterTraits.traits[2];
        button3.textContent = `Soul: ${value}`;
        characterTraits.traits[2] = {"Trait": "Soul", "Value": value};
        pickMoney();
    }
}
var money = 0
function pickMoney(){
    title.textContent = "Money";
    description.textContent = "You will now roll for your starting money."
    rolls.style.display = "block";
    button5.style.display = "inline";
    button5.textContent = "Roll";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    diceRollsTitle.textContent = "";
}

function pickMoney2(){
    const startMoney = Math.floor(Math.random() * 75) + 75;
    money = money + startMoney;
    diceResult.style.display = "block";
    diceRollsTitle.textContent = money;
    button5.textContent = "Start";
    introPic.style.display = "none";

}

function actuallyBegin(){
    diceResult.style.display = "none";
    button5.style.display = "none";

}
// hit impact out of 10, health out of 30?
const possiblePurchases = {
    "Weapons": [
        {
        "Type":"Energy Field",
        "Defensive Score":4,
        "Attack Score":2,
        },
        {
        "Type":"Astral Rune",
        "Defensive Score":2,
        "Attack Score":4,
        }
    ],
    "Potions": [
        {
        "Type":"Healing",
        "Use":"Self",
        "Health Impact":10,
        },
        {
        "Type":"Weaken",
        "Use":"Enemy",
        "Attack Score":10,
        }
    ],
    "Armor": [
        {
        "Type":"Something Protective",
        "Defensive Score":3,
        },
        {
        "Type":"Something less protective",
        "Defensive Score":1,
        }
    ]
};

start();
