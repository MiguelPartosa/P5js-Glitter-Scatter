let col = [0, 0, 0];
let sign = new Array(3).fill(1);
let factor = 0;

// collection of all ellipse objects
let ellipses = [];

function setup() {
    var canvas = createCanvas(400, 400);
    background(200);
    noStroke();
    canvas.parent('sketchDiv');
}

function addRand() {
    let choice = random([0, 1, 2]), add = 5;
    if (col[choice] > 255 || col[choice] < 0) sign[choice] = -sign[choice];
    col[choice] += add * sign[choice];
}

function draw() {
    factor += 3;
    if (mouseIsPressed) {
        addRand();
        fill(...[col]);
        let ellipseNew = ellipse(mouseX, mouseY, 80, 80);
        ellipses.push(ellipseNew);
        console.log(ellipses);
    }

    for (let elip of ellipses) {
        elip.accelerationX += 10;
    }

    // mouseMoved(col);
}
