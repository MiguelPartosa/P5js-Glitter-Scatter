const BALL_SIZE = 40 //default ball size
const LIFE = 200 //200 frames
const COLOR_CHANGE = 10; //factor of change in color
/**
 * Fundamental ball unit
 * @param {any} x
 * @param {any} y
 * @param {any} size
 * @returns {any}
 */
class Ball {
    constructor(x, y, size) {
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

    insert(x = random(0, width), y = random(0, height), size = BALL_SIZE) {
        // might be unecessary
        if (this.collection.length === 0)
            this.collection = [new Ball(x, y, size)];
        else
            this.collection.push(new Ball(x, y, size));
    }

    /**
     * Shows balls  and deincrements lifetime and deletes
     */
    display() {
        push();
        for (let i = 0; i < this.collection.length; i++) {
            let currentEllipse = this.collection[i];
            fill(this.rainbowColor(currentEllipse));
            if (currentEllipse.lifetime <= 0) {
                this.remove(i);
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
        // FIXME change color array to an attribute and sign
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
        for (let i = 0; i < this.collection.length; i++) {
            let currentEllipse = this.collection[i];
        }
        // scale(2, 1, 1);
    }

    /**
     * Added noise and a little scatter effect for when placing balls
     */
    noise() {
        
    }

    remove(indexToRemove) {
        let toRemove = this.collection.splice(indexToRemove, 1);
        this.stats();
    }

    /**
     * show all balls in the collection
     */
    stats() { console.log(this.collection.map(x => x)) }
}

