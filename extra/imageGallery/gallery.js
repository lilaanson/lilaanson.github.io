const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg', 'mountain4.jpg', 'mountain5.jpg'];
/* Declaring the alternative text for each image file */
const altDict = {
    'mountain1.jpg': "a stream",
    'mountain2.jpg': "film photo",
    'mountain3.jpg': "more mountains",
    'mountain4.jpg': "more film photo",
    'mountain5.jpg': "dirt path",
};
/* Looping through images */
for(img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', img); //if your images are not in the same folder as this file, you will have to
                             // replace the xxx with a string that combines some type of /img/ (for example) with img
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    //add event listener to new image that makes it the biggest image on the screen
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;  
    })

}

/* Wiring up the Darken/Lighten button */
//this is where the eventListener will be. add this to btn, which was defined on line 4!
//use if else statements that check the light/dark class on the button and change the screen accordingly

btn.addEventListener("click", () => {
    if(){

    }
    else{

    }
})

//     newImage.setAttribute('src', `images/${img}`);
// "images/" + img