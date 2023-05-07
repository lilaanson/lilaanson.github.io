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
const potionShopPic = document.getElementById("potionShop");
const buttonBegin = document.getElementById("buttonBegin");
const potionOptions = document.getElementById("potions");


//BUTTONS
var button1 = document.createElement("Button");
button1.setAttribute("class", "button");
var button2 = document.createElement("Button");
button2.setAttribute("class", "button");
var button3 = document.createElement("Button");
button3.setAttribute("class", "button");
var button4 = document.createElement("Button");
button4.setAttribute("class", "button");
var button5 = document.createElement("Button");
button5.setAttribute("class", "button");
var button6 = document.createElement("Button");
button6.setAttribute("class", "button");
var button7 = document.createElement("Button");
button7.setAttribute("class", "button");
var button8 = document.createElement("Button");
button8.setAttribute("class", "button");
var potionButton = document.createElement("Button");
potionButton.setAttribute("class", "button");
var pinkButton = document.createElement("Button");
pinkButton.setAttribute("class", "button");
var backButton = document.createElement("Button");
backButton.setAttribute("class", "button");
var blueButton = document.createElement("Button");
blueButton.setAttribute("class", "button");
var backFromShopButton = document.createElement("Button");
backFromShopButton.setAttribute("class","button");

buttonHolder.appendChild(button1);
buttonHolder.appendChild(button2);
buttonHolder.appendChild(button3);
buttonHolder.appendChild(button4);
buttonHolder.appendChild(button5);
buttonHolder.appendChild(button6);
buttonHolder.appendChild(button7);
buttonHolder.appendChild(button8);
buttonHolder.appendChild(potionButton);
buttonHolder.appendChild(pinkButton);
buttonHolder.appendChild(backButton);
buttonHolder.appendChild(blueButton);
buttonHolder.appendChild(backFromShopButton);

//INITIALIZING
buttonHolder.style.display = "none";
diceRollsTitle.style.display = "none";
diceResult.style.display = "none";
title.style.display = "none";
description.style.display = "none";
button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none";
button4.style.display = "none";
button6.style.display = "none";
button7.style.display = "none";
button8.style.display = "none";
potionButton.style.display = "none";
buttonBegin.style.display = "none";
button5.style.display = "none";
titleScreen.style.display = "none";
townCenter.style.display = "none";
introPic.style.display = "none";
potionShopPic.style.display = "none";
potionOptions.style.display = "none";
blueButton.style.display = "none";
pinkButton.style.display = "none";
backButton.style.display = "none";
backFromShopButton.style.display = "none";

button5.addEventListener('click', intro);

function start(){
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
        introTally += 1;
    }
}

