let m = 1;
let b = 0;

let sliderM;
let sliderB;
let scale = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  sliderM = createSlider(-10, 10, 1, 0.1);
  sliderM.position(20, 20);
  sliderM.style('width', '300px');
  sliderM.style('height', '40px');

  sliderB = createSlider(-20, 20, 0, 0.5);
  sliderB.position(20, 70);
  sliderB.style('width', '300px');
  sliderB.style('height', '40px');

  sliderM.style('cursor', 'pointer');
  sliderB.style('cursor', 'pointer');

  sliderM.style('background', '#ddd');
  sliderB.style('background', '#ddd');
}

function draw() {
  background(255);

  m = sliderM.value();
  b = sliderB.value();

  translate(width / 2, height / 2);

  drawAxes();
  drawLine();

  resetMatrix();

  noStroke();
  fill(0);
  textSize(18);
  text("Slope (m): " + m, 20, 130);
  text("Intercept (b): " + b, 20, 155);
}

function drawAxes() {
  stroke(200);
  strokeWeight(1);

  // X-axis
  line(-width / 2, 0, width / 2, 0);

  // Y-axis
  line(0, -height / 2, 0, height / 2);

  // Labels
  noStroke();
  fill(100);
  textSize(16);

  // X-axis label (right side)
  text("x-axis", width / 2 - 60, -10);

  // Y-axis label (top)
  text("y-axis", 10, -height / 2 + 20);
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
