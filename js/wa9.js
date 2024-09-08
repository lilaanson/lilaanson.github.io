const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}













const storyText = "It was dark and 30 fahrenheit outside and they just wanted to :insertx:, but their frisbee had flown over the :inserty: and they needed to get it or Bob would be mad. It cost 20 dollars after all. Of course they made little Jason go get it. He was :insertz:."
const insertX = ["go inside", "keep playing", "run away"];
const insertY = ["fence", "shed", "neighbor's house"];
const insertZ = ["scared out of his mind", "so annoyed", "always such a daredevil"];
//var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
//var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
//var insertY = ["the soup kitchen", "Disneyland", "the White House"];
//var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);




    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);


    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);

    }
    if(document.getElementById("uk").checked) {
        const weight = Math.round(20 / 1.21160) + " pounds";
        const temperature =  Math.round((30 - 32) / 1.8) + " centigrade";
        newStory = newStory.replace("20 dollars", weight);
        newStory = newStory.replace("30 fahrenheit", temperature);
     }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
