var currentLevel;

function setup() {
    console.log('setup');
    createCanvas(1195, 725);

setupCanvas()
    currentLevel = 0; //start at level one
    var url = "data/setup.json";
    loadJSON(url, jsonLoaded);



}

function setupCanvas(){
    background('#222222');


    stroke('blue');
    strokeWeight(20);
    rect(0, 0, 1200, 4);
    rect(0, 0, 4, 1200);
    rect(1190, 0, 1190, 710);
    rect(0, 720, 1200, 720);
    //------------>




}

function draw(){
    setupCanvas();
    drawSprites();
    strokeWeight(10);
    stroke('yellow');
    ellipse(50,100,25,25);

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
    }



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
    //    pacman.displace();


}
