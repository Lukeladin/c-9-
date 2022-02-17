var navio,mar;
var navioImg,marImg;
function preload(){
  navioImg = loadAnimation("ship1.png","ship2.png");
  marImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  mar = createSprite(0,0,400,200);
  navio = createSprite(200,150,200,100);
  navio.addAnimation("running", navioImg);
  mar.addImage(marImg);
}

function draw() {
  background("blue");
  navio.scale = 0.4;
  mar.velocityX = -4;
  if(mar.x<0){
    mar.x = mar.width/2;
  }

  drawSprites();
}