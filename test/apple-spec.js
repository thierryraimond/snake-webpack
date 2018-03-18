import "babel-polyfill"; // to avoid referenceError: Can't find variable: Symbol
import Apple from "../src/apple.js";

let apple, apple2;
let snake, snake1;

describe('test class Apple()', () => {

    beforeAll( () => {
       apple = new Apple();
       apple2 = new Apple();
       apple2.setNewPosition(400,400);
       snake = {body: [[6,4],[5,4],[4,4],[3,4],[2,4]]};
       snake1 = {body: [[10,10],[9,10]]};
    });

    it('By default apple.position should be equal to [10,10]', () => {
        expect(apple.position).toEqual([10,10]);
    });

    it('apple2.position[0] and apple2.position[1] should be less than 400 and to be greater than or equal 0', () => {
        expect(apple2.position[0]).toBeLessThan(400);
        expect(apple2.position[0]).toBeGreaterThanOrEqual(0);
        expect(apple2.position[1]).toBeLessThan(400);
        expect(apple2.position[1]).toBeGreaterThanOrEqual(0);
    });

    it('apple.isOnSnake should be false', () => {
       expect(apple.isOnSnake(snake)).toBe(false);
    });

    it('apple.isOnSnake should be true', () => {
        expect(apple.isOnSnake(snake1)).toEqual(true);
    });

});