
var trex ,trex_running;
var ground;
var groundimg;
var invisibleGround;
var cloudimg;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage("ground2.png");
  cloudimg = loadImage("cloud.png");


}

function setup(){
  createCanvas(600,200)
  //creating t-rex sprite
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 trex.x = 50;
 //creating ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundimg);
ground.x = ground.width/2;
invisibleGround = createSprite(200,190,400,20);
invisibleGround.visible = false;
}

function draw(){
  background("turquoise")
  console.log(trex.y);
  ground.velocityX = -5;
  if(ground.x<0) {
    ground.x = ground.width/2
  }

  if(keyDown("SPACE")&& trex.y>=140 ) {
    trex.velocityY = -10;

  }



trex.velocityY = trex.velocityY+0.5;
trex.collide(invisibleGround);
  spawnClouds();
  drawSprites();
  

}

function spawnClouds(){
  if(frameCount %60===0){
  cloud = createSprite(600,100,40,10);
  cloud.addImage(cloudimg);
  cloud.y = Math.round(random(10,60));
  cloud.scale = 0.7;
  cloud.velocityX = -3;
  }

}