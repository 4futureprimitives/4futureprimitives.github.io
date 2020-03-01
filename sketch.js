var canvas;
let a = 80; // Create a global variable "a"

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(350, 0);
	canvas.style('z-index', '-1');

  background(255);
  stroke(1);
  noLoop();
}

function draw() {
  // Draw a line using the global variable "a"
  line(a, 0, a, height);
	stroke(0, 0, 0, 55);

  // Use a local variable a in for loop
  for (let a = 20; a < 200; a += 4) {
    line(a, 0, a, height);
  }

  // Make a call to the custom function drawAnotherLine()
  drawAnotherLine();

  // Make a call to the custom function drawYetAnotherLine()
  drawYetAnotherLine();
}

function drawAnotherLine() {
  // Create a new variable "a" local to this function
  let a = 320;
  // Draw a line using the local variable "a"
  line(a, 0, a, height);
}

function drawYetAnotherLine() {
  // Because no new local variable "a" is set,
  // this line draws using the original global
  // variable "a" which is set to the value 20.
  line(a + 13, 0, a + 13, height);
}
