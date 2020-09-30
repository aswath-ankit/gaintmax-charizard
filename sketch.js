var images_img,house_img,dimond_img,sec1_img,sec2_img,laser_img,thief_img
var images,house,dimond,sec1,sec2,laser,thief
function preload () {
  images_img=loadImage("images/images.png")
  house_img=loadImage("images/HOUSE.jpg")
  dimond_img=loadImage("images/DIMOND.jpg")
  laser_img=loadImage("images/LASER 1.png")
  sec1_img=loadImage("images/SEC 1.jpg")
  sec2_img=loadImage("images/SEC2.jpg")
  thief_img=loadImage("images/THIEF.jpg")
}

function setup() {
  createCanvas(500,850);

  dimond = createSprite (480,20,10,10);
  dimond.addImage(dimond_img)
  dimond.scale=0.07

  thief = createSprite (480,830,10,10);
  thief.addImage(thief_img)
  thief.scale=0.09

  sec2 = createSprite (20,80,10,10);
  sec2.addImage(sec2_img)
  sec2.scale=0.09
  sec2.velocityX=5
  sec2.velocityY=0

  
  sec1 = createSprite (430,810,10,10);
  sec1.addImage(sec1_img)
  sec1.scale=0.07
  sec1.velocityX=5
  sec1.velocityY=0
  
  laser = createSprite (100,100,100,10);
  laser.scale=0.5
  //laser.velocityX=5
  //laser.velocityY=0

}

function draw() {
  background(255);
  edges=createEdgeSprites()
  sec2.bounceOff(edges[1])
  sec2.bounceOff(edges[0])
  sec1.bounceOff(edges[1])
  sec1.bounceOff(edges[0])
  laser.bounceOff(edges[1])
  laser.bounceOff(edges[0])

  if (keyDown(DOWN_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=3
  }
  
  if (keyDown(UP_ARROW) ) {
    thief.velocityX=0
    thief.velocityY=-3
  }

  if (keyDown(LEFT_ARROW) ) {
    thief.velocityX=-3
    thief.velocityY=0
  }

  if (keyDown(RIGHT_ARROW) ) {
    thief.velocityX=3
    thief.velocityY=0
  }

 imageMode(CENTER)
 
  drawSprites();
}