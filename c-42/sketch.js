var backgroundImage, background1, backgroundImage2, background2, backgroundImage3, background3;
var backgroundImage4, background4, backgroundImage5, background5, level;
var player, playerImage;

function preload(){
   // playerImage = loadImage("player/plr.png")
    backgroundImage1 = loadImage("Background/Blue.png");
    backgroundImage2 = loadImage("Background/Gray.png");
    backgroundImage3 = loadImage("Background/Green.png");
    backgroundImage4 = loadImage("Background/Pink.png");
    backgroundImage5 = loadImage("Background/Yellow.png");
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    level = 1;
}
function draw(){
    //background("gray");
    if(level === 1){
        setBackground(backgroundImage1);
    }
    if(level === 2){
        setBackground(backgroundImage2);
    }
    if(level === 3){
        setBackground(backgroundImage3);
    }
    if(level === 4){
        setBackground(backgroundImage4);
    }
    if(level === 5){
        setBackground(backgroundImage5);
    }

    player = createSprite(50,100,50,50);

    if(keyDown("space") && touches < 0){
        player.velocityY = -13
        touches.length  = []
    }

    player.velocityY += 0.8;

    if(keyDown("left")){
        player.x -= 5
    }

    if(keyDown("right")){
        player.x += 5
    }
    drawSprites();
}

function setBackground(Bg){
    for(var x=25; x<1200; x=x+64){
        for(var y=25; y<700; y=y+64){
        background1 = createSprite(x, y);
        background1.addImage(Bg);
        background1.velocityY = -1;
        }
    }
}