var hitzone3 = false;

function setup() {
  // put setup code here
  createCanvas(400,400);

  hello();
  goodbye("zeven");
  goodbye("rubi");
  goodbye("mike");
}

function draw() {
  // put drawing code here
  background (255);
  //framerate (1);
  //circleColor(xpos,ypos,r,g,b) order corresponds to parameter order
  if(circlehitzone(100,100) ==true){
    circleColor(random(width),random(height),random(255),random(255),random(255), random(0,200));

  //500 times a frame
  // var i=0; start, i< 500; how many times; i++ is counter i= i + 1
  for (var i=0; i< 500; i++){
  circleColor(random(width),random(height),random(255),random(255),random(255),random(0,200));
  }
}
fill('black');
ellipse(mouseX,mouseY, 100,100);

console.log(circlehitzone(100,100));

if(circlehitzone(300,300)==true);
  //rect(100,100,100,100);

circlehitzone(200,200);

if(hitzone3 == true){
  ellipse(30,30,30,30);
}

function mousePressed(){
  if(circlehitzone(200,200) == true){
    console.log("mousePressed");
    hitzone3= true;
}else{
  hitzone3 = false;
}
  }
}
function hello(){
  console.log("hello");
}

function goodbye(message){
  console.log("goodbye"+ message);
}

function circleColor(xpos,ypos,r,g,b,cSize){
  fill(r,g,b);
  ellipse(xpos,ypos,cSize,cSize);
}

function circlehitzone(distX,distY){
  var curDist = dist(mouseX,mouseY, distX, distY);
  //console.log("curDist"+ curDist);
  fill(127);
  ellipse(distX,distY,10,10);
  if(curDist< 10){
    return true;
  }
else{
  return false;
  stroke(255);
  stokeweight(5);
}
}
