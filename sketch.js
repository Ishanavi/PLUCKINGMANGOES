const Constraint = Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bgImage = loadImage("images/bg.jpg")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	
	boy = new Boy(200,530)

	ground = new Ground(600,595,1200,10)

	tree = new Tree(900,315)

	mango1 = new Mango(870,200,50,50)
	mango2 = new Mango(800,150,40,40)
	mango3 = new Mango(970,140,50,50)
	mango4 = new Mango(840,100,40,40)
	mango5 = new Mango(800,250,40,40)
	mango6 = new Mango(1050,200,50,50)
	mango7 = new Mango(1000,270,50,50)
	mango8 = new Mango(750,200,40,50)
	mango9 = new Mango(690,220,40,40)
	mango10 = new Mango(720,270,50,50)
	mango11 = new Mango(1150,240,50,50)
	mango12 = new Mango(900,280,50,50)
	mango13 = new Mango(950,200,40,40)
	mango14 = new Mango(930,90,50,50)
	mango15 = new Mango(1080,150,40,40)

	stone = new Stone(140,460,40)

	sling = new constraint1(stone.body,{x:145,y:460})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);

  
	ground.display();
	boy.display();
	
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
	mango15.display();
	stone.display();
	sling.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango15);
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

function mouseDragged()
{
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
	sling.fly()
}

function detectCollision(stone,mango)
{
   mangoPosition = mango.body.position
   stonePosition = stone.body.position

   var dis = dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y)
   if(dis<=mango.r+stone.r)
   {
	   Matter.Body.setStatic(mango.body,false)
   }
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body,{x:140,y:460})
		sling.attach(stone.body)
		
	}
}

