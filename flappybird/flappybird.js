let bird, floor;
let flapMidImg, bg, base;

function preload() {
    flapMidImg = loadImage('assets/yellowbird-midflap.png');
    bg = loadImage('assets/background-day.png')
    base = loadImage('assets/base.png')
}

function setup() {
    new Canvas(400,600);
    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width =30;
    bird.hight =30;
    bird.img = flapMidImg;

    bird.collider = "dynamic";
    bird.mass =2;
    
    world.gravity.y = 10;

}

function draw() {
    
}