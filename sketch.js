let col = [0, 0, 0];
let sign = new Array(3).fill(1);
let factor = 0;
let frames
function setup() {
    frames = createDiv(100);
    var canvas = createCanvas(400, 400);
    background(200);
    blendMode(BLEND);
    noStroke();
    canvas.parent('sketchDiv');
}

// changes color
function addRand() {
    let choice = random([0, 1, 2]), add = 5;
    if (col[choice] > 255 || col[choice] < 0) sign[choice] = -sign[choice];
    col[choice] += add * sign[choice];
}

function draw() {
    // TODO: ball trail/ delete balls after lifetime
    // TODO: bounce balls on spawn 
    factor += 3;
    if (mouseIsPressed) {
        addRand();
        fill(...[col]);
        ellipse(mouseX, mouseY, 10, 10)
    }
    background(200, 200, 200, 10)
}
