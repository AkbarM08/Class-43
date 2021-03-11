var backgroundImage, background1, backgroundImage2, background2, backgroundImage3, background3, bgcontrol;
var backgroundImage4, background4, backgroundImage5, background5, level;
var player, playerImage;
var gravityGameState = "normal";
var y=25;
var bg;
var score = 0;
var background1
var brickWallImage, brickWall;
var copperWall,copperWallImage;
var flag,flagImage,edges, fanImage, fan1;
var fan1, fan2;
    
    function preload(){
        playerImage = loadAnimation("plr/1.png","plr/2.png","plr/3.png","plr/4.png","plr/5.png","plr/6.png","plr/7.png")
        backgroundImage1 = loadImage("Background/Blue1.png");
        backgroundImage2 = loadImage("Background/Gray1.png");
        backgroundImage3 = loadImage("Background/Green1.png");
        backgroundImage4 = loadImage("Background/Pink.png");
        backgroundImage5 = loadImage("Background/Yellow.png");

        brickWallImage = loadImage("Terrain/BrickWall.png")
        brickImage = loadImage("Terrain/SmallBrick.png")
        
        brickWallImage = loadImage("Terrain/BrickWall.png")
        brickImage = loadImage("Terrain/SmallBrick.png")

        flagImage= loadImage("Items/Checkpoints/End/end.png")
    
        AppleAnimation = loadAnimation("fruits/apple/1.png","fruits/apple/2.png","fruits/apple/3.png","fruits/apple/4.png",
        "fruits/apple/5.png","fruits/apple/6.png","fruits/apple/7.png","fruits/apple/8.png","fruits/apple/9.png","fruits/apple/10.png","fruits/apple/12.png","fruits/apple/13.png","fruits/apple/4.png",
        "fruits/apple/15.png","fruits/apple/16.png") 

         kiwiAnimation = loadAnimation("fruits/kiwi/1.png","fruits/kiwi/2.png","fruits/kiwi/3.png","fruits/kiwi/4.png",
         "fruits/kiwi/5.png","fruits/kiwi/6.png","fruits/kiwi/7.png","fruits/kiwi/8.png","fruits/kiwi/9.png","fruits/kiwi/10.png","fruits/kiwi/12.png","fruits/kiwi/13.png","fruits/kiwi/4.png",
         "fruits/kiwi/15.png","fruits/kiwi/16.png") 

         orangeAnimation = loadAnimation("fruits/orange/1.png","fruits/orange/2.png","fruits/orange/3.png","fruits/orange/4.png",
         "fruits/orange/5.png","fruits/orange/6.png","fruits/orange/7.png","fruits/orange/8.png","fruits/orange/9.png","fruits/orange/10.png","fruits/orange/12.png","fruits/orange/13.png","fruits/orange/4.png",
         "fruits/orange/15.png","fruits/orange/16.png") 

        cherryAnimation = loadAnimation("fruits/cherry/1.png","fruits/cherry/2.png","fruits/cherry/3.png","fruits/cherry/4.png",
        "fruits/cherry/5.png","fruits/cherry/6.png","fruits/cherry/7.png","fruits/cherry/8.png","fruits/cherry/9.png","fruits/cherry/10.png","fruits/cherry/12.png","fruits/cherry/13.png","fruits/cherry/4.png",
        "fruits/cherry/15.png","fruits/cherry/16.png") 

        
        strawberryAnimation = loadAnimation("fruits/strawberry/1.png","fruits/strawberry/2.png","fruits/strawberry/3.png","fruits/strawberry/4.png",
        "fruits/strawberry/5.png","fruits/strawberry/6.png","fruits/strawberry/7.png","fruits/strawberry/8.png","fruits/strawberry/9.png","fruits/strawberry/10.png","fruits/strawberry/12.png","fruits/strawberry/13.png","fruits/strawberry/4.png",
        "fruits/strawberry/15.png","fruits/strawberry/16.png") 
        

        
        fanImage = loadImage("Traps/Fan/Off.png");
    }
    function setup(){
        edges = createEdgeSprites();
        createCanvas(windowWidth, windowHeight);
        level = 1;
        //bgcontrol = 50;
    //     if(level === 1){
    //         setBackground(backgroundImage1);
    //     }
    //     if(level === 2){
    //         setBackground(backgroundImage2);
    //     }
    //     if(level === 3){
    //         setBackground(backgroundImage3);
    //     }
    //     if(level === 4){
    //         setBackground(backgroundImage4);
    //     }
    //     if(level === 5){
    //         setBackground(backgroundImage5);
    //     }
    
        background1 = createSprite(width/2,height/2);
        
        background1.velocityY = -1;
       bg = 1
    
        fan1 = createSprite(720, 260, 10, 10)
        fan1.addImage("fan",fanImage)
        fan1.scale = 2;

        fan2 = createSprite(720, 10 , 10, 10)
        fan2.rotation = 180
        fan2.addImage("fan",fanImage)
        fan2.scale = 2;


        player = createSprite(75,100,50,50);
        player.addAnimation("move",playerImage)
       
        brickWall = createSprite(90,400,50,50);
        brickWall.scale = 4;
        brickWall.addImage(brickWallImage)
    
        brickWall2 = createSprite(270,400,50,50);
        brickWall2.scale = 4;
        brickWall2.addImage(brickWallImage)
    
        brickWall3 = createSprite(450, 380, 50, 50);
        brickWall3.scale = 4;
        brickWall3.addImage(brickWallImage);
    
        brickWall4 = createSprite(630, 360, 50, 50);
        brickWall4.scale = 4;
        brickWall4.addImage(brickWallImage);
    
        brickWall5 = createSprite(810, 360, 50, 50);
        brickWall5.scale = 4;
        brickWall5.addImage(brickWallImage);
    
        brickEnd = createSprite(90,535,50,50);
        brickEnd.scale = 3;
        brickEnd.addImage(brickImage)
    
        brickPlatform = createSprite(910, 660, 50, 50);
        brickPlatform.scale = 3;
        brickPlatform.addImage(brickWallImage);

        flag = createSprite(90,620);
        flag.scale = 1.25;
        flag.addImage(flagImage);
        flag.mirrorY(-1)
    
        
    
        //create fruits
      
        apple = createSprite(width/2-70,100,30,30);
        apple.addAnimation("apple",AppleAnimation )
        apple.scale = 1.5;
        kiwi = createSprite(width/2-140,150,30,30)
        kiwi.addAnimation("kiwi",kiwiAnimation )
        kiwi.scale = 1.5;
        orange = createSprite(width/2-210,100,30,30)
        orange.addAnimation("orange",orangeAnimation )
        orange.scale = 1.5;
        cherries = createSprite(width/2-280,150,30,30)
        cherries.addAnimation("apple",cherryAnimation )
        cherries.scale = 1.5;
        strawberry = createSprite(width/2-350,100,30,30)
        strawberry.addAnimation("apple",strawberryAnimation)
        strawberry.scale = 1.5;
    
        apple_d = createSprite(width/2-70,height-100,30,30)
        apple_d.addAnimation("apple",AppleAnimation )
        apple_d.mirrorY(-1)
        apple_d.scale = 1.5;
        kiwi_d = createSprite(width/2-140,height-150,30,30)
        kiwi_d.addAnimation("apple",kiwiAnimation )
        kiwi_d.mirrorY(-1)
        kiwi_d.scale = 1.5;
        orange_d = createSprite(width/2-210,height-100,30,30)
        orange_d.addAnimation("apple",orangeAnimation )
        orange_d.mirrorY(-1)
        orange_d.scale = 1.5;
        cherries_d = createSprite(width/2-280,height-150,30,30)
        cherries_d.addAnimation("apple",AppleAnimation )
        cherries_d.mirrorY(-1)
        cherries_d.scale = 1.5;
        strawberry_d = createSprite(width/2-350,height-100,30,30)
        strawberry_d.addAnimation("apple",strawberryAnimation )
        strawberry_d.mirrorY(-1)
        strawberry_d.scale = 1.5;

        bottomEdge = createSprite(width/2,height,width,10)
        topEdge = createSprite(width/2,0,width,10)
        leftEdge = createSprite(0,height/2,10,height)
        rightEdge = createSprite(width,height/2,10,height)
        
        edges[2].x = 100

        }
    
    function draw(){
    
        switch(level){
            case 1:  background1.addImage(backgroundImage1)
            break;
            case 2:  background1.addImage(backgroundImage2)
            break;
            case 3:  background1.addImage(backgroundImage3)
            break;
            case 4:  background1.addImage(backgroundImage4)
            break;
            case 5:  background1.addImage(backgroundImage5)
            break;
            case 12:  background1.addImage(backgroundImage2)
            break;
            case 23:  background1.addImage(backgroundImage3)
            break;
            case 34:  background1.addImage(backgroundImage4)
            break;
            case 45:  background1.addImage(backgroundImage5)
            break;
        }
     //   if(player.isTouching(edges)){
    
        //}
        //background("gray");
        //console.log(edges[2].x)
        if(background1.y<0){
             background1.y = 500
        } 


        if(keyDown("left")){
            player.x -= 5
            player.mirrorX(-1);
        }
    
        if(keyDown("right")){
            player.x += 5
            player.mirrorX(1);
        }
    
    
        if(player.isTouching(topEdge) || player.isTouching(bottomEdge) || player.isTouching(leftEdge) || player.isTouching(rightEdge) ){
        console.log("reset");
        player.x = 75;
        player.y = 100
        player.velocityY = 0;
        gravityGameState = "normal";
        score=score-1;
        }

        

        if(keyDown("R") ){
            console.log("reset");
            player.x = 75;
            player.y = 100
            player.velocityY = 0;
            gravityGameState = "normal";
            }
        
        if(score<0){
            score=0
        }

       //camera.x = player.x
        //camera.y = player.y;
    
        drawSprites();
    
        textSize(25);
        fill("black");
        text("Points : " + score,800, 20);

        //LEVELS

        if(level === 1){
            textSize(20);
            fill("green")
            text("Use the left, right, and up", 10, 150);
            text("arrow keys to move", 30, 175);

            text("Collect fruits to get points", 280, 200);

            text("If you hit a fan or hit", 630, 180);
            text("a wall, you lose points", 620, 200);

            text("If you are stuck,", 850, 200);
            text("press R to reset", 850, 220);


            text("Tap space to flip gravity ", 800, 530);
            text("and tap the down arrow", 800, 550);
            text("to make it normal", 825, 570);

            text("Touch the trophy to go to", 20, 670);
            text("the next level and get points", 10, 690);

            player.collide(brickWall)
            player.collide(brickWall2)
            player.collide(brickWall3)
            player.collide(brickWall4)
            player.collide(brickWall5)
            player.collide(brickPlatform)
            player.collide(brickEnd)

            if(player.isTouching(fan1) || player.isTouching(fan2)){
                console.log("reset");
                player.x = 75;
                player.y = 100
                player.velocityY = 0;
                gravityGameState = "normal";
                score=score-1;
            }
            if(player.isTouching(flag)){
                level = 12;
                score = score + 15
                brickWall.lifetime = 1;
                brickEnd.lifetime = 1;
                brickWall5.lifetime = 1;
                brickPlatform.lifetime = 1;
                brickWall2.lifetime = 1;
                brickWall3.lifetime = 1;
                brickWall4.lifetime = 1;
                apple.lifetime = 1;
                kiwi.lifetime = 1;
                orange.lifetime = 1;
                cherries.lifetime = 1;
                strawberry.lifetime = 1;
                apple_d.lifetime = 1;
                kiwi_d.lifetime = 1;
                orange_d.lifetime = 1;
                cherries_d.lifetime = 1;
                strawberry_d.lifetime = 1;
                flag.lifetime = 1;
                fan1.lifetime = 1;
                fan2.lifetime = 1;

            }
            }

            if(level === 12){
                brickWall6 = createSprite(90,300,50,50);
                brickWall6.scale = 4;
                brickWall6.addImage(brickWallImage)
                player.x = 75;
                player.y = 100
                player.velocityY = 0;
                gravityGameState = "normal";

                level=2
            }
            if(level === 2){
                player.collide(brickWall6)
            }

            if(gravityGameState === "normal"){
                player.mirrorY(1)
            if(keyDown("up") || touches < 0){
                player.velocityY = -12
                touches.length  = []
            }
            player.velocityY += 0.6;
            }
            if(gravityGameState === "flipped"){
                player.mirrorY(-1)
            if(keyDown("up") || touches < 0){
                player.velocityY = 12;
                touches.length = []
            }
            player.velocityY -= 0.6
            }
        
            
            if(player.isTouching(apple)){
                score ++
                apple.destroy()
            }

            
            if(player.isTouching(kiwi)){
                score ++
                kiwi.destroy()
            }
            
            if(player.isTouching(orange)){
                score ++
                orange.destroy()
            }

            
            if(player.isTouching(cherries)){
                score ++
                cherries.destroy()
            }
            if(player.isTouching(strawberry)){
                score ++
                strawberry.destroy()
            }

            if(player.isTouching(apple_d)){
                score ++
                apple_d.destroy()
            }

            
            if(player.isTouching(kiwi_d)){
                score ++
                kiwi_d.destroy()
            }
            
            if(player.isTouching(orange_d)){
                score ++
                orange_d.destroy()
            }

            
            if(player.isTouching(cherries_d)){
                score ++
                cherries_d.destroy()
            }
            if(player.isTouching(strawberry_d)){
                score ++
                strawberry_d.destroy()
            }

    }


        
    function keyPressed(){
        if(keyCode === 32){
            gravityGameState = "flipped";
        }
        else if(keyCode === DOWN_ARROW){
            gravityGameState = "normal";
        }
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
