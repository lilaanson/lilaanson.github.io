const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y= y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size, 0, 2*Math.PI);
        ctx.fill();
    }
    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
          }
        
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
          }
        
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
          }
        
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
          }
        
        this.x += this.velX;
        this.y += this.velY;
        
    }
    collisionDetect() {
        for (const ball of balls) {
           if (!(this === ball)) {
              const dx = this.x - ball.x;
              const dy = this.y - ball.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
  
              if (distance < this.size + ball.size) {
                //ball.color = this.color = randomRGB();
                //delete this.ball;

                if (this.size > ball.size) {
                    this.size += 5;
                    //this.velX += ball.velX;
                    //this.velY += ball.velY;
                    const index = balls.indexOf(ball);
                    if (index > -1){
                        balls.splice(index, 1);
                    }
                }
                else{
                    ball.size += 5;
                    //ball.velX += this.velX;
                    //ball.velY += this.velY;
                    const index = balls.indexOf(this.ball);
                    if (index > -1){
                    balls.splice(index, 1);
                    }
                }
                

              }
           }
        }
     }
}


const balls = [];
for (i=0;i<25;i++){
    const size =  10;
    const ball = new Ball(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-5, 5),
        random(-5, 5),
        randomRGB(),
        size
    );

    balls.push(ball);
}



function loop() {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0,0,width,height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();
//const testBall = new ball(100, 100, 2, 2, "red", 10);
// const testBall1 = new ball(400, 238, 2, 2, "blue", 10);

//testBall.draw();

//const i = 0;
//while(i<100) {
    //testBall.update();
    //i += 1;
//}
// testBall1.draw();