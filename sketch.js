const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World

var engine, myWorld, ground,ball;

function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  myWorld = engine.world;

  var ground_options = {
    isStatic: true
  }

  var ball_options = {
    
    restitution :1.0
  }

  ground = Bodies.rectangle(200,390,200,50,ground_options);
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ground);
  World.add(myWorld,ball);


  //console.log(object);
}

function draw() {
  background(0);
  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400 ,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  }
