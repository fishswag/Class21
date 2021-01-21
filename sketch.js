var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "white";
  fixedRect.debug = true;
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "white";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;

  edges = createEdgeSprites();
}

function draw() {
  background(0,0,0);  

bounceOff(fixedRect, movingRect)

fixedRect.bounceOff(edges);
movingRect.bounceOff(edges);
  drawSprites();
}


