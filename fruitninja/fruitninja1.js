

let dojoBG; 
let fruitGroup;
let fruitTypes =[]; 
let fruitHalves; 
let score = 0; 
let missedFruits=0;
let gameState = 'start'; 
let gameStart = 0;
let gameStartTime;
let gameTimer =0;
let gameDuration;

function preload() {
    dojoBG = loadImage('assets/dojobackground.png');

    let peach = {
        whole: loadImage('assets/peachwhole.png'),
        half1: loadImage('assets/peachhalf2.png')
    }; 

    let watermelon = {
        whole: loadImage('assets/watermelonwhole.png'),
        half1: loadImage('assets/watermelonhalf.png')
    }; 

    fruitTypes = [peach, watermelon]; 
}

function setup() {
    new Canvas(800, 600);

    world.gravity.y = 10; 

    fruitGroup = new Group();
    fruitHalves = new Group(); 
}

function draw() {
    clear(); 

    image(dojoBG, 0, 0, width, height); 

    if((kb.presses(" ") || mouse.presses()) && (gameState == 'start')) {
        gameState = 'play'; 
        score=0;
        missedFruits = 0; 
        fruitGroup.removeAll(); 
        fruitHalves.removeAll(); 

    }

    if(gameState === 'start') {

        fill(0,180); 
        rect(0,0, width, height); 
        fill(255); 
        textSize(48); 
        textAlign(CENTER, CENTER); 
        text('Fruit Ninja', width/2, height/2-40); 
        textSize(24); 
        text('Press space or click to start', width/2, height/2 +20); 

        return; 
    }

    if(frameCount%120 === 0) {
        let num = 5; 
        for(let i=0; i<num; i++) {
            spawnFruit(); 
        }
    }

    if(mouse.pressing()) {
        let trail = new Sprite(mouse.x, mouse.y, 7);
        trail.collider = 'none'; 
        trail.color = 'red'; 
        trail.life = 10; 

        sliceFruit(); 
    }

    for(fruit of fruitGroup) {
        if(fruit.y > height+50) {
            fruit.remove(); 
            missedFruits +=1; 
        }

    }

    stroke(158, 69, 69); 
    fill(255); 
    textSize(24); 
    textAlign(LEFT, TOP); 
    text("Score: " + score, 10, 10); 
    text("MissedFruits: " + missedFruits, 200, 10);
}

function spawnFruit() {
    let fruitData = random(fruitTypes);
    let randomX = random(300, 500); 

    let fruit = new fruitGroup.Sprite(randomX, height+20, 40); 
    fruit.img = fruitData.whole; 
    fruit.type = fruitData; 
    fruit.vel.x = random(-2,2);
    fruit.vel.y = random(-10, -14);
    fruit.friction = 0;

}

function sliceFruit() {
    for(let fruit of fruitGroup) {

        if(fruit.sliced) {
            continue; 
        }

        let d = dist(mouse.x, mouse.y, fruit.x, fruit.y); 

        if(d<(fruit.d/2)+5){
            fruit.sliced = true; 

            let fx = fruit.x; 
            let fy = fruit.y; 

            fruit.remove(); 

            splitFruit(fx, fy, fruit.type); 

            score +=1; 
            break; 
        }

    }

}

function splitFruit(x, y, fruitData) {

    let left = new fruitHalves.Sprite(x-20, y, 40, 40); 
    left.img = fruitData.half1; 
    left.vel.x = -3; 
    left.vel.y = random(-5, -2);
    left.rotationSpeed = -5;  
    left.life = 30; 

    let right = new fruitHalves.Sprite(x+20, y, 40, 40); 
    right.img = fruitData.half1; 
    right.vel.x = 3;
    right.vel.y = random(-5, -2); 
    right.rotationSpeed = 5; 
    right.life = 30; 
    
}