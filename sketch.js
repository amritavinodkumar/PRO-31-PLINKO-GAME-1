const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos;
var particles;
var divisions;
var ground;
var wall1, wall2, wall3, wall4;
var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];

function setup(){
  var canvas = createCanvas(1300,620);
  engine = Engine.create();
  world = engine.world;

  wall1 = new Wall(410,310,10,620)
  wall2 = new Wall(900,310,10,620)
  wall3 = new Wall(655,614,500,10)
  wall4 = new Wall(655,5,500,10)

  ground = new Ground(655,605,478,10)
 
  for(var k = 418; k<= 900; k = k + 79){
   divisions.push(new Divisions(k, height-divisionsHeight/2.3,10,divisionsHeight/1.25))
  }

  for(var j = 475; j <= 850; j=j+50){
    plinkos.push(new Plinkos(j,75))
 }

  for(var j = 450; j <= 890; j=j+50){
    plinkos.push(new Plinkos(j,150))
 }

  for(var j = 475; j <= 850; j=j+50){
  plinkos.push(new Plinkos(j,225))
 } 

  for(var j = 450; j <= 890; j=j+50){
  plinkos.push(new Plinkos(j,300))
 }
}

function draw() {
  background(0,0,0);

  Engine.update(engine) 
  
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();

  ground.display();

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++){
     plinkos[j].display();
  }

  if(frameCount%120===0){
    particles.push(new Particles(random(width/2-20, width/2+20),10,10));
  }
 
  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
}