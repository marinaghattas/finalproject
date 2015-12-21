var currentLevel;
var pacman;
var collectibles;




function setup() {
   // console.log('setup');
    createCanvas(1195, 725);

    pacman = createSprite(1150,50,0,0);
    pacman.addAnimation("still", "images/pacman1.png","images/pacman2.png");

    //create two groups
    obstacles = new Group();
    collectibles = new Group();

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
    ;
    drawSprites();

    pacman.collide(obstacles)
    pacman.overlap(collectibles, collect)

}

function jsonLoaded(data) {
    console.log('jsonLoaded',data);
    var walls = data.levels[currentLevel].walls;
    console.log('walls',walls);
    for (var i = 0; i < walls.length; i++) {
        var wall = createSprite(walls[i][0], walls[i][1], walls[i][2], walls[i][3]);
        obstacles.add(wall);

        wall.wallx = walls[i][2];
        wall.wally = walls[i][3];
        wall.draw = function(){
            fill(data.levels[currentLevel].wallColor);
            rect(0,0, this.wallx, this.wally );
        }

    }


    var dots = data.levels[currentLevel].dots;
    console.log('dots',dots);
    for (var i = 0; i < dots.length; i++) {
        var dot = createSprite(dots[i][0], dots[i][1], dots[i][2], dots[i][3]);
        collectibles.add(dot);

         dot.draw = function(){
            fill(data.levels[currentLevel].dotsColor);
            ellipse(0,0, 10,10);
        }
    }


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
      pacman.changeAnimation("Left");
      //return false; // prevent default
  }
}

function collect(collector, collected)
{

  collected.remove();
}

