var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80)
  fixedRect.shapeColor = "green";
  movingRect = createSprite(150,150,80,30)
  movingRect.shapeColor = "green";
  
}

function draw() {
  background(255,255,255);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }  
  drawSprites();
}