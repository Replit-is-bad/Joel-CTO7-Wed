let bird, floor;
let flapMidImg, bg, base;
let flapUpImg, flapDownImg
let pipeGroup;
let pipe;
let bottomPipe, topPipe;
let gameoverImg;
let gameoverLabel;
let startScreenImg;
let startScreenLabel;
let startGame = false;
let score = 0;
let numberImages = [];
let scoreDigits;
let flapSound, pointSound, failSound;



function preload() {
    flapMidImg = loadImage('assets/yellowbird-midflap.png');

    bg = loadImage('assets/background-day.png');
    base = loadImage('assets/base.png');

    flapDownImg = loadImage('assets/yellowbird-downflap.png');
    flapUpImg = loadImage('assets/yellowbird-upflap.png');

    pipe = loadImage('assets/pipe-green.png');//preload img for pipe

    gameoverImg = loadImage('assets/gameover.png');

    startScreenImg = loadImage('assets/message.png');

    for (let i =0; i < 10; i++ ) {
        numberImages[i] = loadImage('assets/' + i + '.png');
    }

    flapSound = createAudio('assets/sfx_wing.mp3');
    pointSound = createAudio('assets/sfx_point.mp3');
    failSound = createAudio('assets/sfx_die.mp3');
}

function setup() {
    new Canvas(400,600);

    world.gravity.y = 0;

    bird = new Sprite();
    bird.x = width/2;
    bird.y = 200;
    bird.width =30;
    bird.height =30;
    bird.img = flapMidImg;

    bird.collider = "dynamic";
    bird.mass =2;
    bird.drag = 0.5 ;
    bird.bouciness =0.02;


    floor = new Sprite();
    floor.x = 200;
    floor.y = height - 20;
    floor.width =400;
    floor.height =125;
    floor.img = base;

    floor.collider ='static';

    pipeGroup = new Group();

    //start screen Sprite

    startScreenLabel = new Sprite(width/2, height/2, 50, 50,'none');
    startScreenLabel.img =startScreenImg;

    scoreDigits = new Group ;
    scoreDigits.collider = 'none';
    scoreDigits.layer = 1000;

    bird.visible = false;

    

}

function draw() {
    image(bg,0,0,width,height);
    if (kb.presses('space') || mouse.presses()) {
            startGame = true;
            startScreenLabel.visible = false;
            bird.visible = true;
            world.gravity.y = 10;
        
        }
    if (startGame){
        if(kb.presses('space') || mouse.presses()) {
            bird.vel.y = -5;
            bird.sleeping = false;
        }

        if (bird.vel.y < - 1) {
            bird.image = flapUpImg;
            bird.rotation = -30;  
        }
        else if ( bird.vel.y > 1) {
            bird.image = flapDownImg;
            bird.rotation = 30;
        }
        else {
            bird.image = flapMidImg;
            bird.rotation = 0;
        }

        if (frameCount == 1) {
            spwanPipePair();
        }

        bird.x += 3;
        camera.x = bird.x;
        floor.x = bird.x;
        
        if (frameCount % 90 === 0) {
            spwanPipePair();
        }

        for (let pipe of pipeGroup){
            if (pipe.x < -50){
                pipe.remove();
            }
        }

        for(let pipe of pipeGroup) {

            let pipeRightEdge = pipe.x + pipe.w/2;

            let birdLeftEdge = bird.x - bird.w/2;

            if(pipe.passed == false && pipeRightEdge < birdLeftEdge) {
                pipe.passed = true;
                score++;
            }
        }
        

        fill('blue');
        textSize(14);
        text('vel.y :  ' + bird.vel.y.toFixed(2) , 10 ,20);
        text('isMoving : ' + bird.isMoving, 10 , 40);
        text('sleeping : ' + bird.sleeping, 10 ,60);


        // if (bird.collides(pipeGroup) || bird.collides(floor) || bird.y <= 0 ){
        //     noLoop();
        // }

        if(bird.collides(pipeGroup) || bird.collides(floor) || bird.y <= 15) {
            gameoverLabel = new Sprite(width/2 , height/2, 192,42,'none');
            gameoverLabel.img = gameoverImg;
            gameoverLabel.layer = 100;
            gameoverLabel.x = camera.x;
            

            noLoop();
        }

    }
    drawScore(width/2 , 20 , score , 24 ,36); 
} 

function spwanPipePair() { 

    let midY = random(250, height - 250);
    let gap = 50;


    bottomPipe = new Sprite(bird.x + 400, midY  + gap/2 + 200, 52, 320, 'static');
    bottomPipe.img = pipe;

    
    


    topPipe = new Sprite(bird.x + 400, midY - gap/2 - 200, 52, 320, 'static');
    topPipe.img = pipe;
    topPipe.rotation = 180;

    topPipe.passed = false;

    pipeGroup.add(bottomPipe);
    pipeGroup.add(topPipe);
    pipeGroup.layer = 0;



    

    
}
function drawScore(x,y,digitWidth,digitHeight) {
    scoreDigits.removeAll();

    let scoreStr = str(score);

    let totalWidth = scoreStr.length * digitWidth;

    let startX = x - totalWidth / 2;

    for(let i = 0; i < scoreStr.length; i++){
        let digit = int(scoreStr[i]);

        let xPos = startX + i * digitWidth;

        let digitSprite = new scoreDigits.Sprite(xPos,y,digitWidth,digitHeight);

        digitSprite.img = numberImages[digit];
    }
    moveGroup(scoreDigits , camera.x , 24);
}

function moveGroup(group, targetX , spacing) {
    let totalWidth = (group.length - 1) * spacing;

    let startX = (targetX - totalWidth/2);

    for (let i = 0; i < group.length; i++ ) {
        group[i].x = startX + i * spacing;
    }
}

