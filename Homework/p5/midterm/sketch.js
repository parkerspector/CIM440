var throw, fetch, return;
var tButton, fButton, rButton;

var currentImage = 0;




function preload(){
  throw = loadImage("image/dog.jpg");
  fetch = loadImage("image/dog.jpg");
  return = loadImage("image/dog.jpg");
}

function setup() {
  function setup() {
    // put setup code here
    createCanvas(400,400);
    background("blue")

    tButton = createButton("Throw");
    tButton.mousePressed(function(){
      currentImage = 0;
    });
    fButton = createButton("Fetch");
    fButton.mousePressed(function(){
      currentImage = 1;
    });
    rButton = createButton("Return");
    rButton.mousePressed(function(){
      currentImage = 2;
    });
  }
}
function draw() {
  // put drawing code here
  console.log("currentImage"+ currentImage);

  if(currentImage ==0){
    //show puppy
    image(throw,0,0,throw.width/4,throw.height/4);
  }else if(currentImage ==1){
    //show dinosaur
      image(fetch,0,0,fetch.width/4,fetch.height/4);
  }else if(currentImage ==2){
    //show sloth
      image(fetch,0,0,fetch.width/4,fetch.height/4);
  }
  }
}
