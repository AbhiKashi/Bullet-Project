
var bullet,bullet1,bullet2;
var speed,speed1,speed2;
function setup() {
  createCanvas(800,400);
  bullet=createSprite(50, 200, 50, 50);
 bullet1=createSprite(50,300,50,50);
  bullet2=createSprite(50,400,50,50);
  speed=random(223,321);
  speed1=random(223,321);
  speed2=random(223,321);
  bullet.velocityX=speed;
bullet1.velocityX=speed1;
bullet2.velocityX=speed2;
}

function draw() {
  background(255,255,255);  
  drawSprites();
}