let word = ["Balls"]

function setup(){
    new Canvas(600,400);

    button = createButton('Guess');
    button.position(textBox.x + textBox.width +30,300);
}

function draw() {
    background(220);
    textSize(24);
    textAlign(CENTER)
    text('Guess the Word!' , width/2, 50);
}



textBox


button = createButton('Guess');
button.position(textBox.x + textBox.width +30,300);