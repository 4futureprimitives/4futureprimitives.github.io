var x = [];

function setup() {
createCanvas(1040, 100);
noStroke();
fill(255, 200);
for (var i = 0; i < 3000; i++) {
x[i] = random(-1000, 200);
}
}

function draw() {
background(0);
for (var i = 0; i < x.length; i++) {
x[i] += 0.7;
var y = i * 0.133;
arc(x[i], y, 12, 10, 0.72, 5.76);
}
}
//Slightly modified from Example 11-3 in "Getting Started with p5.js"
