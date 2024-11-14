let x = 300;
let y = 0;
let s = 50;

let gravity = 0.1;
let speed = 0.5;

let floor = 480;

let gameState = 0;

function game() {
  ellipse(x, y, 50);
}

function draw() {
  clear();
  game(x, y, s);
  rect(0, floor, 550, 20);
  if (gameState === 0) {
    if (keyIsDown(32)) {
      gravity = -0.3;
    } else {
      gravity = 0.1;
    
    }

    speed = speed + gravity;
    y = y + speed;


    if (y > 450 && speed < 3){
      gameState = 1;
      
      }
      else if (y > 450 && speed >= 3){
        gameState = 2;
            }
    }

    if (gameState === 1){
      text("you win", 100, 100);
    }

    if (gameState === 2){
      text("you loose", 100, 100);
    }
  }
  
