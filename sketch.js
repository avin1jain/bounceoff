var fixedRect, movingRect;
var object1,object2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  object1= createSprite(200, 100, 50, 80);
  object2 = createSprite(800, 100, 50, 80);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
    object1.velocityX= +5;
  object2.velocityX= -5;

}

function draw() {
  background(0,0,0);  
bounce(movingRect,fixedRect);
 bounce(object1,object2);
  drawSprites();
}
function bounce(fixedRect,movingRect){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}


}