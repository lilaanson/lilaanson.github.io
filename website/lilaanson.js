const scrollButton = document.getElementById("backToTop");

scrollButton.addEventListener('click',topF);

function topF(){
    document.body.scrollIntoView({
        behavior: "smooth",
      });
}