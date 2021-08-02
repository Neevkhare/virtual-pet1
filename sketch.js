//Create variables here
var dog,dogImg,dogImg1
var database;
var foods,foodStock;

function preload()
{
	//load images here
  dogImg=loadImage("dogImg.png")
  dogImg1=loadImage("dogImg1.png")
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);

  dog=createSprite(250,300,150,150)
  dog.addImage(dogImg)
  dog.scale=0.15
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  textSize(20);
  
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogImg1);
}
  drawSprites();
  //add styles here
  fill("black");
  text("food remaning: "+foods,170,200);
  textSize(13);
  text("press UP_ARROW",130,10,300,20);

  
}
function readStock(data){
  foods=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
Food:x
  })
}