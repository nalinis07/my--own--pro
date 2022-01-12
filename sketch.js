//write the story


var bg;
var shooter2,shooter_shooting,greenmonster;
var bgImg,shooter2Img,shooterShootingImg,greenmonsterImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


function preload(){
    bgImg=loadImage("assests/Images/sbg.jpg");
    shooterShootingImg=loadImage("assests/Images/shooter_3.png");
    shooter2Img=loadImage("assests/Images/shooter_2.png");
    greenmonsterImg=loadImage("assests/Images/ga.jpg");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    bg=createSprite(windowWidth/2,windowHeight/2,20,20);
    bg.addImage(bgImg);
    bg.scale=(2);

    shooter2=createSprite(windowWidth-1100,windowHeight-200,20,20);
    shooter2.addImage(shooter2Img);
    shooter2.scale=(0.4);

    
    greenmonster=createSprite(windowWidth-500,windowHeight-200,20,20);
    greenmonster.addImage(greenmonsterImg);
    greenmonster.scale=(0.2);
}

function draw(){
  if(gameState===PLAY){
    if(keyDown("up_arrow")) {
        shooter2.y=shooter2.y-3;
      } 
       
        if(keyDown("down_arrow")) {
            shooter2.y=shooter2.y+3;
      } 
        
        if(keyDown("space")) {
        shooter2.velocityY=-5;
      } 
    }
    drawSprites();
}



