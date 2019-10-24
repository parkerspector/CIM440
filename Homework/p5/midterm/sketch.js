var throwB, returnB,  grass, sand;
var tButton , rButton, gButton, sButton;


var currentImage = -1;

var boneX = 0;
var boneY = 450;

var moveDog = false;
var throwDog=false;


var rectX = 0;
var rectY= 400;

var grassImage=-1;



function preload(){
  throwB = loadImage("image/dognoball.png");
  returnB = loadImage("image/dogwithball.png");
  grass= loadImage("image/grass.jpg");
  sand= loadImage("image/sand.jpg");
}

  function setup() {
    // put setup code here
    createCanvas(550,450);

    tButton = createButton("Throw");
    tButton.mousePressed(function(){
      currentImage = 0;
    });
    rButton = createButton("Return");
    rButton.mousePressed(function(){
      currentImage = 1;
    });
    gButton = createButton ("Grass");
    gButton.mousePressed(function(){
      grassImage= 0;
    });
    sButton = createButton ("Sand");
    sButton.mousePressed(function(){
      grassImage= 1;
    });
  }

function draw(){
  background("lightblue");

  if(grassImage== 0){
    background(grass);
  }else if(grassImage==1){
    background(sand);
  }


  // put drawing code here
  console.log("currentImage"+ currentImage);


  if(currentImage ==0){
    image(throwB,0,250,throwB.width/4,throwB.height/4);

    //show dog
    if(boneX < width -10 && boneY > 10){
      boneX = boneX + 1;
      boneY = boneY - 1;
    }else{
      moveDog = true;
    }
  }

if(currentImage ==2){
  image(grass,550,450,grass.width,grass.height);
}
if(currentImage ==3){
  image(sand,550,450,sand.width,sand.height);
}


  if(moveDog == true){
    currentImage = -1;
    //show dog with ball
    if(rectX < width -10 && rectY > 10){
      rectX = rectX + 1;
      rectY = rectY - 1;


    }else{
      throwDog=true;
      moveDog = false;
    }

    image(throwB,rectX,rectY,throwB.width/4,throwB.height/4);

  }


  if(throwDog== true){
    image(returnB,rectX,rectY,returnB.width/4,returnB.height/4);

    if(currentImage == 1){
      if(rectX > 90 && rectY < height){
        rectX = rectX - 1;
        rectY = rectY + 1;
      }
    }
  }else{
    ellipse(boneX, boneY, 10,10);
    fill("red");
  }
}
