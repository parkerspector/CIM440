//pong clone
//mouse to control both paddles

var paddleA, paddleB, ball, wallTop, wallBottom;
var wallTopR,wallTopL, wallBottomR, wallBottomL;
var MAX_SPEED = 10;

var paddleBMove = false;
var computer = 0;
var user = 0;





function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}


function preload() {
  hockey = loadImage("image/hockey.jpg");
}

function setup() {
  createCanvas(800, 400);
  textSize(20);
  //frameRate(6);



  paddleA = createSprite(30, height/2, 10, 100);
  paddleA.immovable = true;

  paddleB = createSprite(width-28, height/2, 10, 100);
  paddleB.immovable = true;

  wallTop = createSprite(width/2, -30/2, width, 30);
  wallTop.immovable = true;

  wallBottom = createSprite(width/2, height+30/2, width, 30);
  wallBottom.immovable = true;

  wallTopR = createSprite(width, 0, 10, height/2 + 100);
  wallTopR.immovable = true;

  wallTopL = createSprite(width- 800, 0, 10, height/2 + 100);
  wallTopL.immovable = true;

  wallBottomR = createSprite(width, 400, 10, height/2 + 100);
  wallBottomR.immovable = true;

  wallBottomL = createSprite(width-800, 400, 10, height/2 + 100);
  wallBottomL.immovable = true;

  ball = createSprite(width/2, height/2, 10, 10);
  ball.maxSpeed = MAX_SPEED;

  paddleA.shapeColor = paddleB.shapeColor =ball.shapeColor = color(0, 0, 255);
  wallTopR.shapeColor = color(0,0,0);
  wallTopL.shapeColor = color(0,0,0);
  wallBottomL.shapeColor = color(0,0,0);
  wallBottomR.shapeColor = color(0,0,0);


  ball.setSpeed(MAX_SPEED, -180);
}

function draw() {
  background(hockey);

  paddleA.position.y = mouseY;
  paddleA.position.x = mouseX;

  paddleB.position.x = 700;

if( paddleB.position.y  > height){
  paddleBMove = true;

}


if( paddleB.position.y  < 0){
paddleBMove = false;
}

if(paddleBMove == true){
  paddleB.position.y =   paddleB.position.y - 5;

}else{
  paddleB.position.y =   paddleB.position.y + 5;

}




  ball.bounce(wallTop);
  ball.bounce(wallBottom);
  ball.bounce(wallTopR);
  ball.bounce(wallTopL);
  ball.bounce(wallBottomL);
  ball.bounce(wallBottomR);


  var swing;
  if(ball.bounce(paddleA)) {
    swing = (ball.position.y-paddleA.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()+swing);
  }

  if(ball.bounce(paddleB)) {
    swing = (ball.position.y-paddleB.position.y)/3;
    ball.setSpeed(MAX_SPEED, ball.getDirection()-swing);
  }

  if(ball.position.x<0) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 0);
    //computer scores
    computer = computer + 1;
  }

  if(ball.position.x>width) {
    ball.position.x = width/2;
    ball.position.y = height/2;
    ball.setSpeed(MAX_SPEED, 180);
    //users scores
    user = user + 1;

  }


  text(computer, 20,205);
  text(user, 730,205);
  text("Air Hockey",375,30);


    drawSprites();

}
