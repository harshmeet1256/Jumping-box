var canvas, surface1, surface2, surface3, surface4, box;
var music;

function preload(){
    music = loadSound("music.mp3");

}

function setup(){
    canvas = createCanvas(600,400);
 music.addSound=(music.mp3);
//creating 4 different surfaces
    surface1=createSprite(150,370,90,15);
    surface1.shapeColour=rgb(0,0,255);
    surface2=createSprite(250,370,90,15);
    surface2.shapeColour=rgb(255,255,85);
    surface3=createSprite(350,370,90,15);
    surface3.shapeColour=rgb(255,0,145);
    surface4=createSprite(450,370,90,15);
    surface4.shapeColour=rgb(0,182,0);
    
//creating the box
    box=createSprite(400,100,40,40);
    box.shapeColour=rgb(255,255,255);
    box.velocityY=3;
    box.velocityY=-3;
    box.velocityX=3;
    box.velocityX=-3;
}

function draw() {
  background(rgb(169,169,169));
  //calling the functions
  if(isTouching(surface1,box)){
      box.shapeColour=rgb(0,0,255);
      surface1.shapeColour=rgb(0,0,255);
  } 
  else{
      box.shapeColour=rgb(255,255,255);
      surface1.shapeColour=rgb(0,0,255);
  }
  bounceOff(box,surface1);
//creating the edges

 if(surface1.isTouching(box) && box.bounceoff(surface1)){
     box.shapeColour=rgb(0,0,255);
 } 
 if(surface2.isTouching(box) && box.bounceoff(surface2)){
    box.shapeColour=rgb(255,255,85);
    box.velocityX=0;
    music.stop();
} 
if(surface3.isTouching(box) && box.bounceoff(surface3)){
    box.shapeColour=rgb(255,0,145);
} 
if(surface4.isTouching(box) && box.bounceoff(surface4)){
    box.shapeColour=rgb(0,182,0);
}  
    drawSprites();
}
