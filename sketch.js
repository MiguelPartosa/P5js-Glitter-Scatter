let col = [0, 0, 0];
let sign = new Array(3).fill(1);
let myBalls;
let locationX, locationY;
//temporary to test animation

function setup() {
    frames = createDiv(100);
    var canvas = createCanvas(400, 400);
    background(0);
    canvas.parent('sketchDiv');
    myBalls = new Balls(width / 2, height / 2, 40);
    locationX = random(0, width);
    locationY = random(0, height);
}

// changes color
function addRand() {
    let choice = random([0, 1, 2]), add = 5;
    if (col[choice] > 255 || col[choice] < 0) sign[choice] = -sign[choice];
    col[choice] += add * sign[choice];
}

function draw() {
    // TODO ball trail/ delete balls after lifetime
    // TODO bounce balls on spawn 
    // FIXME ball colors not fading

    // let xDirection = 
    // locationX += random(0, xDirection);
    // locationX += random(0, yDirection);

    if (mouseIsPressed) {
        addRand();
        fill(...[col]);
        noStroke();
        myBalls.insert(mouseX, mouseY, 40);
        myBalls.stats();
    }
    myBalls.cycle();

}
