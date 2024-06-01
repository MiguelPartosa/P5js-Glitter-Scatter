
const BALL_SIZE = 40 //default ball size
const LIFE = 100 //200 frames
const COLOR_CHANGE = 10; //factor of change in color
const NOISE_TRAIL_DELAY = 100;
/**
 * Fundamental ball unit
 * @param {any} x
 * @param {any} y
 * @param {any} size
 * @returns {any}
 */
class Ball {
    constructor(x, y, size) {
        // for random noise
        this.id = random(0, 500);
        this.x = x;
        this.y = y;
        this.size = size;
        this.lifetime = LIFE;
        this.bounciness = size / 2;
        this.color = [
            [0, 1],
            [0, 1],
            [0, 1]]; // color of each ball and their sign for animation
    }
}

/**
 * Collectionf of balls and their methods
 * @param {any} x
 * @param {any} y
 * @param {any} size
 * @returns {any}
 */

class Balls {

    constructor(x = random(0, width), y = random(0, height), size = BALL_SIZE) {
        this.collection = [new Ball(x, y, size)];
    }

    insertBall(x = random(0, width), y = random(0, height), size = BALL_SIZE) {
        // might be unecessary
        if (this.collection.length === 0)
            this.collection = [new Ball(x, y, size)];
        else
            this.collection.push(new Ball(x, y, size));
    }

    /**
     * Shows balls and deincrements lifetime and deletes
     */
    displayBalls() {
        push();
        for (let i = 0; i < this.collection.length; i++) {
            let currentEllipse = this.collection[i];
            fill(this.rainbowColor(currentEllipse));
            if (currentEllipse.lifetime <= 0) {
                this.removeBall(i);
            }
            else {
                circle(currentEllipse.x, currentEllipse.y, currentEllipse.size);
                currentEllipse.lifetime--;
            }
        }
        pop();
    }

    /**
     * Changes the color of the balls individually 
     */
    rainbowColor(ellipseObject) {
        let opacity = map(ellipseObject.lifetime, 0, LIFE, 0, 255);
        let choice = random([0, 1, 2]);

        if (ellipseObject.color[choice][0] > 255 || ellipseObject.color[choice][0] < 0)
            ellipseObject.color[choice][1] = -ellipseObject.color[choice][1];
        ellipseObject.color[choice][0] += COLOR_CHANGE * ellipseObject.color[choice][1];

        let colors = [ellipseObject.color[0][0], ellipseObject.color[1][0], ellipseObject.color[2][0]];
        return ([...colors, opacity]);
    }

    /**
     * exclusively for animation/simulation logic
     */
    cycle() {
        push();
        for (let i = 0; i < this.collection.length; i++) {
            let currentEllipse = this.collection[i];
        }
        pop();
        // scale(2, 1, 1);
    }

    /**
     * Seperated this method and the ball physics simulation for clarity, might remove/modify this method later
     */
    ballNoise() {
        // TODO performance improvements!

        for (let i = 0; i < this.collection.length; i++) {
            let currentEllipse = this.collection[i];
            noiseSeed(currentEllipse.id);
            let xNoise = 10 * map(noise(frameCount * 0.05), 0, 1, -1, 1)
            noiseSeed(currentEllipse.id + 10000);
            let yNoise = 10 * map(noise(frameCount * 0.05), 0, 1, -1, 1)
            currentEllipse.x += xNoise;
            currentEllipse.y += yNoise;

            currentEllipse.size -= (noise(frameCount * 0.05));
        }
    }

    removeBall(indexToRemove) {
        this.collection.splice(indexToRemove, 1);
        this.ballCollectionStats();
    }

    /**
     * Stats for monitoring
     */
    ballCollectionStats() { console.log(this.collection.map(x => x)) }
}

