class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(firstPoint, secondPoint) {
        if (firstPoint instanceof Point === false || secondPoint instanceof Point === false) {
            throw new Error('Parameter must be of type Point');
        }
        return Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2);
    }
};

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
