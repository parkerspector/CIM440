var eyeSize= 15;
var pointX= 35;
var pointY=35;
var heightX= 290;
var widthY= 220;
var pupilColor= "blue";
var colorButton;
var faceColor = "orange";

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(100,75,75);

  colorButton= createButton("Click to turn pink");//function that is part of p5.dom library, it generates an html button;
  colorButton.position(50,50);
  colorButton.mousePressed(function(){
    faceColor="pink"
  });
}

function draw() {
  // put drawing code here
  var drawMessage = "This message is in the draw loop";
  console.log(drawMessage);
  background(255);

  //Use an if statement to change background color

  if(mouseX< width/2){
    //do something
    console.log("left hand side");
    background("blue");
  }
  if(mouseX> width/2){
    //do something
    console.log("right hand side");
    background("grey");
  }
  //body
  fill(faceColor);//adjusts inner shape color
  stroke ("brown");//outer edge color
  ellipse(250,230,150,150)

  //left eye
  ellipse(220,220,pointX,pointY);
  //right eye
  ellipse(heightX,widthY,35,35);

  //left pupil
  fill(pupilColor);
  stroke ("blue");
  ellipse(230,220,eyeSize,eyeSize);
  //right pupil
  fill(pupilColor);
  stroke ("blue");
  ellipse(300,220,eyeSize,eyeSize);

  fill("brown");
  stroke("brown");
  triangle((width/2)+10 ,(height/2) -20,(width/2)+10, (height/2)+ 20, (width/2) -10, (height/2) +20);

  fill("pink");
  stroke("red");
  rect(215,280,50,5);//rect starts drawming from left hand corner



}


function mousePressed(){
  //faceColor = "red";
}

function mouseReleased(){
  //faceColor= "blue";
}

function keyPressed(){
  //faceColor="white";

  console.log("key" + key);
  console.log("keyCode" + keyCode);

  //conditional: if condition equals true, then do what is inside curly braces.
  if(key == "w"){
    //what you want to happen goes in here
    faceColor="white";
  }
  if(key == "r"){
    //what you want to happen goes in here
    faceColor="red";
  }
}
