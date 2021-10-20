var main, main_img;

function preload(){
 main_img = loadAnimation("Images/KnightA1.gif","Images/KnightA2.gif","Images/KnightA3.gif","Images/KnightA4.gif","Images/KnightA5.gif")
}

function setup() {
  createCanvas(1350, 700);
 main = createSprite(200, 480, 10, 10);
 main.addAnimation("walking", main_img)
  main.scale = 0.3; 
}
 
function draw() {
  background(0);  
  drawSprites();
}