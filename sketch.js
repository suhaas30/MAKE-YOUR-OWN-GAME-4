var bg, bgImg;
var mario, marioImg;
var cactus, cactusImg;
var wood, woodImg;
var coin, coinImg;

var distance = 0;
var coin_score = 0;




function preload(){
  bgImg = loadImage("background.jpg")
  marioImg = loadAnimation("mariorunning.png", "mariorunning2r.png", "mariorunning3.png");
  cactusImg = loadImage("cactus.png");
  woodImg = loadImage("woodplankr.png");
  coinImg = loadImage("coin.png");
}

function setup() {
 createCanvas(700,400);
  
  bg = createSprite(300,130);
  bg.addImage(bgImg);
  bg.scale = 0.8;
  bg.velocityX=-5;
  
  
  mario = createSprite(100,300);
  mario.addAnimation("running", marioImg);
  mario.scale = 0.2;
  
  
  
  invisibleGround = createSprite(400,390,1000,5);
  invisibleGround.visible = true;
  
  cactusGroup = new Group();
  woodGroup = new Group();
  coinGroup = new Group();
  
}

function draw() {
 background("black");
 
  
      if(keyDown("space")&& mario.y >= 157) {
        mario.velocityY = -12;
    }
  mario.velocityY = mario.velocityY + 0.6;
  
  mario.collide(invisibleGround);
  mario.collide(woodGroup);

  distance=distance+Math.round(getFrameRate()/60);

  for(var i=0;i<coinGroup.length;i++){
    if(coinGroup.get(i). isTouching (mario)){
    coinGroup.get(i).destroy();
    coin_score=coin_score+100;
    }
    }
  

  

  
  spawnCactus();
  
  if(bg.x<0){
    bg.x = 350;
  }


  
  

  if(frameCount%300===0){
    wood = createSprite(1000,200);
    wood.addImage(woodImg);
    wood.velocityX=-3;
    wood.scale=0.3

    wood.debug = true;
    wood.setCollider("rectangle", 0,0,500,20);

    coin = createSprite(wood.x,wood.y-35);
    coin.addImage(coinImg);
    coin.velocityX=-3;
    coin.scale=0.2

    woodGroup.add(wood);
    coinGroup.add(coin);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();

  fill("black");
  textSize(25);
  textAlign(CENTER);
  text("Distance:"+distance, 600,50);
  text("Coin Score:"+coin_score, 100,50);
  
}

function spawnCactus(){
  if(frameCount%60===0){
      cactus = createSprite(350,350);
      cactus.addImage(cactusImg);
      cactus.scale = 0.15;
      cactus.velocityX=-5
    
      
      
    cactusGroup.add(cactus);
  }
}