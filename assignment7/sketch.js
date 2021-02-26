let img1, img2, img3;
let x = 0;

function setup() {
  img1 = loadImage("images/next-group.jpg");
  img2 = loadImage("images/kurtis-blow.jpg");
  img3 = loadImage("images/nicholas-fraser.png");
}

function draw() {
  image(img1, 100, 100, 100, 100);
  image(img2, 200, 100, 100, 100);
  image(img3, 300, 100, 100, 100);
}
