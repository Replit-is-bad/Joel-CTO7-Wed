let dojoBG;
let fruitGroup;
let fruitTypes = [];


function preload() {
    dojoBG = loadImage('assets/dojobackground.png');

    let peach = {
        whole: loadImage('')
    }
}

function setup() {

    new Canvas(800, 600);

    world.gravity.y = 10;
}

function draw() {


    image(dojoBG, 0, 0, width, height);
}