
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1, ball2, ball3, ball4, ball5
var roof
var rope1, rope2, rope3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(400, 600)
	ball2 = new Ball(500, 600)
	ball3 = new Ball(600, 600)
	ball4 = new Ball(300, 600)
	ball5 = new Ball(200, 600)
	roof = new Roof(400, 100)
	rope1 = new Rope(ball1.body, {x:400, y:100})
	rope2 = new Rope(ball2.body, {x:500, y:100})
	rope3 = new Rope(ball3.body, {x:600, y:100})
	rope4 = new Rope(ball4.body, {x:300, y:100})
	rope5 = new Rope(ball5.body, {x:200, y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  roof.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}




