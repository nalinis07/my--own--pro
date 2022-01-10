//write the story


var bg;
var shooter1,shooter_shooting;
var bgImg,shooter1Img,shooterShootingImg;

function preload(){
    bgImg=loadImage("assests/Images/sbg.jpg");
    shooterShootingImg=loadImage("assests/Images/shooter_3.png");
    shooter1Img=loadImage("assests/Images/shooter_1.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    bg=createSprite(windowWidth/2,windowHeight/2,20,20);
    bg.addImage(bgImg);
    bg.scale=(2);

    shooter1=createSprite(windowWidth-1100,windowHeight-100,20,20);
    shooter1.addImage(shooter1Img);
    shooter1.scale=(0.4);
}

function draw(){
    drawSprites();
}



