const BALL_SIZE = 40 //default ball size
const LIFE = 200 //200 frames

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
    constructor(x = width / 2, y = height / 2, size = BALL_SIZE) {
        this.collection = [new Ball(x, y, size)];
    }

    insert(x = width / 2, y = height / 2, size = BALL_SIZE) {
        // might be unecessary
        if (this.collection.length === 0)
            this.collection = [new Ball(x, y, size)];
        else
            this.collection.push(new Ball(x, y, size));
    }

    /**
     * Description 
     */
    display(col) {
        push();
        fill(col);
        for (let i = 0; i < this.collection.length; i++) {
            let currentEllipse = this.collection[i];
            circle(currentEllipse.x, currentEllipse.y, currentEllipse.size)
        }
        pop();
    }

    cycle() {
        // some animation here
        // lifetime 
        for (let i = 0; i < this.collection.length; i++) {
            let currentEllipse = this.collection[i];
            currentEllipse.lifetime--;
        }
        scale(2, 1, 1);
    }

    remove(indexToRemove) {
        this.collection.splice(indexToRemove, 1);
    }

    // show stats of collection
    stats() { console.log(this.collection) }
}

