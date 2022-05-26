const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let my_engine;
let my_world;

var tower;
var canvas, angle, tower, ground, cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);

 my_engine = Engine.create();
 my_world = my_engine.world;
  //Use a new keyword to create a tower object.(challenge 4)
angle = -PI /4;

 my_tower = new Tower(150,350,150,300);
 cannon = new Cannon(180,113,100,50,angle);
 ground = new Ground(0, height - 1, width * 2, 1);

 



}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);
  

  Engine.update(my_engine);
//display tower(challenge 4);

  my_tower.display();
  ground.display();
  cannon.display();

 
}

