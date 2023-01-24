//declare all your variables at the top
//you have load sound, images and you have to create animations

var ball;
var ballImage;
var edges;

function preload(){
  //use of this function is to load animations, images, sounds
  ballImage = loadImage("basketball.png");
}

function setup() {
  //used to create the sprites, give it image/animation, giving it velocity
  createCanvas(600, 600);

  ball = createSprite(200, 200, 50, 50);
  ball.addImage(ballImage);
  ball.scale = 0.6;
  ball.setVelocity(2,5);

  edges = createEdgeSprites();
}

function draw() {
  background(30);

  ball.bounceOff(edges);

  drawSprites();
}