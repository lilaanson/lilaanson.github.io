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
const gates = document.getElementById("gates");
const woods1 = document.getElementById("woods1");
const woods2 = document.getElementById("woods2");
const woods3 = document.getElementById("woods3");
const woods4 = document.getElementById("woods4");
const woods5 = document.getElementById("woods5");
const monster = document.getElementById("monster");
const gatesOpen = document.getElementById("gatesOpen");
const hidingPlayerHealth = document.getElementById("hidingHealth");
const hidingMoney = document.getElementById("hidingMoney");
const hidingEnemyHealth = document.getElementById("hidingEnemyHealth");
const winScreen = document.getElementById("winScreen");
const loseScreen = document.getElementById("loseScreen");

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
var outsideNextButton = document.createElement("Button");
outsideNextButton.setAttribute("class", "button");
var attackFakeMonsterButton = document.createElement("Button");
attackFakeMonsterButton.setAttribute("class","button");
var blockHigh = document.createElement("Button");
blockHigh.setAttribute("class", "button");
var blockLow = document.createElement("Button");
blockLow.setAttribute("class", "button");
var nextFightButton = document.createElement("Button");
nextFightButton.setAttribute("class","button");
var usePotionButton = document.createElement("Button");
usePotionButton.setAttribute("class","button");
var useWeaponButton = document.createElement("Button");
useWeaponButton.setAttribute("class","button");
var backToEnemyAttackButton = document.createElement("Button");
backToEnemyAttackButton.setAttribute("class","button");
var attackHigh = document.createElement("Button");
attackHigh.setAttribute("class","button");
var attackLow = document.createElement("Button");
attackLow.setAttribute("class","button");

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
buttonHolder.appendChild(outsideNextButton);
buttonHolder.appendChild(attackFakeMonsterButton);
buttonHolder.appendChild(blockLow);
buttonHolder.appendChild(blockHigh);
buttonHolder.appendChild(nextFightButton);
buttonHolder.appendChild(usePotionButton);
buttonHolder.appendChild(useWeaponButton);
buttonHolder.appendChild(backToEnemyAttackButton);
buttonHolder.appendChild(attackHigh);
buttonHolder.appendChild(attackLow);


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
outsideNextButton.style.display = "none";
gates.style.display = "none";
woods1.style.display = "none";
woods2.style.display = "none";
woods3.style.display = "none";
woods4.style.display = "none";
woods5.style.display = "none";
monster.style.display = "none";
blockLow.style.display = "none";
blockHigh.style.display = "none";
attackFakeMonsterButton.style.display = "none";
gatesOpen.style.display = "none";
nextFightButton.style.display = "none";
usePotionButton.style.display = "none";
useWeaponButton.style.display = "none";
backToEnemyAttackButton.style.display = "none";
attackHigh.style.display = "none";
attackLow.style.display = "none";
winScreen.style.display = "none";
loseScreen.style.display = "none";


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
        description.textContent = "The year is 4023. The town of Boulder has been long overrun by nature and occupied by a small group of mystical inhabitants. They live in a proto-like community surrounded by a large gate. Outside of the gate is an unknown and dangerous entity. There are two rules in the community: Do not open the gates. Do not leave.";
        introTally += 1;
        introPic.style.display = "block";
        console.log(introTally);
    }
    else if(introTally === 1){
        description.textContent = "Your community is fed up with living in fear of what lies outside the gate. It is your responsibility to prepare what you have and venture outside of the gates.";
        introTally += 1;
    }
    else if(introTally === 2){
        description.textContent = "To do this, you will be given a random starting amount of money to use at three locations around town: the tavern, where you can learn valuable information; the potion shop, where you can buy potions to use on both yourself and your enemy; and the armory, where you can buy weapons. Your character strengths will be chosen at random and assigned by you.";
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
button1.addEventListener('click', mind);
button2.addEventListener('click', body);
button3.addEventListener('click', soul);
const characterTraits = [];
function displayButtons(){
    buttonHolder.style.display = "block";
    button1.style.display = "inline";
    button2.style.display = "inline";
    button3.style.display = "inline";
    button1.textContent = "Mind";
    button2.textContent = "Body";
    button3.textContent = "Soul";

    pickTraits3();
}
function pickTraits3(){
    const value = Math.floor(Math.random() * 13);
    if(value != 0){ // no such thing as 0 character trait
        characterTraits.push(value);
        diceResult.style.display = "block";
        diceRollsTitle.textContent = `Select trait to assign roll to: ${value}`;
        console.log(characterTraits);
    }
    else{
        pickTraits3();
    }
}

function mind(){
    button1.setAttribute("class","disabled");
    if(characterTraits.length === 1){
        const value = characterTraits[0];
        button1.textContent = `Mind: ${value}`;
        characterTraits[0] = {"Mind": value}
        rolling();
    }
    else if(characterTraits.length === 2){
        const value = characterTraits[1];
        button1.textContent = `Mind: ${value}`;
        characterTraits[1] = {"Mind": value}
        rolling();
    }
    else if(characterTraits.length === 3){
        const value = characterTraits[2];
        button1.textContent = `Mind: ${value}`;
        characterTraits[2] = {"Mind": value};
        setTimeout(() => {  pickMoney(); }, 2000); // change to longer

    }
}
function body(){
    button2.setAttribute("class","disabled");
    if(characterTraits.length === 1){
        const value = characterTraits[0];
        button2.textContent = `Body: ${value}`;
        characterTraits[0] = {"Body": value};
        rolling();
    }
    else if(characterTraits.length === 2){
        const value = characterTraits[1];
        button2.textContent = `Body: ${value}`;
        characterTraits[1] = {"Body": value};
        rolling();
    }
    else if(characterTraits.length === 3){
        const value = characterTraits[2];
        button2.textContent = `Body: ${value}`;
        characterTraits[2] = {"Body": value};
        setTimeout(() => {  pickMoney(); }, 2000); // change to longer
    }
}
function soul(){
    button3.setAttribute("class","disabled");
    if(characterTraits.length === 1){
        const value = characterTraits[0];
        button3.textContent = `Soul: ${value}`;
        characterTraits[0] = {"Soul": value};
        rolling();
    }
    else if(characterTraits.length === 2){
        const value = characterTraits[1];
        button3.textContent = `Soul: ${value}`;
        characterTraits[1] = {"Soul": value};
        rolling();
    }
    else if(characterTraits.length === 3){
        const value = characterTraits[2];
        button3.textContent = `Soul: ${value}`;
        characterTraits[2] = {"Soul": value};
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
    hidingMoney.textContent = money;
    diceResult.style.display = "block";
    diceRollsTitle.textContent = money;
    button5.textContent = "Start";
    introPic.style.display = "none";
    hidingMoney.textContent = money;
}
const whereToGo = "Choose where you would like to go. It is recommended that you prepare before heading outside of the gates. ***THE TAVERN AND ARMORY ARE CURRENTLY CLOSED. YOU HAVE BEEN GIVEN A WEAPON. FOR THE SAKE OF TIME, GO TO THE POTION SHOP AND OUTSIDE.*****";


function actuallyBegin(){
    money = hidingMoney.textContent;
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
    description.style.display = "block";
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
    button4.addEventListener('click', function(){tavern(money)});
    button6.addEventListener('click', function(){potionShop(money)});
    button7.addEventListener('click', function(){armory(money)});
    button8.addEventListener('click', outside);
}

//const playerHealthLog = [];
//const enemyHealthLog = [];
var enemyHealth = 30;

// hit impact out of 10, health out of 30?
const possiblePurchases = {
    "Weapons": [ 
        {
        "Type":"Energy Field",
        "DefensiveScore":4,
        "AttackScore":2
        },
        {
        "Type":"Astral Rune",
        "DefensiveScore":2,
        "AttackScore":4
        }],
    "Potions": [
        {
        "Type":"Healing",
        "Use":"Self",
        "HealthImpact":10,
        },
        {
        "Type":"Harming",
        "Use":"Enemy",
        "AttackScore":10,
        }]
};
console.log(possiblePurchases);
const playerPurchases = {
    "Weapons": [
        {
        "Type":"Energy Field",
        "DefensiveScore":4,
        "AttackScore":2
        }
    ],
    "Potions": []
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
        potionPurchasing(status);
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
        potionPurchasing();
    }
}
function potionPurchasing(money){
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
var updatedMoney;

function potionChoice(type){
    console.log("assigning to array");
    if(type==="harming"){
        playerPurchases.Potions.push(possiblePurchases.Potions[1])
        purchasedAtPotionShop = true;
        beenToPotionShop = true;
        doneAtPotionShop = true;
        updatedMoney = hidingMoney.textContent - 30;
        hidingMoney.textContent = updatedMoney;
        title.textContent = `Health: ${health} | ${updatedMoney} drachmas`;
        potionShop("done",updatedMoney);
    }
    else if(type==="healing"){
        playerPurchases.Potions.push(possiblePurchases.Potions[0])
        console.log(playerPurchases);
        purchasedAtPotionShop = true;
        beenToPotionShop = true;
        doneAtPotionShop = true;
        updatedMoney = hidingMoney.textContent - 40;
        hidingMoney.textContent = updatedMoney;
        title.textContent = `Health: ${health} | ${updatedMoney} drachmas`;
        potionShop("done",updatedMoney);
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
title.textContent = `Health: ${health} | ${money} drachmas`;
var outsideTally = 0;
var attackFakeMonster = false;
outsideNextButton.addEventListener('click', outside);
function outside(){
    outsideNextButton.style.display = "inline";
    outsideNextButton.textContent = "Next";
    if(outsideTally === 0){
        townCenter.style.display = "none";
        gates.style.display = "block";
        button4.style.display = "none";
        button6.style.display = "none";
        button7.style.display = "none";
        button8.style.display = "none";
        description.textContent = `You approach the gate and put pressure on it. It does not move. It is firmly dug into the earth around it from years of neglect. With more force, you manage to make a space just big enough to climb out of, wedging them back shut behind you.`;
        outsideTally += 1;
    }
    else if(outsideTally === 1){
        description.textContent = `With your weapons in hand, you walk out into the darkness. The moonlight coldly reflects on the leaf-lined ground, showing you the path ahead, but also announcing your every step.`
        gates.style.display = "none";
        woods2.style.display = "block";
        outsideTally +=1;
    }
    else if(outsideTally === 2){
        woods2.style.display = "none";
        woods5.style.display = "block";
        description.textContent = "In your nervousness, every tree looks like something to be feared. Slowly, you continue, not knowing what you are looking for, just knowing that you must find it. Knowing that it has found everyone else who has ventured as you are."
        outsideTally +=1;
    }
    else if(outsideTally === 3){
        woods5.style.display = "none";
        woods3.style.display = "block";
        description.textContent = "Something snaps behind you. You spin around and stare straight into a wispy white figure moving along the horizon, as if it is just floating by. Unsure of what to do, you grip your weapon."
        outsideNextButton.textContent = "Stand still";
        attackFakeMonsterButton.style.display = "inline";
        attackFakeMonsterButton.textContent = "Use attack";
        attackFakeMonsterButton.addEventListener('click',outside2);
        outsideTally += 1;
    }
    else if(outsideTally === 4 && attackFakeMonster === false){
        woods1.style.display = "block";
        woods3.style.display = "none";
        attackFakeMonsterButton.style.display = "none";
        description.textContent = "It moves along. It must have been harmless. Or a trick from your eyes in the darkness."
        outsideNextButton.textContent = "Next";
        outsideTally += 1;
    }
    else if(outsideTally === 5 && attackFakeMonster === false){
        description.textContent = "You continue for what feels like hours. The silence has turned into a ringing and pressure in your ears. In an instant, you see something recognizable ahead of you..."
        outsideTally += 1;
    }
    else if(outsideTally === 6 && attackFakeMonster === false){
        woods1.style.display = "none";
        gatesOpen.style.display = "block";
        description.textContent = "It is the gates. You have accidentally turned around at some point. As you look closer, you see they are open. That is unusual. Did someone follow you? No way. Did you leave them open? No way to know. With your heartbeat pounding in your ears, your steps become faster, breaking into a run towards the gates. Is everyone safe? The gates must remain closed no matter what."
        outsideTally += 1;
    }
    else if(outsideTally === 7 && attackFakeMonster ===  false){
        description.textContent = "10 feet from the gate, you pause. A chill runs down your arms."
        outsideNextButton.textContent = "Turn around";
        outsideTally +=1;
    }
    else if(outsideTally === 8 && attackFakeMonster === false){
        fight();
    }
    else if(outsideTally === 4 && attackFakeMonster === true){
        attackFakeMonsterButton.style.display = "none";
        outsideNextButton.textContent = "Turn Around";
        description.textContent = "You move to attack, but it runs, letting out a long wail. Frantically, you look around, in fear that the noise would draw attention. Suddenly, you freeze. A chill runs down your arms, and your breath hovers in your throat."
        outsideTally += 1;
    }
    else if(outsideTally === 5 && attackFakeMonster === true){
        fight();
    }
}
function outside2 (){
    attackFakeMonster = true;
    outside();
}

var health = 30;
const fightOptions = ["Low","High"]
var enemyChoiceIndex;
var enemyChoice;
var playerHealth = 30;

function fight(){
    console.log(playerHealth);
    gatesOpen.style.display = "none";
    monster.style.display = "block";
    description.textContent = "Behind you, you see it. It is the size of a person, but its head and arms are unusually long. Its skin is caked with dirt. It runs at you."
    blockHigh.style.display = "inline";
    outsideNextButton.style.display = "none"


    enemyChoiceIndex = Math.floor(Math.random() * 2);
    enemyChoice = fightOptions[enemyChoiceIndex];

    var enemyChoiceIndexBackup = Math.floor(Math.random() * 2);
    var enemyChoiceBackup = fightOptions[enemyChoiceIndexBackup];

    blockHigh.style.display = "inline";
    blockHigh.textContent = "Block high";
    blockHigh.addEventListener('click',function(){blockResult(enemyChoice,enemyChoiceBackup,"High",20,20)});

    blockLow.style.display = "inline";
    blockLow.textContent = "Block low";
    blockLow.addEventListener('click',function(){blockResult(enemyChoice,enemyChoiceBackup,"Low",20,20)});
}

var updatedHealth;
var damage;
var defenseScore;
var updatedEnemyHealth;

function blockResult(enemyChoice,enemyChoiceBackup,playerChoice,pHealth,eHealth){
    console.log("player health"+ pHealth);
    console.log("enemy health"+eHealth);
    blockHigh.style.display = "none";
    blockLow.style.display = "none";
    nextFightButton.style.display = "inline";
    nextFightButton.addEventListener('click',function(){fight2(updatedHealth,eHealth)});
    nextFightButton.textContent = "Next";
    if(enemyChoice === playerChoice){
        description.textContent = `The enemy attacked ${enemyChoice}, and you successfully defended ${playerChoice}.`
    }
    else if (enemyChoice != playerChoice && (characterTraits.Body > 6) && enemyChoiceBackup === playerChoice){
        description.textContent = `The enemy attacked ${enemyChoice}, and you successfully defended ${playerChoice}.`
    }
    else{
        damage = Math.floor(Math.random() * 11) + 5;
        defenseScore = playerPurchases.Weapons[0].DefensiveScore;
        var newDamage = damage - defenseScore;
        updatedHealth = pHealth - newDamage;
        description.textContent = `The enemy attacked ${enemyChoice}, and you defended ${playerChoice}, taking ${newDamage} health. You have ${updatedHealth} health remaining.`
        title.textContent = `Health: ${updatedHealth} | ${money} drachmas`;
    }
}


function fight2(pHealth,eHealth){
    if(pHealth <= 0){
        playerDeath();
    }
    else{
        nextFightButton.style.display = "none";
        description.textContent = "Select your attack";
        useWeaponButton.style.display = "inline";
        useWeaponButton.textContent = "Use weapon";
        usePotionButton.style.display = "inline";
        usePotionButton.textContent = "Use potion"
        useWeaponButton.addEventListener('click', function(){useWeapon(pHealth,eHealth)});
        usePotionButton.addEventListener('click', function(){usePotion(pHealth,eHealth)});
    }
}
var isPotionUsed = false;
function usePotion(pHealth,eHealth){
    console.log("in the potion use function");
    if(isPotionUsed === true){
        description.textContent = "You have already used your potion. Select another attack."

    }
    else if(isPotionUsed === false && purchasedAtPotionShop === true){
        isPotionUsed = true;
        usePotionButton.setAttribute("class","disabled");
        if(playerPurchases.Potions[0].Type === "Healing"){
            description.textContent = "You have increased your health by 10."
            updatedHealth = pHealth + 10;
            title.textContent = `Health: ${updatedHealth} | ${money} drachmas`;
            useWeaponButton.style.display = "none";
            usePotionButton.style.display = "none";
            backToEnemyAttackButton.style.display = "inline";
            backToEnemyAttackButton.textContent = "Next";
            backToEnemyAttackButton.addEventListener('click', function(){enemyAttackAgain(updatedHealth,eHealth)});
        }
        else if(playerPurchases.Potions[0].Type === "Harming"){
            updatedEnemyHealth = eHealth - 10;
            description.textContent = `You have decreased enemy health by 10. They have ${updatedEnemyHealth} health remaining.`
            useWeaponButton.style.display = "none";
            usePotionButton.style.display = "none";
            backToEnemyAttackButton.style.display = "inline";
            backToEnemyAttackButton.textContent = "Next";
            backToEnemyAttackButton.addEventListener('click', function(){enemyAttackAgain(pHealth,updatedEnemyHealth)});
        }        
    }
    else if(isPotionUsed === false && purchasedAtPotionShop === false){
        description.textContent = `You did not purchase a potion.`;
    }
}
var attackScore;

function useWeapon(pHealth,eHealth){
    enemyChoiceIndex = Math.floor(Math.random() * 2);
    enemyChoice = fightOptions[enemyChoiceIndex];
    useWeaponButton.style.display = "none";
    usePotionButton.style.display = "none";
    attackHigh.addEventListener('click', function(){attackingHighOrLow(enemyChoice,"High",pHealth,eHealth)});
    attackLow.addEventListener('click',function(){attackingHighOrLow(enemyChoice,"Low",pHealth,eHealth)});
    attackHigh.style.display = "inline";
    attackHigh.textContent = "Attack high";
    attackLow.textContent = "Attack low";
    attackLow.style.display = "inline";
}

function attackingHighOrLow(enemyChoice, playerChoice,pHealth,eHealth){
    console.log("player health"+ pHealth);
    console.log("enemy health"+eHealth);
    attackHigh.style.display = "none";
    attackLow.style.display = "none";
    backToEnemyAttackButton.style.display = "inline";
    backToEnemyAttackButton.textContent = "Next";
    if (enemyChoice === playerChoice){
        description.textContent = `You have attacked ${playerChoice}, and the enemy has defended ${enemyChoice}, taking no damage.`
        backToEnemyAttackButton.addEventListener('click', function(){enemyAttackAgain(pHealth,eHealth)});
    }
    else{
        damage = Math.floor(Math.random() * 10) - 1;
        attackScore = playerPurchases.Weapons[0].AttackScore;
        var newDamage = damage + attackScore;
        updatedEnemyHealth = eHealth - newDamage;
        description.textContent = `You have attacked ${playerChoice}, and the enemy has defended ${enemyChoice}, taking ${newDamage} health. The enemy has ${updatedEnemyHealth} health remaining.`
        backToEnemyAttackButton.addEventListener('click', function(){enemyAttackAgain(pHealth,updatedEnemyHealth)});
    }
}


function enemyAttackAgain(pHealth,eHealth){
    console.log("player health"+ pHealth);
    console.log("enemy health"+eHealth);
    if(eHealth <= 0){
        enemyDeath();
    }
    else{
        blockHigh.style.display = "inline";
        backToEnemyAttackButton.style.display = "none"
        description.textContent = "Select your defense."
    
        enemyChoiceIndex = Math.floor(Math.random() * 2);
        enemyChoice = fightOptions[enemyChoiceIndex];
    
        var enemyChoiceIndexBackup = Math.floor(Math.random() * 2);
        var enemyChoiceBackup = fightOptions[enemyChoiceIndexBackup];
    
        blockHigh.style.display = "inline";
        blockHigh.textContent = "Block high";
        blockHigh.addEventListener('click',function(){blockResult(enemyChoice,enemyChoiceBackup,"High",pHealth,eHealth)});
        blockLow.style.display = "inline";
        blockLow.textContent = "Block low";
        blockLow.addEventListener('click',function(){blockResult(enemyChoice,enemyChoiceBackup,"Low",pHealth,eHealth)});
    }
}

function playerDeath(){
    monster.style.display = "none";
    loseScreen.style.display = "block";
    nextFightButton.style.display = "none";
    description.textContent = `The Creature has defeated you. The community will remain in harm's way until the next hero comes along.`
}

function enemyDeath (){
    blockLow.style.display = "none";
    blockHigh.style.display = "none";
    monster.style.display = "none";
    winScreen.style.display = "block";
    description.textContent = `You have defeated the Creature! The community rejoices. They are finally safe.`
    backToEnemyAttackButton.style.display = "none";
}





///////DELETE ALL BEFORE STARTING!
//////////////////
//////////////////
////////////
////////////////////






start();

