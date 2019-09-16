var pointX=0;
var pointY=0;

var point2; // variable undefined

var faceColor= "blue"

var colorButton;

function setup(){
  //put swtup code here
  createCanvas(500,500);
  pointX= width/2;
  pointY= height/2;

  //console.log("pointX"+ pointX + "pointY"+ pointY);


  var message = "Hello";// The scope of this variable is only available inside of the setup function. If used in draw or any other function, you will recieve an error.
  console.log(message);
  //console.log(drawMessage);//error drawMessage is not defined, drawMessage was declared only in the draw

  colorButton= createButton("Click to turn purple");//function that is part of p5.dom library, it generates an html button;
  colorButton.position(20,20);
  colorButton.mousePressed(function(){
    faceColor="purple"
  })

}

function draw(){
  //put drawing code here
  //console.log(message);// message is not defined, because the  message variable is only in the setup's scope
  var drawMessage = "This message is in the draw loop";
  console.log(drawMessage);
  background(255);

  //Use an if statement to change background color

  if(mouseX< width/2){
    //do something
    console.log("left hand side");
    background("grey");
  }
  if(mouseX> width/2){
    //do something
    console.log("right hand side");
    background("green");
  }

  if(mouseX == width/2){
    background("blue");
    console.log("center");
  }

  //pointx=100;
  //pointy=100;
  pointX = mouseX;
  pointY = mouseY;

  fill(faceColor);
  rect(pointX -100, pointY -100, 200,200);//face
  fill(255);
ellipse(pointX, pointY, 10,10);
ellipse(pointX + 20, pointY -20, 30,30);
ellipse(pointX - 20, pointY -20, 30,30);

  //arc(x,y,width,height,start,end)
  arc(pointX,pointY + 10, 50,50,0,PI);

  //ellipse (point2, point2, 10, 10);
}//end of draw

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
}//end of keypressed

//end of document
