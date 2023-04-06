const hellenisticURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q=hellenistic"
const baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"


const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener('click', showAnswer);

async function getQuote() {
    try {
        const response = await fetch(hellenisticURL); // get all the stuff from the url!!! 
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json(); // save the fetched code under variable json
        const IDs = json.objectIDs; // create an array that pulls objectIDs from json, each ID has a unique page in baseURL
        const randomIndex = [Math.floor(Math.random()*IDs.length)]; // select a random id from my array
        const selectedID = IDs[randomIndex];
        const results = await fetch(baseURL + selectedID); // i now have one specific art item in json
        const resultsjson = await results.json(); // formatted? idk
        if (resultsjson.primaryImage == ""){
            repeatFunction()
        }
        else {
        displayQuote(resultsjson.title);
        showAnswer(resultsjson.primaryImage);
        }
    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}
async function repeatFunction() {
    try {
        const response = await fetch(hellenisticURL); // get all the stuff from the url!!! 
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json(); // save the fetched code under variable json
        const IDs = json.objectIDs; // create an array that pulls objectIDs from json, each ID has a unique page in baseURL
        const randomIndex = [Math.floor(Math.random()*IDs.length)]; // select a random id from my array
        const selectedID = IDs[randomIndex];
        const results = await fetch(baseURL + selectedID); // i now have one specific art item in json
        const resultsjson = await results.json(); // formatted? idk
        if (resultsjson.primaryImage == ""){
            repeatFunction()
        }
        else {
        displayQuote(resultsjson.title);
        showAnswer(resultsjson.primaryImage);
        }
    }
    catch (err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}


function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function showAnswer(quote) {
    const pic = quote;
    const photoLocation = document.querySelector("#changingImage");
    photoLocation.src = pic;
    photoLocation.alt = "Image Unavailable";
}

getQuote();