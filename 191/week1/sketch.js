// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(480, 270);
}

function draw() {
  background(255, 0, 0, 50);
  
  stroke(255); 
  fill(150); 
  rect(200,50,75,100);

  stroke(0); 
  fill(0, 0, 255, 20); 
  ellipse(200, 50, 50, 50);
  rect(300,50,75,100);
}