let m = 1;
let b = 0;

let sliderM;
let sliderB;
let scale = 20;

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("sketch-holder");

  sliderM = createSlider(-10, 10, 1, 0.1);
  sliderM.position(30, 30);
  sliderM.style("width", "300px");
  sliderM.style("height", "30px");

  sliderB = createSlider(-20, 20, 0, 0.5);
  sliderB.position(30, 80);
  sliderB.style("width", "300px");
  sliderB.style("height", "30px");

  sliderM.style("cursor", "pointer");
  sliderB.style("cursor", "pointer");
}

function draw() {
  background(247);

  m = sliderM.value();
  b = sliderB.value();

  translate(width / 2, height / 2);

  drawAxes();
  drawLine();

  resetMatrix();

  noStroke();
  fill(20);
  textSize(18);
  text("Slope (m): " + m, 30, 145);
  text("Intercept (b): " + b, 30, 175);
}

function drawAxes() {
  stroke(190);
  strokeWeight(1);

  line(-width / 2, 0, width / 2, 0);
  line(0, -height / 2, 0, height / 2);

  noStroke();
  fill(100);
  textSize(16);
  text("x-axis", width - 100, height / 2 - 15);
  text("y-axis", width / 2 + 12, 25);
}

function drawLine() {
  stroke(0);
  strokeWeight(3);

  let x1 = -width / 2;
  let x2 = width / 2;

  let graphX1 = x1 / scale;
  let graphX2 = x2 / scale;

  let graphY1 = m * graphX1 + b;
  let graphY2 = m * graphX2 + b;

  let y1 = -graphY1 * scale;
  let y2 = -graphY2 * scale;

  line(x1, y1, x2, y2);
}
