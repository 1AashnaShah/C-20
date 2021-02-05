var ball1,ball2;
function setup() {
  createCanvas(800,400);
 
  ball1=createSprite(200,200,50,50);
  ball1.shapeColor="Red";
  ball2=createSprite(200,200,50,50);
  ball2.shapeColor="Red";
}

function draw() {
  background(255,255,255);  
  ball2.x=mouseX;
  ball2.y=mouseY;
  if(ball2.x-ball1.x < ball1.width/2+ball2.width/2
    && ball1.x-ball2.x < ball1.width/2+ball2.width/2
    && ball2.y-ball1.y < ball1.width/2+ball2.width/2
    && ball1.y-ball2.y < ball1.width/2+ball2.width/2
    ){
    ball1.shapeColor="green";
    ball2.shapeColor="green";

  }
  else{
  ball1.shapeColor="red";
  ball2.shapeColor="red";
  }
  drawSprites();
}