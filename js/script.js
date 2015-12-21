var currentLevel;
var pacman;
//var xPos = 25;
//var yPos = 25;



//function move(e){
//     //alert(e.keyCode);
//    if(e.keyCode==39){
//        xPos+=5;
////        pacman.position.x +=5;
//    }
//    if (e.keyCode==37){
//        xPos-=5;
//    }
//    if(e.keyCode==38){
//        yPos-=5;
//    }
//    if (e.keyCode==40){
//        yPos+=5;
//    }
   // setupCanvas.width=setupCanvas.width;}


//document.onkeydown = move;





function setup() {
    console.log('setup');
    createCanvas(1195, 725);

    pacman = createSprite(1150,50,0,0);
    pacman.addAnimation("still", "images/pacman3.png","images/pacman4.png");

    setupCanvas()
    currentLevel = 0; //start at level one
    var url = "data/setup.json";
    loadJSON(url, jsonLoaded);

}

function setupCanvas(){
    background('#222222');
}



function draw(){
    setupCanvas();
    fill('green')
    //ellipse(xPos,yPos,50,50);
    drawSprites();


}

function jsonLoaded(data) {
    console.log('jsonLoaded',data);
    var walls = data.levels[currentLevel].walls;
    console.log('walls',walls);
    for (var i = 0; i < walls.length; i++) {
        var wall = createSprite(walls[i][0], walls[i][1], walls[i][2], walls[i][3]);
        wall.wallx = walls[i][2];
        wall.wally = walls[i][3];
        wall.draw = function(){
            fill(data.levels[currentLevel].wallColor);
            rect(0,0, this.wallx, this.wally );
        }
//    wall.setCollider(rect(0,0, this.wallx, this.wally ));

    }
//this.collider;
//    this.colliderType = "wall"

//this.remove = function() {
//    this.removed = true;
//}

    var dots = data.levels[currentLevel].dots;
    console.log('dots',dots);
    for (var i = 0; i < dots.length; i++) {
        var dot = createSprite(dots[i][0], dots[i][1], dots[i][2], dots[i][3]);
         dot.draw = function(){
            fill(data.levels[currentLevel].dotsColor);
            ellipse(0,0, 10,10);
        }
    }

//    walls.push();
//    dot.draw.displace();
}



function keyPressed() {
  if (keyCode == UP_ARROW) {
//    circle.position.y -= 5;
      pacman.setSpeed(2,270);
      pacman.changeAnimation("still");
  } else if (keyCode == DOWN_ARROW) {
    pacman.position.y += 5;
      pacman.setSpeed(2,90);
      pacman.changeAnimation("down");
  }
    if (keyCode == LEFT_ARROW) {
//    circle.position.y -= 5;
      pacman.setSpeed(2,180);
      pacman.changeAnimation("still");
  } else if (keyCode == RIGHT_ARROW) {
    pacman.position.x -= 5;
      pacman.setSpeed(2,360);
      pacman.changeAnimation("RIGHT");
      //return false; // prevent default
  }
}
 // return false; // prevent default
//    function keyPressed() {
//    if (keyCode == RIGHT_ARROW) {
////    circle.position.y -= 5;
//      pacman.setSpeed(5,270);
//      pacman.changeAnimation("still");
//  } else if (keyCode == LEFT_ARROW) {
//    pacman.position.x += 5;
//      pacman.setSpeed(5,90);
//      pacman.changeAnimation("left");
//  }
//  return false; // prevent default
//}

