var oldMouseX;
var oldMouseY;
var varSize;
var speedX = 1;
var speedY = 1;
var objSize = 25;
var cWidth  = 960;
var cHeight = 500;

function setup () {
  fill(255);
  createCanvas(cWidth, cHeight);
  fill(0, 126, 255);
}

function draw () {
  // fill(255, 1);
  // rect(0,0,cWidth,cHeight);
  noStroke();
  fill(mouseX/cWidth * 255, mouseY/cHeight * 255, random(255));
  
  speedX = (mouseX - oldMouseX);
  speedY = (mouseY - oldMouseY);

  varSize = speedX/speedY + objSize;

  ellipse(mouseX, mouseY, varSize, varSize);

  oldMouseX = mouseX;
  oldMouseY = mouseY;
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}
