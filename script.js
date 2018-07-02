// Global Variables
var p5Canvas;
var myName;
var pg;
var a = 0.0;
var s = 0.0;
var mousePressed;
var drawTriangle;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  pg = createGraphics(400, 250);
  stroke(255);
 
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("[Karell]");
}


function draw() {
  background(0, 255, 0);
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51); 
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX-150, mouseY-75, 60, 60);

 image(pg, 150, 75);

 a = a + 0.04;
  s = cos(a)*2;

  translate(width/2, height/2);
  scale(s); 
  fill("blue");
  rect(0, 0, 50, 50); 
  

  translate(75, 0);
  fill(225);
  scale(s);
  rect(0, 0, 50, 50); 

  function drawTriangle(){
  	triangle(50, 60, 50, 60, 70, 50);
  }

  if (mousePressed == true) {
  	drawTriangle();

  }


 


}



// create an animation function below, then call it in draw()
// see example.js if you need a place to start!
// when you're ready, be sure to change index.html to link to this script instead of example.js
