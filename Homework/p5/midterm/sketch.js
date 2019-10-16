var throwB, returnB;
var tButton , rButton;

var currentImage = -1;

var boneX = 0;
var boneY = 400;

var moveDog = false;

var rectX = 0;
var rectY= 400;


function preload(){
  throwB = loadImage("image/dog.jpg");
  returnB = loadImage("image/dogbone.jpg");
}

  function setup() {
    // put setup code here
    createCanvas(400,400);

    tButton = createButton("Throw");
    tButton.mousePressed(function(){
      currentImage = 0;
    });
    rButton = createButton("Return");
    rButton.mousePressed(function(){
      currentImage = 1;
    });
  }

function draw() {
  background("lightblue")


  // put drawing code here
  console.log("currentImage"+ currentImage);

  image(throwB,0,0,throwB.width/4,throwB.height/4);

  if(currentImage ==0){
    //show dog

    if(boneX < width -10 && boneY > 10){
      boneX = boneX + 1;
      boneY = boneY - 1;
    }else{
      moveDog = true;
    }



  if(currentImage ==1){
    //show dog with bone
    image(returnB,0,0,returnB.width/4,returnB.height/4);
}
  if(moveDog == true){
    rect(200,200,20,20);
  }else if(rectX < width -10 && rectY > 10)
      rectX = rectX + 1;
      rectY = rectY - 1;
  }


  ellipse(boneX, boneY, 10,10);
}
