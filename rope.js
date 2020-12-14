class Rope {
    constructor(body1, body2, point1) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: point1
        }
    this.constraintObj = Constraint.create(options);
    World.add(world, this.constraintObj);
    }

    display() {
        push();
        var p1 = this.constraintObj.bodyA.position;
        var p2 = this.constraintObj.bodyB.position;
        var anchor2x = p2.x + this.constraintObj.pointB.x;
        var anchor2y = p2.y + this.constraintObj.pointB.y;

        stroke("white");

        line(p1.x, p1.y, anchor2x, anchor2y);
        pop();
    }
}