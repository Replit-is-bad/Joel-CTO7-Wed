let ball;
let box;

function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color 
  






  // Ball sprite
  ball = new Sprite();
  ball.x = 100;
  ball.y = 200;
  ball.diameter = 100;
  ball.color = 'salmon';

  // box sprite
  box = new Sprite();
  box.x = 100;
  box.y = 100;
  box.w = 100;
  box.h = 50;
  box.color = 'black';
  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here
}

function draw() {
  // fill("blue");
  // stroke("red");
  // strokeWeight(10);

  // circle(30,30,50);
  // rect(50,50,100,200);
  // square(150,100,100)

  fill(0,0,255);
  textSize(14);
  
}