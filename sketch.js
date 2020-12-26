
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground,tree,stone,rope;
var boyimg;
var mango1,mango2,mango3,mango4,mango5,mango6;
function preload()
{
	boyimg = loadImage("boy.png");
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.


	Engine.run(engine);
	ground = new Ground();
	tree = new Tree();
	stone = new Stone();
	mango1=  new mango(925,201);
	mango2=  new mango(990,170);
	mango3=  new mango(1020,118);
	mango4=  new mango(1090,118);
	mango5=  new mango(1158,118);
	mango6=  new mango(1064,170);
	mango7=  new mango(1250,170);
	mango8=  new mango(1150,170);
	mango9=  new mango(980,240);
	mango10=  new mango(1045,240);
	mango11 = new mango(1115,240);
	mango12 = new mango(1200,240);
	mango13 = new mango(1270,240);
	mango14 = new mango(1186,189);
	rope = new Rope(stone.body,{x:128,y:366});

	var render = Render.create({
		element : document.body,
		engine : engine,
		options :{
			width : 1300,
			height: 500,
			wireframes : false
		}
	});
	Render.run(render);
}


function draw() {
  
	  background(0);
	  imageMode(CENTER);

	  	  textSize(40);
	  text("Press Space for another chance",225,82);

	image(boyimg,250,460,400,400);
	  stone.display();
  	ground.display();
	
	
	  tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	stone.display();
	//text(mouseX+","+mouseY,mouseX,mouseY);
	rope.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango6);
	detectCollision(stone,mango7);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	detectCollision(stone,mango10);
	detectCollision(stone,mango11);
	detectCollision(stone,mango12);
	detectCollision(stone,mango13);
	detectCollision(stone,mango14);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope.fly();
}

function detectCollision(lstone,lmango){
	mangoPosition = lmango.body.position;
	stonePosition = lstone.body.position;

	var distance = dist(mangoPosition.x,mangoPosition.y,stonePosition.x,stonePosition.y);
	if(distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:130,y:375});
		rope.attach(stone.body);
	}
}
