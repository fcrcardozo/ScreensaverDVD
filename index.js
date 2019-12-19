
let x;
let y;

let xSpeed;
let ySpeed;

let dvd;

let r, g, b;

function preload() {
  dvd = loadImage('dvd_logo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  xSpeed = 10;
  ySpeed = 10;
  pickColor();
}

function pickColor() {
  r = random(100, 256);
  g = random(100, 256);
  b = random(100, 256);
}

function draw() {
  background(0);
  tint(r, g, b);
  image(dvd, x, y);

  x = x + xSpeed;
  y = y + ySpeed;

  if (x + dvd.width >= width) {
    xSpeed = -xSpeed;
    x = width - dvd.width;
    pickColor();
  } else if (x <= 0) {
    xSpeed = -xSpeed;
    x = 0;
    pickColor();
  }

  if (y + dvd.height >= height) {
    ySpeed = -ySpeed;
    y = height - dvd.height;
    pickColor();
  } else if (y <= 0) {
    ySpeed = -ySpeed;
    y = 0;
    pickColor();
  }
}