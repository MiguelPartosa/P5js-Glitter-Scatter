let myBalls;
let locationX, locationY;
//temporary to test animation

function setup() {
    frames = createDiv(100);
    var canvas = createCanvas(400, 400);
    background(0);
    canvas.parent('sketchDiv');
    myBalls = new Balls();
    locationX = random(0, width);
    locationY = random(0, height);
}



function draw() {
    // TODO ball trail/ delete balls after lifetime
    // TODO bounce balls on spawn 
    // FIXME ball colors not fading

    // let xDirection = 
    // locationX += random(0, xDirection);
    // locationX += random(0, yDirection);
    background('#000000');
    if (mouseIsPressed) {
        myBalls.insert(mouseX, mouseY, 40);
        myBalls.stats();
    }
    noStroke();
    // myBalls.cycle();
    myBalls.display();

}
