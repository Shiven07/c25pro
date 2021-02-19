var paper, ground, leftsidebox, rightsidebox, basebox;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
	world = engine.world;

	
  ground = new Ground(500,475,700,20);

 
  paperObject = new Paper(100, 100, 70);

  dustbinobject = new Dustbin(750, 445);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperObject.display();
  dustbinobject.display();
  drawSprites();
 
}


function keypressed()  {

if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:85,y:-85});

}

}
