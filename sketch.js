let myBalls;
const BACKGROUND__COLOR = '#9ED0D2';

function setup() {
    var canvas = createCanvas(400, 400);
    background(BACKGROUND__COLOR);
    canvas.parent('sketchDiv');
    myBalls = new Balls();
}

function draw() {


    background(BACKGROUND__COLOR);
    if (mouseIsPressed) {
        myBalls.insertBall(mouseX, mouseY, 40);
        myBalls.ballCollectionStats();
    }
    noStroke();
    // myBalls.cycle();
    myBalls.ballNoise();
    myBalls.displayBalls();

}
