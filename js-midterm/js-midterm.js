const startButton = document.getElementById('start');

startButton.addEventListener('click', createTitle);
startButton.addEventListener('click', startGame);


function createTitle() {
    const customName = document.getElementById('customname');
    const name = customName.value;
    const para = document.createElement("p");
    para.textContent = `${name}'s Odd Day Out On The Town`;
    document.body.appendChild(para);
    document.getElementById('startStuff').style.display= "none";
}

function startGame() {
    // best method to use for key movements?
}