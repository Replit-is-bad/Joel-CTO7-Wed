let word = ["Balls"];
let attempt = 0;
let hiddenW = '';
let textBox;
let button;
let display;

function setup(){
    new Canvas(600,400);

    textBox = createInput();
    textBox.position(550 + width/2 - textBox.width/2,300)

    button = createButton('Guess');
    button.position(textBox.x + textBox.width +30,300);
    button.mousePressed(displayText);

    hiddenW = random(word);
    console.log(hiddenW);
    hiddenW = hiddenW[0].toUpperCase() +' '+ '_ '.repeat(hiddenW.length-1);
}

function draw() {
    background(220);
    textSize(24);
    textAlign(CENTER)
    text('Guess the Word!' , width/2, 50);
    text('Attempts: ' ,attempt, width/2, 100);
    text('Hints : ' ,hiddenW, width/2, 150);
}
