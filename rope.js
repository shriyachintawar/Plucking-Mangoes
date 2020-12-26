class Rope{
    constructor(body,point){
        var options = {
            bodyA : body,
            pointB : point,
            stiffness : 0.004,
            length : 1
        }
        this.pointB = point;
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);

    }
    fly(){
        this.Rope.bodyA = null;
    }
    attach(body){
        this.Rope.bodyA = body;
    }
    display(){
        if(this.Rope.bodyA){

        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;

        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}