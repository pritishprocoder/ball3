
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ballimg;
var rectangle1,rectangle2,rectangle3;
var slingshot;

function preload()
{
	ballimg=loadImage("paper.png");
	
}

function setup() {
	createCanvas(800, 700);
   ball= createSprite(30,600,20,20);
   ball.addImage(ballimg);
   ball.scale=0.3;
   rectangle1= createSprite(550,650,10,100);
   rectangle2=createSprite(600,700,100,10);
   rectangle3=createSprite(650,650,10,100);
	engine = Engine.create();
	world = engine.world;
	rectangle1.shapeColor=color(0,141,0);
	rectangle2.shapeColor=color(0,141,0);
	rectangle3.shapeColor=color(0,141,0);

	slingShot = new Slingshot(ball.body,{x:200,y:50});
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	mouseDragged();
	mouseReleased();
  rectMode(CENTER);

 ball.x=mouseX;
 ball.y=mouseY;
  background(252,1,0);
  display();

  drawSprites();
  
}
function display(){
	ball.display();
	rectangle1.display();
	rectangle2.display();
	rectangle3.display();
	slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}



