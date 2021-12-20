const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let myEngine;
let myWorld;

var left,right,bottom,topwall;
var ball;
var upButton,downButton,leftButton,rightButton;


function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  
  myWorld = myEngine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  left=new Border(10,200,20,400);
  right=new Border(390,200,20,400);
  bottom=new Border(200,390,400,20);
  topwall=new Border(200,10,400,20);
  
  var options={
    restitution:0.8
  }
  ball=Bodies.circle(200,200,30,options);
  World.add(myWorld,ball);

  upButton=createImg("upArrow.png")
  upButton.position(50,50);
  upButton.size(50,50);
  upButton.mouseClicked(vforceU);

  downButton=createImg("downArrow.png")
  downButton.position(100,50);
  downButton.size(50,50);
  downButton.mouseClicked(vforceD);

  rightButton=createImg("rightArrow.png")
  rightButton.position(150,50);
  rightButton.size(50,50);
  rightButton.mouseClicked(hforceR);

  leftButton=createImg("leftArrow.png")
  leftButton.position(200,50);
  leftButton.size(50,50);
  leftButton.mouseClicked(hforceL);
}

function draw() 
{
  background("orange");
  Engine.update(myEngine);
  left.representation();
  right.representation();
  bottom.representation();
  topwall.representation();

  ellipse(ball.position.x,ball.position.y,30,30);

}

function hforceL(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:-2,y:0})
}
function hforceR(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:+2,y:0})
}
function vforceU(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
function vforceD(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:2})
}
