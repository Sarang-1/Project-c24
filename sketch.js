
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new paper(100,300,30);
    ground = new Ground(600,400,1200,10);

    bin1 = new bin(800,385,175,20);
	bin2 = new bin(721,350,20,90);
	bin3 = new bin(879,350,20,90);
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  Engine.update(engine);

  paper1.display();
  ground.display();

  bin2.display();
  bin3.display();
  bin1.display();

  textSize(20)
  fill("lightblue");
  text("Dustbin",765,300);
  text("Waste",paper1.body.position.x-25,paper1.body.position.y-20);
  text("Press UP arrow key to throw",500,100);

  drawSprites();

  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

      Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-30});

	}
}

