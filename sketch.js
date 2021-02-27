const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gun;
var block,ground,bullet;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box = new Box(700,320,70,70)
  ground = new Ground(600,height,1200,20);
  gun = new Gun(200,320)
  bullet = new Bullet(200,100)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine);
  
  box.display();
  ground.display();
  gun.display();
  bullet.display();

  if(keyCode === 87){
    Matter.Body.setVelocity(bullet.body, {x: 100, y: 0});
    //Matter.Body.setPosition(bullet.body,{x:200, y:50});
  
  }else{
    Matter.Body.setPosition(bullet.body,{x:mouseX, y:mouseY});
  }
}
