const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundImg;
var snowFall;


function preload(){
  getBackGroundImg();


}



function setup() {
  createCanvas(800,400);
  
  engine=Engine.create();
  world=engine,world;
 
  snowFall=new Snowfall(50,60,30);
  snowFall.addImage("snow5,webp");
  snowFll.scale=0.9;




}

function draw() {
  if(backgroundImg){
  background(snow1.jpg);  
  }

  snowFall.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    Matter.Body.isStatic(snowFall.body,false);
  }
}
 
function getBackGroundImg(){
  backgroundImg=loadImg(snow1.jpg);
}