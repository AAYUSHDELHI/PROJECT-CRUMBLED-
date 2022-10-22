const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var dustbin,dustbinImg;
var paper,paperImg;
function preload(){
//find the bug in the below code
	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");

}


function setup() {
	createCanvas(1600,550);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,525,width,20);
	leftSide = new Ground(1100,525,10,120);
	rightSide = new Ground(1270,525,10,120);
	bottomSide = new Ground(1185,525,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();
    
	imageMode(CENTER);
		//use image() command to add paper image to the ball
image(ball.position.x,ball.position.y,radius,radius);

	// use image() command to add dustbin image in the canvas.
	image(dustbin.position.x,dustbin.position.y,radius,radius);
	
ball.addimage("paper.png",paperImg)
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
    
  	}
}
