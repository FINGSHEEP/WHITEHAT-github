var fixedrect,movingrect;
var gameobject1,gameobject2,gameobject3,gameobject4;


function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 100, 50, 50);
  movingrect = createSprite(200,200,40,40);
  gameobject1 = createSprite(250,200,30,30);
  gameobject2 = createSprite(300,200,30,30);
  gameobject3 = createSprite(350,200,30,30);
  gameobject4 = createSprite(400,200,30,30);

  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  gameobject1.shapeColor = "blue";
  gameobject2.shapeColor = "blue";
  gameobject3.shapeColor = "blue";
  gameobject4.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
if (isTouching(gameobject1,movingrect)) {
  movingrect.shapeColor = "red"; 
  gameobject1.shapeColor = "red"; }
         else { 
           movingrect.shapeColor = "green";
           gameobject1.shapeColor = "blue";
            }

  
  drawSprites();
}

function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2) { 
        return true;
      }
    
         else { 
            return false;
            }

}