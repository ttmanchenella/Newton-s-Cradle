
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roof = new Roof(800, 175, 228, 30);

	b1 = new Bob(400, 400, 40);
	r1 = new Rope(b1.body, roof.body, {x: -80, y: 0});

	b2 = new Bob(450, 400, 40);
	r2 = new Rope(b2.body, roof.body, {x: -40, y: 0});

	b3 = new Bob(500, 400, 40);
	r3 = new Rope(b3.body, roof.body, {x: 0, y: 0});

	b4 = new Bob(550, 400, 40);
	r4 = new Rope(b4.body, roof.body, {x: 40, y: 0});

	b5 = new Bob(600, 400, 40);
	r5 = new Rope(b5.body, roof.body, {x: 80, y: 0});
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  roof.display();

  b1.display();
  r1.display();

  b2.display();
  r2.display();

  b3.display();
  r3.display();

  b4.display();
  r4.display();

  b5.display();
  r5.display();

  if(keyDown("UP")) {
	  Body.applyForce(b1.body, b1.body.position, {x: -50, y: -45});
  }
}