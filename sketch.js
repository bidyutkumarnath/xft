var canvas;
var music;
var rect1,rect2,lrect3,rect4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   rect1 = createSprite(100,570,140,20)
   rect1.shapeColor = "white";

   rect2 = createSprite(290,570,140,20)
   rect2.shapeColor = "green";

   rect3 = createSprite(480,570,140,20)
   rect3.shapeColor = "blue";

   rect4 = createSprite(680,570,140,20)
   rect4.shapeColor = "red";

    //create box sprite and give velocity
   ball = createSprite(400,300,40,40)
   ball.shapeColor = "pink";
   ball.velocityX = 2;
   ball.velocityY = 6;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    ball.bounceOff(edges);

   //add condition to check if box touching surface and make it box
   createEdgeSprites();
   drawSprites();
    
}
