class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
    var options = {
    bodyA: bodyA,
    bodyB: bodyB,
    //length: 10,
    //stiffness: .04
    }
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.rope = Constraint.create(options);
    World.add(world, this.rope)
    }
    
     display(){
    var p = this.rope.bodyA.position;
    var n = this.rope.bodyB.position;
    strokeWeight(4);
    line(p.x, p.y, n.x + this.offsetX, n.y);
    }
    }
    