
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var rectangle1,rectangle2,rectangle3;

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);
   ball= createSprite(30,600,20,20);
  
 
   rectangle1= createSprite(550,650,10,100);
   rectangle2=createSprite(600,700,100,10);
   rectangle3=createSprite(650,650,10,100);
	engine = Engine.create();
	world = engine.world;
	

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);

 ball.x=mouseX;
 ball.y=mouseY;
  background(251,1,0);
  display();

  drawSprites();
  
}
function display(){
	ball.display();
	rectangle1.display();
	rectangle2.display();
	rectangle3.display();
}



