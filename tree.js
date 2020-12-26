class Tree{
    constructor(){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(1100,295,50,100,options);
        this.width = 50;
        this.height = 100;
        this.image = loadImage("tree.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,500,500);
    }
}