/**
 * Class representing an apple
 */
export default class Apple {

    /**
     * Set position of an apple
     *
     * @param {Array} position - [x,y] value
     */
    constructor(position = [10,10]) {
        this.position = position;
    }

    /**
     * Set new position of an apple from canvas width and canvas height both quoted in parameters
     *
     * @param {number} widthInBlocks - Width of the canvas
     * @param {number} heightInBlocks - Height of the canvas
     */
    setNewPosition(widthInBlocks,heightInBlocks) {
        const newX = Math.round(Math.random()*(widthInBlocks-1));
        const newY = Math.round(Math.random()*(heightInBlocks-1));
        this.position = [newX,newY];
    }

    /**
     * Check if the position is on snake quoted in parameter
     *
     * @param {Object} snakeToCheck - object from class Snake
     * @returns {boolean}
     */
    isOnSnake(snakeToCheck) {
        let isOnSnake = false;
        console.log(snakeToCheck.body);
        for (let block of snakeToCheck.body){
            console.log(`${block[0]} ${block[1]}`);
            if(this.position[0] === block[0] && this.position[1] === block[1]){
                isOnSnake = true;
            }
        }
        return isOnSnake;
    }

}