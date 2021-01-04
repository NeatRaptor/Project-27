
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(250,400,60)
	bobObject2 = new Bob(190,400,60)
	bobObject3 = new Bob(310,400,60)
	bobObject4 = new Bob(130,400,60)
	bobObject5 = new Bob(370,400,60)

	roofObject = new Roof(250,120,330,30)

	rope1 = new Rope(bobObject1.body,roofObject.body,0,0)
	rope2 = new Rope(bobObject2.body,roofObject.body,-60,0)
	rope3 = new Rope(bobObject3.body,roofObject.body,60,0)
	rope4 = new Rope(bobObject4.body,roofObject.body,-120,0)
	rope5 = new Rope(bobObject5.body,roofObject.body,120,0)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(225);
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-120,y:-120});
	}
}