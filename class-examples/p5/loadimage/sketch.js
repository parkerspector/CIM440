


function preload(){
//use to load media
puppyImage = loadImage("puppy.jpg");
}


function setup(){
  //put swtup code here
  createCanvas(400,400);

}

function draw(){
  //put drawing code here
  //image var, x pos, y pos
image(puppyImage,0,0);
//image var, x pos, y pos, width, height
//dividing the width and height by a number scales proportionally
image(puppyImage,0,0, puppyImage.width/4,puppyImage.height/4);
//Don't choose a random size
image(puppyImage,200,200, 154,200);
}

//end of document
