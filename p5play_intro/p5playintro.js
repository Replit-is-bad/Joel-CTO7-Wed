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
  ball.vel.x = 3;
  ball.vel.y =3;
  

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

  background(220);

  fill(0,0,255);
  textSize(14);
  text("ball : (" + int(ball.x) + "," + int(ball.y) + ")" , 10,20);
  text("mouse : (" + mouseX + "," + mouseY + ")" , 10,40);


  //IF BALL X POSITION GOES OFF THE LEFT WALL OR RIGHT WALL
  if (ball.y < 0 + ball.diameter /2 || ball.y > height - ball.diameter / 2) {
    ball.vel.y *= -1;
  }

  box.x = mouseX
  box.y = mouseY
}