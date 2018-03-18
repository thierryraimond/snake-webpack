import Apple from "../src/apple";

let apple, apple2;

describe('test class Apple()', () => {

    beforeAll( () => {
       apple = new Apple();
       apple2 = new Apple();
       apple2.setNewPosition(400,400);
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
});