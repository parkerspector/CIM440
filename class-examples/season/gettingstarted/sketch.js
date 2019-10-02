var seasonSelect;
var seasonType= "";

function setup() {
//put setup code here
createCanvas(400,400);
seasonSelect = createSelect();
seasonSelect.position(10,10);
seasonSelect.option("");
seasonSelect.option("fall");
seasonSelect.option("winter");
seasonSelect.option("spring");
seasonSelect.option("summer");
}

function draw() {
  // put drawing code here
}
