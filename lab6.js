let catcherX, catcherY;
let speedX;
let speedY;
let x;
let y;
let rockIsHit;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  catcherHeight = 50;
  catcherWidth = 50;
  catcherX = 50;
  catcherY = 320;

  x = 30;
  speedX = 5;
  y = 200;
  speedY = 5;

  rockX = random(0, 300);
  rockY = random(0, 300);

  rockIsHit = false;
}

function draw() {
  background(30, 200, 110);
  myCatcher(catcherX, catcherY); // the crab
  addRock(rockX, rockY);
  let d = dist( catcherX, catcherY, rockX, rockY);
  if (dist(catcherX, catcherY, rockX, rockY) < 40){
    myCatcher(catcherX, catcherY, "darkred");
  } else { myCatcher(catcherX, catcherY, "red");
         }
}

function myCatcher(x, y, size) {
  push();
  scale(size);
  translate(x, y);
  if (rockIsHit == true) {
    fill("darkred");
    //bottom body
  noStroke();
  ellipse(20, 10, 50);
  } else {
  //bottom body
  noStroke();
  fill("red");
  ellipse(20, 10, 50);
  }
  //left leg
  noStroke();
  fill("orangered");
  rect(-10, 9, 15);
  rect(-20, 15, 15);
  rect(-30, 25, 15);
  //left arm
  noStroke();
  fill("orangered");
  rect(-10, 0, 15);
  rect(-20, -10, 15);
  //right leg
  fill("orangered");
  rect(36, 9, 15);
  rect(46, 15, 15);
  rect(56, 25, 15);
  //right arm
  noStroke();
  fill("orangered");
  rect(36, 0, 15);
  rect(45, -9, 15);
  //bottom body
 // noStroke();
 // fill("red");
  //ellipse(20, 10, 50);
  //head
  noStroke();
  fill("red");
  ellipse(20, -25, 40);
  //eyes
  if (mouseIsPressed == true) {
    fill("black");
  } else {
    fill("white");
    ellipse(25, -30, 15); //right white
    ellipse(15, -30, 15); //left white
    fill("black");
    ellipse(25, -30, 5);
    ellipse(15, -30, 5);
  } //the eyes blink
  //smile
  if (mouseIsPressed == true) {
    fill("black");
  } //the smile does not change when mouse is pressed
  arc(21, -19, 15, 15, 5, 180);
  pop();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    catcherX = catcherX - 10;
  }
  if (keyCode === RIGHT_ARROW) {
    catcherX = catcherX + 10;
  }
  if (keyCode === UP_ARROW) {
    catcherY = catcherY - 10;
  }

  if (keyCode === DOWN_ARROW) {
    catcherY = catcherY + 10;
  }
}

function addRock(x, y, size) {
  push();
  scale(size);
  translate(x, y);
  noStroke();
  fill("darkgrey");
  rect(20, 30, 20);
}
