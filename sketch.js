let m = 1;
let b = 0;

let sliderM;
let sliderB;

let scale = 20;
let uiLeft = 30;
let uiTop = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);

  sliderM = createSlider(-10, 10, 1, 0.1);
  sliderM.position(uiLeft, uiTop);
  sliderM.style('width', '300px');
  sliderM.style('height', '40px');
  sliderM.style('cursor', 'pointer');
  sliderM.style('background', '#ddd');

  sliderB = createSlider(-20, 20, 0, 0.5);
  sliderB.position(uiLeft, uiTop + 50);
  sliderB.style('width', '300px');
  sliderB.style('height', '40px');
  sliderB.style('cursor', 'pointer');
  sliderB.style('background', '#ddd');

  textFont('Arial');
}

function draw() {
  background(255);

  m = sliderM.value();
  b = sliderB.value();

  // move origin to center
  translate(width / 2, height / 2);

  drawAxes();
  drawLine();

  // back to normal screen coordinates for UI text
  resetMatrix();
  drawUI();
}

function drawAxes() {
  stroke(200);
  strokeWeight(1);

  // x-axis
  line(-width / 2, 0, width / 2, 0);

  // y-axis
  line(0, -height / 2, 0, height / 2);
}

function drawLine() {
  stroke(0);
  strokeWeight(3);

  let x1 = -width / 2;
  let x2 = width / 2;

  // convert screen x pixels to graph x units
  let graphX1 = x1 / scale;
  let graphX2 = x2 / scale;

  // math equation in graph space
  let graphY1 = m * graphX1 + b;
  let graphY2 = m * graphX2 + b;

  // convert graph y units back to screen pixels
  // negative because p5 y goes downward
  let y1 = -graphY1 * scale;
  let y2 = -graphY2 * scale;

  line(x1, y1, x2, y2);
}

function drawUI() {
  noStroke();
  fill(0);
  textSize(18);

  text("Slope (m): " + m, uiLeft, uiTop + 120);
  text("Intercept (b): " + b, uiLeft, uiTop + 145);

  fill(120);
  textSize(16);

  // axis labels in screen space
  text("x-axis", width - 80, height / 2 - 10);
  text("y-axis", width / 2 + 10, 25);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
