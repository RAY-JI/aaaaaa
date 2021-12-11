var score=0
var fieldImg, moleImg, hammerImg
var field, mole, hammer
var hole1,hole2,hole3,hole4,hole5
var button

function preload(){
fieldImg=loadImage("assets/field.png");
moleImg=loadImage("assets/mole.png");
hammerImg=loadImage("assets/hammer.png");
}

function setup() {
  createCanvas(800, 800);



field=createSprite(400,400,30,30)
field.addImage('field',fieldImg);
field.scale=0.8

mole=createSprite(400,400,50,70)
mole.addImage('mole',moleImg);
mole.scale=1.1
mole.visible=true

hammer=createSprite(400,400,60,80);
hammer.addImage('hammer',hammerImg);
hammer.scale=0.14

hole1=createSprite(160,210,60,60);
hole1.visible=false;

hole2=createSprite(675,210,60,60);
hole2.visible=false;

hole3=createSprite(410,400,60,60);
hole3.visible=false;

hole4=createSprite(150,610,60,60);
hole4.visible=false;

hole5=createSprite(655,620,60,60)
hole5.visible=false

}

function draw() {
  background("gray");
  fill("black")
  text("score:"+score,100,100);

mole.x=hole5.x
mole.y=hole5.y




hammer.x = World.mouseX;
hammer.y = World.mouseY;

mousePressed();
 drawSprites();
}

function mousePressed(){
  if(hammer.isTouching(mole)){
    mole.visible=false
  }
}