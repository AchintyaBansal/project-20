var car ,wall
var  speed , weight 



function setup() {

  createCanvas(800,400);
 wall =  createSprite(700, 200, 50, height/2);
 speed = random(55,90)
 weight = random(400,1500)
 car = createSprite(50,200,50,50)
 car.velocityX = speed ;
}

function draw() {
  background(0);

  if(wall.x - car.x < (car.width + wall.width )/2){
car.velocityX = 0 
var deformation = 0.5*speed*speed*weight/22500
  }
  if( deformation>180 ){
    car.shapeColor = (0,255,0)
  }
  if( deformation<180 && deformation > 100 ){
    car.shapeColor = ('yellow ')

  }
  if( deformation<100 ){
    car.shapeColor = ('green')
  }
  
  

  drawSprites();
}