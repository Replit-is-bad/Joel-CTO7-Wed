let dojoBG;

function preload() {
    dojoBG = loadImage('assets/dojobackground.png');
}

function setup() {
    new Canvas(800, 600);

    AudioWorkletNode.gravity.y = 10;
}