function pickTraits1(){
    button5.style.display = "none";
    introPic.style.display = "none";
    townCenter.style.display = "block";
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
        setTimeout(() => {  pickMoney(); }, 2000); // change to longer

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
        setTimeout(() => {  pickMoney(); }, 2000); // change to longer
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
        setTimeout(() => {  pickMoney(); }, 2000); // change to longer
    }
}
var money = 0
function pickMoney(){
    description.textContent = "You will now roll for your starting money, refered to as drachmas. The highest possible starting amount is 150, and the lowest is 75. Your drachmas will affect the quality and type of tools and weapons you can buy."
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
const whereToGo = "Choose where you would like to go. It is recommended that you prepare before heading outside of the gates.";

var health = 30;

function actuallyBegin(){
    title.style.display = "block";
    title.textContent = `Health: ${health} | ${money} drachmas`;
    backFromShopButton.style.display = "none";
    potionOptions.style.display = "none";
    potionShopPic.style.display = "none";
    townCenter.style.display = "block";
    blueButton.style.display = "none";
    pinkButton.style.display = "none";
    backButton.style.display = "none";
    backButton.style.display = "none"
    diceRollsTitle.style.display = "none";
    diceResult.style.display = "none";
    button5.style.display = "none";
    description.textContent = whereToGo;
    buttonHolder.style.display = "block";
    button4.style.display = "inline";
    button6.style.display = "inline";
    button7.style.display = "inline";
    button8.style.display = "inline";
    button4.textContent = "Tavern";
    button6.textContent = "Potion Shop";
    button7.textContent = "Armory";
    button8.textContent = "Outside the gates"
    button4.addEventListener('click', tavern);
    button6.addEventListener('click', potionShop);
    button7.addEventListener('click', armory);
    button8.addEventListener('click', outside);
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
        "Type":"Harming",
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
const playerPurchases = {
    "Weapons": [],
    "Potions": [],
    "Armor": []
};

backFromShopButton.addEventListener('click',actuallyBegin);
var potionTally = 0
var beenToPotionShop = false;
var purchasedAtPotionShop = false;
var doneAtPotionShop = false;
function potionShop(status){
    if(potionTally === 0){
        console.log(" in the potion shop");
        townCenter.style.display = "none";
        potionShopPic.style.display = "block";
        description.textContent = "You are greeted by an elderly women wearing a long orange shawl. The air is heavy and still and the heat shining in from the windows makes the bottles along the shelves drip with reflective liquids."
        potionButton.style.display = "inline";
        potionButton.textContent = "Next";
        button4.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
        button8.style.display = "none";
        potionTally += 1;
        potionButton.addEventListener('click', potionShop);
    }
    else if(potionTally === 1){
        description.textContent = `Her voice is low and raspy but she has a warm smile and bright eyes. "Looking for anything specific today?"`
        potionTally += 1;
    }
    else if (potionTally === 2){
        description.textContent = `You respond to her and her face drops. "I was told you'd be coming. I have a few potions I'd recommend for you. The price and qualities are all listed on the label. I can only let ya buy one potion from me today."`
        potionTally += 1;
    }
    else if(potionTally === 3){
        potionPurchasing();
        potionTally +=1;
    }
    else if(status === "done"){
        potionShopPic.style.display = "block";
        potionOptions.style.display = "none";
        description.style.display = "block";
        blueButton.style.display = "none";
        pinkButton.style.display = "none";
        description.textContent = `"Wise choice. Best to head back to town now. Being seen with you here will create too much of a stir."`;
        potionTally += 1;
        backFromShopButton.style.display = "inline";
        backButton.style.display = "none";
        backFromShopButton.textContent = "Back to Town Center";
    }   
    else if(beenToPotionShop === true && purchasedAtPotionShop === true){
        button4.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
        button8.style.display = "none";
        townCenter.style.display = "none";
        potionShopPic.style.display = "block";
        description.textContent = `"I thought I told you not to come back here. If anyone saw you come in, there's gonna be trouble for the both of us."`
        backButton.addEventListener('click',actuallyBegin);
        backFromShopButton.style.display = "inline";
        backButton.style.display = "none";
        backFromShopButton.textContent = "Back to Town Center";
    } 
    else if(beenToPotionShop === true && purchasedAtPotionShop === false){
        console.log("should be here");
        potionPurchasing();
    }
}
function potionPurchasing(){
    button4.style.display = "none";
    button6.style.display = "none";
    button7.style.display = "none";
    button8.style.display = "none";
    potionShopPic.style.display = "none";
    potionOptions.style.display = "block";
    description.style.display = "none";
    potionButton.style.display = "none";
    pinkButton.style.display = "inline";
    backButton.style.display = "inline";
    blueButton.style.display = "inline";
    pinkButton.textContent = "Purchase (40 drachmas)";
    backButton.textContent = "Back to Town Center";
    blueButton.textContent = "Purchase (30 drachmas)";
    pinkButton.addEventListener('click', function(){potionChoice("healing")});
    blueButton.addEventListener('click', function(){potionChoice("harming")});
    backButton.addEventListener('click', potionShopBackToTown)
}

function potionChoice(type){
    console.log("assigning to array");
    if(type==="harming"){
        playerPurchases.Potions.push(possiblePurchases.Potions[1])
        purchasedAtPotionShop = true;
        beenToPotionShop = true;
        doneAtPotionShop = true;
        money -= 30;
        title.textContent = `Health: ${health} | ${money} drachmas`;
        potionShop("done");
    }
    else if(type==="healing"){
        playerPurchases.Potions.push(possiblePurchases.Potions[0])
        purchasedAtPotionShop = true;
        beenToPotionShop = true;
        doneAtPotionShop = true;
        money -= 40;
        title.textContent = `Health: ${health} | ${money} drachmas`;
        potionShop("done");
    }
    console.log(playerPurchases);
}
function potionShopBackToTown(){
    beenToPotionShop = true;
    actuallyBegin();
}

function tavern(){

}
function armory(){

}
function outside(){

}














function cheatStart(){
    introTally === 5
    const characterTraits = {
        "traits": [{"Trait": "Mind", "Value": 10}, {"Trait": "Body", "Value": 5}, {"Trait": "Soul", "Value": 2}]
    }
    money = 102;
    townCenter.style.display = "block";
    description.style.display = "block";
    actuallyBegin();
}

cheatStart();
