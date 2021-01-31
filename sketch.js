
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;
var paper1,paper3,paper4,paper7,ropeobject,ropeobject1,ropeobject3,ropeobject5,ropeobject7;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
engine = Engine.create();
	world = engine.world;
	ground = new Ground(500,100,300,15);
	//Create the Bodies Here.

 paper=new Paper(450,350,30)
 paper1=new Paper(510,350,30)
 paper3=new Paper(570,350,30)
 paper4=new Paper(390,350,30)
 paper7=new Paper(630,350,30)
 ropeobject=new Rope(paper1.body,ground.body,10,0)
 ropeobject1=new Rope(paper.body,ground.body,-50,0)
 ropeobject3=new Rope(paper3.body,ground.body,70,0)
 ropeobject5=new Rope(paper4.body,ground.body,-110,0)
 ropeobject7=new Rope(paper7.body,ground.body,130,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  
  ground.display();
  paper.display();
  paper1.display();
  paper3.display();
  paper4.display();
  paper7.display();
  ropeobject.display();
  ropeobject1.display();
  ropeobject3.display();
  ropeobject5.display();
  ropeobject7.display();
}


function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper4.body,paper4.body.position,{x:-710,y:0});
  }
  
  }
  
