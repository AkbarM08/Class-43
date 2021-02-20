var backgroundImage, background1, backgroundImage2, background2, backgroundImage3, background3, bgcontrol;
var backgroundImage4, background4, backgroundImage5, background5, level;
var player, playerImage;
var y=25;
var bg;
var background1
function preload(){
   playerImage = loadAnimation("plr/1.png","plr/2.png","plr/3.png","plr/4.png","plr/5.png","plr/6.png","plr/7.png")
    backgroundImage1 = loadImage("Background/Blue1.png");
    backgroundImage2 = loadImage("Background/Gray.png");
    backgroundImage3 = loadImage("Background/Green.png");
    backgroundImage4 = loadImage("Background/Pink.png");
    backgroundImage5 = loadImage("Background/Yellow.png");
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    level = 1;
    //bgcontrol = 50;
    // if(level === 1){
    //     setBackground(backgroundImage1);
    // }
    // if(level === 2){
    //     setBackground(backgroundImage2);
    // }
    // if(level === 3){
    //     setBackground(backgroundImage3);
    // }
    // if(level === 4){
    //     setBackground(backgroundImage4);
    // }
    // if(level === 5){
    //     setBackground(backgroundImage5);
    // }

    background1 = createSprite(width/2,height/2);

  
    
    background1.velocityY = -6;
   
   bg = 1
   switch(bg){
       case 1:  background1.addImage(backgroundImage1)
       break;
       case 2:  background1.addImage(backgroundImage1)
       break;
       case 3:  background1.addImage(backgroundImage1)
       break;
       case 4:  background1.addImage(backgroundImage1)
       break;
       case 5:  background1.addImage(backgroundImage1)
       break;

   }
    player = createSprite(50,100,50,50);
    player.addAnimation("move",playerImage)

}

function draw(){
    //background("gray");
    //bgcontrol=bgcontrol*2;

    if(background1.y<0){
         background1.y = 500
    } 

    if(keyDown("space") || touches < 0){
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

// function setBackground(Bg){
//     y = height/2
//         background1 = createSprite(width/2,height/2);
//         background1.addImage(Bg);
//         background1.velocityY = -6;
//         console.log(y);
     
//         if(background1.y<0){
//             background1.y = 500
//         } else {

//         }
//     }
    
    
    


 















