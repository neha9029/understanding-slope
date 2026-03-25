let m = 1;
let b = 0;

let sliderM;
let sliderB;

let scale = 20;
let uiLeft = 30;
let uiTop = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Arial');
}

function draw() {
  background(255);

  // create sliders once, after canvas exists
  if (!sliderM) {
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
  }

  m = sliderM.value();
  b = sliderB.value();

  translate(width / 2, height / 2);

  drawAxes();
  drawLine();

  resetMatrix();
  drawUI();
}

function drawAxes() {
  stroke(200);
  strokeWeight(1);

  line(-width / 2, 0, width / 2, 0);
  line(0, -height / 2, 0, height / 2);
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

function drawUI() {
  noStroke();
  fill(0);
  textSize(18);
  text("Slope (m): " + m, uiLeft, uiTop + 120);
  text("Intercept (b): " + b, uiLeft, uiTop + 145);

  fill(120);
  textSize(16);
  text("x-axis", width - 80, height / 2 - 10);
  text("y-axis", width / 2 + 10, 25);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  if (sliderM && sliderB) {
    sliderM.position(uiLeft, uiTop);
    sliderB.position(uiLeft, uiTop + 50);
  }
}
