const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
var imgArray = ['mountain1.jpg', 'mountain2Copy.jpg', 'mountain4.jpg', 'mountain3.jpg', 'mountain5.jpg'];
/* Declaring the alternative text for each image file */
var altDict = {
    'mountain1.jpg': "a stream flowing through snowy mountains",
    'mountain2.jpg': "a film photo of sunny mountains",
    'mountain4.jpg': "mountains under a pink sky",
    'mountain3.jpg': "a film photo of a snowy mountain peak",
    'mountain5.jpg': "a dirt path leading to sharp mountain peaks",
}
/* Looping through images */

for(img of imgArray){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "/img/"+img);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => displayedImage.src = e.target.src);}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getAttribute("class") === "dark") {
      btn.setAttribute("class", "light");
      btn.textContent = "Lighten";
      overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
      btn.setAttribute("class", "dark");
      btn.textContent = "Darken";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  });