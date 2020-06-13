const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var polygon;
var slingshot;

var box1, box2, box3, box4, box5;
var box6, box7, box8;
var box9;

var box10, box11, box12, box13,  box14;
var box15, box16, box17;
var box18;
var r, g, b;

var score = 0;

function preload(){
  getTime();

  if(hour > 6 && hour < 18){
    r = 144;
    g = 238;
    b = 144;
  }else{
    r = 1;
    g = 48;
    b = 30;
}

}

function setup() {
  var canvas = createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,600,300,30);
  ground2 = new Ground(1000,400,300,30);

  polygon = new Polygon(200, 300, 60, 50);

  slingshot = new SlingShot(polygon.body, {x : 200, y : 300});



  //1st set 1st row
  box1 = new Box(600, 500, 30, 40);
  box2 = new Box(570, 500, 30, 40);
  box3 = new Box(540, 500, 30, 40);
  box4 = new Box(630, 500, 30, 40);
  box5 = new Box(660, 500, 30, 40);

  //1st set 2nd row
  box6 = new Box(600, 450, 30, 40);
  box7 = new Box(570, 450, 30, 40);
  box8 = new Box(630, 450, 30, 40);

  //1st set 3rd row
  box9 = new Box(600, 400, 30, 40);



  //2nd set 1st row
  box10 = new Box(1000, 300, 30, 40);
  box11 = new Box(970, 300, 30, 40);
  box12 = new Box(940, 300, 30, 40);
  box13 = new Box(1030, 300, 30, 40);
  box14 = new Box(1060, 300, 30, 40);

  //2nd set 2nd row
  box15 = new Box(1000, 250, 30, 40);
  box16 = new Box(970, 250, 30, 40);
  box17 = new Box(1030, 250, 30, 40);

  //2nd set 3rd row
  box18 = new Box(1000, 200, 30, 40);



}

function draw() {
  background(r, g, b);
  Engine.update(engine);

  fill (0);
  textSize(20);
  text("SCORE : "+ score, 750, 80);
  
  ground1.display();
  ground2.display();

  polygon.display();


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();

  box9.display();

  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  box15.display();
  box16.display();
  box17.display();

  box18.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}


function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
      Matter.Body.setPosition(polygon.body, {x: 200 , y : 300});
  }
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var response2 = await response.json();
  hour = response2.datetime[11]+response2.datetime[12];
  console.log(hour);
}