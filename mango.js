class mango{
    constructor(x,y){
        var options ={
            restitution : 0.1,
            friction : 1,
            isStatic : true
        }
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        imageMode(CENTER)
        image(this.image,0,0,40,40);
        pop();
        }
}