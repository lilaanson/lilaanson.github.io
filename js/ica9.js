function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "hi";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
 
  function mouseOver() {
    document.getElementById("box").style.backgroundColor = "lightBlue";
  }
  
  function mouseOut() {
    document.getElementById("box").style.backgroundColor = "pink";
  }

  document.getElementById("box").onmouseover = function() {mouseOver()};
  document.getElementById("box").onmouseout = function() {mouseOut()};
