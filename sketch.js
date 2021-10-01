const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var canvas, tower;


//function preload() {
  //backgroundImg = loadImage("./background.gif");
//}


function setup() {
  canvas = createCanvas(2700, 2200);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower();

  computerBase = new ComputerBase(900, 400, 100, 100);
  player = new Player(900, 300, 100, 100)
  computerPlayer = new ComputerPlayer(200, 300, 100, 100)
  playerBase = new PlayerBase(200, 400, 100, 100)

  
}

function draw() {
  background(189);
  //image(backgroundImg, 0, 0, width, height);


  Engine.update(engine);
  tower.display();
  computerBase.display();
  player.display();
  computerPlayer.display();
  playerBase.display();
}