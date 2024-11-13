function setup() {
  createCanvas(800, 600);
}

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

let cowX = 400;
let cowY = 50;
let cowS = 0.5;

function startScreen() {
  background(10, 10, 10);
  push();
  fill(43, 189, 10);
  strokeWeight(10);
  stroke(21, 92, 4);
  rect(200, 100, 400, 200);
  pop();
}

function gameScreen() {
  background(10, 10, 10);

  cow(cowX, cowY, cowS);
  if (cowY < 300) {
    cowY = cowY + 10;
  }
}

function endScreen() {}

function draw() {
  startScreen();
}
