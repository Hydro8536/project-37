var database,position;
var balloonposition=database.ref('ballloon/height');
balloonPosition.on("value" ,readPosition, showError);

function preload(){
  
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  if (keyDown(UP_ARROW)){
updateHeight(0,-10);
balloon.addAnimation('hotAirBalloon,balloonImage2')
balloon.scale = balloon.scale - 0.01;
  }
  drawSprites();
}

function updateHeight(x,y){
database.ref('balloon/height').set({
'x' : height.x +  x,
'y' : height.y + y
})
}

function readHeight(data){
height = data.val();
balloon.x = height.x;
balloon.y = height.y;
}

function showEror(){
console.log("Error in writing the database");
}