var eyeSize= 15;

function setup() {
  // put setup code here
  createCanvas(500,500);
  background(100,75,75);
}

function draw() {
  // put drawing code here

  //body
  fill("clear");//adjusts inner shape color
  stroke ("brown");//outer edge color
  ellipse(250,230,150,150)

  //left eye
  ellipse(220,220,35,35);
  //right eye
  ellipse(290,220,35,35);

  //left pupil
  fill("blue");
  stroke ("blue");
  ellipse(230,220,eyeSize,eyeSize);
  //right pupil
  fill("blue");
  stroke ("blue");
  ellipse(300,220,eyeSize,eyeSize);

  fill("brown");
  stroke("brown");
  triangle((width/2)+10 ,(height/2) -20,(width/2)+10, (height/2)+ 20, (width/2) -10, (height/2) +20);

  fill("pink");
  stroke("red");
  rect(215,280,50,5);//rect starts drawming from left hand corner
}
