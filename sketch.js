var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1, wall2, wall3;

//
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
    //
	rectMode(CENTER);
	
    wall1=createSprite(100, 500, 5,10);
	wall1.shapeColor="red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(1000, 500, 50000,10);
	groundSprite.shapeColor="white";

    //
	engine = Engine.create();
	world = engine.world;

	//
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    //
	Engine.run(engine);
  
}


function draw() {

	if (background.x < 0){
		background.x = background.width/2;
	  }

	//
  rectMode(CENTER);
   
  //agar color dalna ho toh
  background(0);

  //
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}