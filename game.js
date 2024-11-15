function setup() {
  createCanvas(800, 600);
}

let cowX = 400;
let cowY = 10;
let cowS = 0.5;

let gravity = 0.1;
let speed = 0.5;

let stateOfGame = 0;

function cow(x, y, s) {
  noStroke();

  //back legs
  fill(161, 159, 153);
  rect(x - 50 * s, y + 100 * s, 20 * s, 120 * s);
  rect(x + 120 * s, y + 100 * s, 20 * s, 120 * s);

  //body
  fill(219, 217, 211);

  rect(x - 100 * s, y - 50 * s, 350 * s, 170 * s, 80 * s);
  rect(x - 190 * s, y - 50 * s, 200 * s, 80 * s);
  rect(x - 240 * s, y - 50 * s, 90 * s, 110 * s, 30 * s);

  //front legs
  rect(x - 10 * s, y + 100 * s, 20 * s, 120 * s);
  rect(x + 160 * s, y + 100 * s, 20 * s, 120 * s);

  //spots
  fill(61, 55, 49);
  beginShape();
  vertex(x - 240 * s, y - 20 * s);
  bezierVertex(
    x - 210 * s,
    y - 20 * s,
    x - 195 * s,
    y - 5 * s,
    x - 195 * s,
    y + 35 * s
  );
  vertex(x - 240 * s, y + 35 * s);
  vertex(x - 240 * s, y - 20 * s);
  endShape();

  beginShape();
  vertex(x - 100 * s, y + 40 * s);
  vertex(x - 100 * s, y + 30 * s);
  bezierVertex(
    x + 50 * s,
    y + 30 * s,
    x + 50 * s,
    y + 90 * s,
    x + 50 * s,
    y + 120 * s
  );
  vertex(x - 20 * s, y + 120 * s);
  bezierVertex(
    x - 100 * s,
    y + 120 * s,
    x - 100 * s,
    y + 60 * s,
    x - 100 * s,
    y + 40 * s
  );
  endShape();

  beginShape();
  vertex(x - 175 * s, y + 30 * s);
  vertex(x - 100 * s, y + 30 * s);
  vertex(x - 82 * s, y + 100 * s);
  vertex(x - 125 * s, y + 30 * s);
  endShape();

  beginShape();
  vertex(x - 15 * s, y - 50 * s);
  vertex(x + 155 * s, y - 50 * s);
  bezierVertex(
    x + 155 * s,
    y + 40 * s,
    x + 100 * s,
    y + 40 * s,
    x + 70 * s,
    y + 40 * s
  );
  bezierVertex(
    x - 30 * s,
    y + 40 * s,
    x - 20 * s,
    y - 20 * s,
    x - 40 * s,
    y - 50 * s
  );
  vertex(x - 15 * s, y - 50 * s);
  endShape();

  push();
  translate(x + 170 * s, y + 70 * s);
  rotate(2.4);
  ellipse(0, 0, 70 * s, 50 * s);
  pop();

  //face

  fill(222, 151, 115);
  rect(x - 240 * s, y + 10 * s, 90 * s, 50 * s, 30 * s);

  fill(176, 115, 84);
  ellipse(x - 215 * s, y + 40 * s, 5 * s);
  ellipse(x - 175 * s, y + 40 * s, 5 * s);

  fill(18, 17, 16);
  ellipse(x - 225 * s, y - 5 * s, 10 * s);
  ellipse(x - 165 * s, y - 5 * s, 10 * s);

  //ears

  fill(61, 55, 49);
  beginShape();
  vertex(x - 232 * s, y - 40 * s);
  bezierVertex(
    x - 232 * s,
    y - 60 * s,
    x - 242 * s,
    y - 65 * s,
    x - 260 * s,
    y - 60 * s
  );
  bezierVertex(
    x - 255 * s,
    y - 45 * s,
    x - 240 * s,
    y - 40 * s,
    x - 232 * s,
    y - 40 * s
  );
  endShape();

  beginShape();
  vertex(x - 159 * s, y - 40 * s);
  bezierVertex(
    x - 159 * s,
    y - 65 * s,
    x - 145 * s,
    y - 64 * s,
    x - 130 * s,
    y - 60 * s
  );
  bezierVertex(
    x - 130 * s,
    y - 50 * s,
    x - 141 * s,
    y - 42 * s,
    x - 151 * s,
    y - 40 * s
  );
  endShape();
}

