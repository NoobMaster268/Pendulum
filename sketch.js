let len = 350,
  time = 0;
const w = 6;
let T = (2 * Math.PI) / w;
let x = [],
  y = [],
  theta = [];
let Nball;
let n;

for (let i = 0; i < 10; i++) {
  theta[i] = Math.PI / 2;
}

function setup() {
  textSize(50);
  createP("Number of balls :");
  slider1 = createSlider(1, 10, 6, 1);
  slider1.position(200, 15);
  createP("Number of balls dropped :");
  slider2 = createSlider(1, 10, 2, 1);
  slider2.position(200, 50);
  createCanvas(1200, 600);
}

function draw() {
  background(30);
  translate(width / 2, height / 4);
  stroke(230);
  fill("orange");
  rect(-Nball * 25, 10, Nball * 50, 10);
  translate(-(Nball - 1) * 25, 10);

  Nball = slider1.value();
  n = slider2.value();

  for (let i = 0; i < Nball; i++) {
    x[i] = 50 * i + len * cos(theta[i]);
    y[i] = len * sin(theta[i]);
    strokeWeight(2);
    line(50 * i, 0, x[i], y[i]);
    strokeWeight(2);
    ellipse(x[i], y[i], 50);
  }
  for (let k = 0; k < 100; k++) {
    for (let i = 0; i < n; i++) {
      if (
        Math.floor((4 * time) / T) % 4 == 0 ||
        Math.floor((4 * time) / T) % 4 == 3
      ) {
        theta[i] = Math.PI / 2 + (Math.PI / 4) * cos(w * time);
        for (let j = n; j < Nball; j++) theta[j] = Math.PI / 2;
      } else {
        theta[Nball - i - 1] = Math.PI / 2 + (Math.PI / 4) * cos(w * time);
        for (let j = 0; j < Nball - n; j++) theta[j] = Math.PI / 2;
      }
      time += 0.00005 / n;
    }
  }
  translate((Nball - 1) * 25, 0);
  fill("White");
  textSize(30);
  strokeWeight(1);
  text("Number of Balls : " + Nball, -100, -40);
}
