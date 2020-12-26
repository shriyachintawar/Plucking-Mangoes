class Ground{
    constructor(){
        var options={
            isStatic : true
        }
        this.body = Bodies.rectangle(650,580,1400,20,options);
        this.width = 1400;
        this.height = 20;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}