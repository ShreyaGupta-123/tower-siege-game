const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const Constraint=Matter.Constraint;
var world,engine,bodies;
var ground,platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18;
var stone,slingShot;
var bg, backgroundImage;
var score=0;

function preload(){
 backgroundImage=loadImage("backgroundIMG.jpg")
}

function setup() {
  createCanvas(1400,700);
  
 
engine=Engine.create();
world=engine.world;

ground=new Ground(700,660,1400,100);

platform1=new Ground(450,400,200,10);
platform2=new Ground(900,200,200,10);

box1=new Box(420,380,20,30);
box2=new Box(440,380,20,30);
box3=new Box(460,380,20,30);
box4=new Box(480,380,20,30);
box5=new Box(500,380,20,30);
box6=new Box(440,340,20,30);
box7=new Box(460,340,20,30);
box8=new Box(480,340,20,30);
box9=new Box(460,300,20,30);

box10=new Box(860,170,20,30);
box11=new Box(880,170,20,30);
box12=new Box(900,170,20,30);
box13=new Box(920,170,20,30);
box14=new Box(940,170,20,30);
box15=new Box(880,140,20,30);
box16=new Box(900,140,20,30);
box17=new Box(920,140,20,30);
box18=new Box(900,110,20,30);

stone=new Stone(100,400,20);

slingShot=new Slingshot(stone.body,{x:200,y:400});

}

function draw() {
  background(backgroundImage);
  push()
  noStroke();
  textSize(30);
  fill("white");
  text("Score: "+score,width-300,550);
  pop()
  
  Engine.update(engine);
  
  ground.display();

  platform1.display();
  platform2.display();

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

  stone.display();

  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(stone.body);
  }

 
}


async function getTime(){

  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  

  var responseJson=await response.json();
 
  var dateTime=responseJson.datetime;
  
  var Hour=dateTime.slice(11,13);
  console.log(Hour)
  
  if (Hour<06 && Hour>18){
    bg="white"
  }
  else{
    bg="grey"
  }

}
