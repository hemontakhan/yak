var paper,ground; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,715,1200,20);

 	boxPosition=width/2-100
 	boxY=660;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

    paper = new Paper(50,660);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  paper.display();
  ground.display();


  drawSprites();
 
}

function keyPressed(){

 if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{
	x : 12,
	y : -13
	});
 }
}