function gameBackground() {
  background(17, 18, 28);
  fill(15, 33, 19);
  ellipse(600, 500, 700, 450);

  fill(21, 46, 26);
  ellipse(200, 500, 600, 400);

  noStroke();
  fill(28, 69, 26);
  rect(0, 540, 800, 100);

  beginShape();
  vertex(180, 550);
  vertex(175, 515);
  vertex(190, 530);
  vertex(210, 505);
  vertex(205, 550);
  endShape();

  beginShape();
  vertex(595, 550);
  vertex(585, 525);
  vertex(600, 530);
  vertex(610, 510);
  vertex(615, 530);
  vertex(630, 525);
  vertex(620, 550);
  endShape();

  fill(36, 255, 0, 80);
  beginShape();
  vertex(395, 0);
  vertex(260, 540);
  vertex(540, 540);
  vertex(405, 0);
  endShape();
  arc(400, 540, 280, 20, 0, PI, CHORD);
}

function startScreen() {
  push();
  fill(43, 189, 10);
  strokeWeight(10);
  stroke(21, 92, 4);
  rect(300, 420, 200, 100);
  pop();

  push();
  fill(21, 92, 4);
  textSize(50);
  text("START", 320, 490);
  pop();

  fill(115, 63, 32);
  rect(10, 10, 780, 150);

  fill(166, 111, 78);
  rect(20, 20, 760, 130);

  push();
  let textLine1 =
    "Hey! We need your help! This cow we abducted, Betsy, she's proving a real handful. No one told us";
  let textLine2 =
    "cows are so loud. We need to beam her back to earth! Use your spacebar to slow down her decent";
  let textLine3 = "and get her back on the ground safe and sound.";
  fill(255, 255, 255);
  textSize(18);
  text("Mysterious Voice:", 70, 50);
  textSize(16);
  text(textLine1, 40, 80);
  text(textLine2, 40, 100);
  text(textLine3, 40, 120);

  pop();
}

function gameScreen() {
  cow(cowX, cowY, cowS);
  if (keyIsDown(32)) {
    gravity = -0.3;
  } else {
    gravity = 0.1;
  }
  speed = speed + gravity;
  cowY = cowY + speed;

  if (cowY > 450 && speed < 4) {
    stateOfGame = 2;
  } else if (cowY > 450 && speed >= 4) {
    stateOfGame = 3;
  }
}

function endScreenWin() {
  fill(115, 63, 32);
  rect(10, 10, 780, 150);
  fill(166, 111, 78);
  rect(20, 20, 760, 130);
  fill(255, 255, 255);
  textSize(18);
  text("Mysterious Voice:", 70, 50);

  textSize(16);
  text(
    "Hooray! You did it! We are so gratefull we might even spare you when we come back to invade your",
    40,
    80
  );
  text(
    "planet. But let's not get ahead of ourselves, we still have many more things to abduct first... But no",
    40,
    100
  );
  text("more cows!", 40, 120);

  push();
  fill(43, 189, 10);
  strokeWeight(10);
  stroke(21, 92, 4);
  rect(265, 420, 270, 100);
  pop();

  push();
  fill(21, 92, 4);
  textSize(50);
  text("RESTART", 285, 490);
  pop();
}

function endScreenLose() {
  fill(115, 63, 32);
  rect(10, 10, 780, 150);
  fill(166, 111, 78);
  rect(20, 20, 760, 130);
  fill(255, 255, 255);
  textSize(18);
  text("Mysterious Voice:", 70, 50);

  textSize(16);
  text("...", 40, 80);
  text("Betsy?", 40, 100);
  text("Oh... Oh no, Betsy.", 40, 120);

  push();
  fill(43, 189, 10);
  strokeWeight(10);
  stroke(21, 92, 4);
  rect(265, 420, 270, 100);
  pop();

  push();
  fill(21, 92, 4);
  textSize(50);
  text("RESTART", 285, 490);
  pop();
}

function draw() {
  if (stateOfGame === 0) {
    gameBackground();
    startScreen();
  } else if (stateOfGame === 1) {
    gameBackground();
    gameScreen();
  } else if (stateOfGame === 2) {
    gameBackground();
    endScreenWin();
  } else if (stateOfGame === 3) {
    gameBackground();
    endScreenLose();
  }
}

function mouseClicked() {
  if (
    stateOfGame === 0 &&
    mouseX > 295 &&
    mouseX < 505 &&
    mouseY > 415 &&
    mouseY < 525
  ) {
    stateOfGame = 1;
    gravity = 0.1;
    speed = 0.5;
  } else if (
    stateOfGame === 2 &&
    mouseX > 260 &&
    mouseX < 550 &&
    mouseY > 415 &&
    mouseY < 525
  ) {
    stateOfGame = 1;
    cowY = 10;
    gravity = 0.1;
    speed = 0.5;
  } else if (
    stateOfGame === 3 &&
    mouseX > 260 &&
    mouseX < 550 &&
    mouseY > 415 &&
    mouseY < 525
  ) {
    stateOfGame = 1;
    cowY = 10;
    gravity = 0.1;
    speed = 0.5;
  }
}
