const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("GamingBackground.png");
}

function setup() {
	createCanvas(900,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (250, 300, 650, 5);
  superhero= new Superhero(132,3,100,100);
  attach=new Shoot(superhero.body,{x:100,y:465});
  block1 = new Block(335,288,40,30);  
  block2 = new Block(350,288,40,30);
  block3 = new Block(333,280,40,30);
  block4 = new Block(367,275,40,30);
  block5 = new Block(370,220,40,30);
  block6 = new Block(370,220,40,30);
  block7 = new Block(360,230,40,30);
  block8 = new Block(360,215,30,40);
  block9 = new Block(400,250,40,100);
  block10 = new Block(270,250,40,100);
  block11 = new Block(331,228,30,40);
  block12 = new Block(300,172,70,30);
  block13 = new Block(300,151,40,20);
  
  
  monster = new Monster(468,264,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  text(mouseX+";;;"+mouseY,100,50);

   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  monster.display();
  
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}




