var backgroundImage, background1, backgroundImage2, background2, backgroundImage3, background3, bgcontrol;
var backgroundImage4, background4, backgroundImage5, background5, level;
var player, playerImage;
var gravityGameState = "normal";
var gGN = 1;
var y=25;
var bg;
var score = 0;
var background1
var brickWallImage, brickWall;
var flag,flagImage,edges, fanImage;
var fan1, fan2;
var apple2, diesSound, fruitSound, flipSound, jumpSound, endSound;
var jumpV;

    
    function preload(){
        playerImage = loadAnimation("plr/1.png","plr/2.png","plr/3.png","plr/4.png","plr/5.png","plr/6.png","plr/7.png")
        backgroundImage1 = loadImage("Background/Blue1.png");
        backgroundImage2 = loadImage("Background/Gray1.png");
        backgroundImage3 = loadImage("Background/Green1.png");
        backgroundImage4 = loadImage("Background/Pink.png");
        backgroundImage5 = loadImage("Background/Yellow.png");

        brickWallImage = loadImage("Terrain/BrickWall.png")
        brickImage = loadImage("Terrain/SmallBrick.png")

        stoneWallImage = loadImage("Terrain/StoneWall.png")
        stoneImage = loadImage("Terrain/SmallStone.png")

        longCopper = loadImage("Terrain/longCopper.png")
        tallCopper = loadImage("Terrain/tallCopper.png")
        smallCopper = loadImage("Terrain/SmallCopper.png")
        copperWall = loadImage("Terrain/CopperWall.png")


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

        jumpV = 11.5;
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


        player = createSprite(75,125,50,50);
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

        bottomEdge = createSprite(width/2,height,width,20)
        bottomEdge.shapeColor = "red";
        topEdge = createSprite(width/2,0,width,20)
        topEdge.shapeColor = "red";
        leftEdge = createSprite(0,height/2,20,height)
        leftEdge.shapeColor = "red";
        rightEdge = createSprite(width,height/2,20,height)
        rightEdge.shapeColor = "red";
        
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

        if(gGN === 1){
            gravityGameState = "normal";
        }else if(gGN === -1){
            gravityGameState = "flipped";
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
    
    
        

        

        if(keyDown("R") ){
            console.log("reset");
            player.x = 75;
            player.y = 125
            player.velocityY = 0;
            gGN = 1;
            }
        
        if(score<0){
            score=0
        }

       //camera.x = player.x
        //camera.y = player.y;
    
        drawSprites();
    
        textSize(25);
        fill("black");
        text("Points : " + score,900, 20);

        //LEVELS

        if(level === 1){
            textSize(20);
            fill("green")
            text("Use the left, right, and up", 10, 150);
            text("arrow keys to move", 30, 175);

            text("Collect fruits to get points", 280, 200);

            text("If you hit a fan or a ", 635, 140);
            text("red wall you lose points", 615, 160);

            text("If you are stuck,", 850, 200);
            text("press R to reset", 850, 220);


            text("Tap space to flip gravity ", 800, 530);
            text("and tap space again to", 805, 550);
            text("make it normal again", 815, 570);

            text("Touch the trophy to go to", 20, 670);
            text("the next level and get points", 10, 690);

            if(player.isTouching(topEdge) || player.isTouching(bottomEdge) || player.isTouching(leftEdge) || player.isTouching(rightEdge) ){
                console.log("reset");
                player.x = 75;
                player.y = 125
                player.velocityY = 0;
                gGN = 1;
                score=score-1;
                }

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
                player.y = 125
                player.velocityY = 0;
                gGN = 1;
                score=score-1;

            }
            if(player.isTouching(flag)){
                level = 12;
                score = score + 15

            }
            }

            if(level === 12){
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

                jumpV=10.5;

                smallStone = createSprite(545, 260, 10, 10);
                smallStone.scale = 4
                smallStone.addImage(stoneWallImage);

                stoneWall = createSprite(70,230,50,50);
                stoneWall.scale = 3;
                stoneWall.addImage(stoneWallImage)
                stoneWall2 = createSprite(210,230,50,50);
                stoneWall2.scale = 3;
                stoneWall2.addImage(stoneWallImage)
                stoneWall3 = createSprite(350,230,50,50);
                stoneWall3.scale = 3;
                stoneWall3.addImage(stoneWallImage)
                stoneWall4 = createSprite(490,230,50,50);
                stoneWall4.scale = 3;
                stoneWall4.addImage(stoneWallImage)
                stoneWall5 = createSprite(630,230,50,50);
                stoneWall5.scale = 3;
                stoneWall5.addImage(stoneWallImage)
                stoneWall6 = createSprite(770,230,50,50);
                stoneWall6.scale = 3;
                stoneWall6.addImage(stoneWallImage)

                stoneWall7 = createSprite(340,510,50,50);
                stoneWall7.scale = 3;
                stoneWall7.addImage(stoneWallImage)
                stoneWall8 = createSprite(480,510,50,50);
                stoneWall8.scale = 3;
                stoneWall8.addImage(stoneWallImage)
                stoneWall9 = createSprite(620,510,50,50);
                stoneWall9.scale = 3;
                stoneWall9.addImage(stoneWallImage)
                stoneWall10 = createSprite(760,510,50,50);
                stoneWall10.scale = 3;
                stoneWall10.addImage(stoneWallImage)
                stoneWall11 = createSprite(900,510,50,50);
                stoneWall11.scale = 3;
                stoneWall11.addImage(stoneWallImage)
                stoneWall12 = createSprite(1040,510,50,50);
                stoneWall12.scale = 3;
                stoneWall12.addImage(stoneWallImage)

                fan3 = createSprite(350, 155, 10, 10)
                fan3.addImage("fan",fanImage)
                fan3.scale = 2;

                fan4 = createSprite(600, 155, 10, 10)
                fan4.addImage("fan",fanImage)
                fan4.scale = 2;
            
                fan5 = createSprite(600, 10, 10, 10)
                fan5.addImage("fan",fanImage)
                fan5.scale = 2;
                fan5.rotation = 180

                fan6 = createSprite(1100, 230, 10, 10)
                fan6.addImage("fan",fanImage)
                fan6.scale = 2;
                fan6.velocityX = 5;

                fan7 = createSprite(50, 510, 10, 10)
                fan7.addImage("fan",fanImage)
                fan7.scale = 2;
                fan7.velocityX = 8;

                fan8 = createSprite(500, 437, 10, 10)
                fan8.addImage("fan", fanImage)
                fan8.scale = 2;

                fan9 = createSprite(540, 437, 10, 10)
                fan9.addImage("fan", fanImage)
                fan9.scale = 2;

                fan10 = createSprite(580, 437, 10, 10)
                fan10.addImage("fan", fanImage)
                fan10.scale = 2;

                fan11 = createSprite(450, 710, 10, 10)
                fan11.addImage("fan", fanImage)
                fan11.scale = 2;

                fan12 = createSprite(570, 710, 10, 10)
                fan12.addImage("fan", fanImage)
                fan12.scale = 2;

                fan13 = createSprite(690, 710, 10, 10)
                fan13.addImage("fan", fanImage)
                fan13.scale = 2;

                fan14 = createSprite(810, 710, 10, 10)
                fan14.addImage("fan", fanImage)
                fan14.scale = 2;

                flag2 = createSprite(1000,675);
                flag2.scale = 1.25;
                flag2.addImage(flagImage);

                apple2 = createSprite(700,100,30,30);
                apple2.addAnimation("apple",AppleAnimation )
                apple2.scale = 1.5;
                kiwi2 = createSprite(700,420,30,30)
                kiwi2.addAnimation("kiwi",kiwiAnimation )
                kiwi2.scale = 1.5;
                orange2 = createSprite(300,420,30,30)
                orange2.addAnimation("orange",orangeAnimation )
                orange2.scale = 1.5;
                cherries2 = createSprite(300,700,30,30)
                cherries2.addAnimation("apple",cherryAnimation )
                cherries2.scale = 1.5;
                strawberry2 = createSprite(900,650,30,30)
                strawberry2.addAnimation("apple",strawberryAnimation)
                strawberry2.scale = 1.5;

                player.x = 75;
                player.y = 125
                player.velocityY = 0;
                gGN = 1;

                topEdge.shapeColor = "gray";
                bottomEdge.shapeColor = "gray";

                level=2

            }
            if(level === 2){
                player.collide(stoneWall)
                player.collide(stoneWall2)
                player.collide(stoneWall3)
                player.collide(stoneWall4)
                player.collide(stoneWall5)
                player.collide(stoneWall6)
                player.collide(stoneWall7)
                player.collide(stoneWall8)
                player.collide(stoneWall9)
                player.collide(stoneWall10)
                player.collide(stoneWall11)
                player.collide(stoneWall12)
                player.collide(smallStone)


                if(player.isTouching(fan3) || player.isTouching(fan4) || player.isTouching(fan5) || player.isTouching(fan6) || player.isTouching(fan7) || player.isTouching(fan8) || player.isTouching(fan8) || player.isTouching(fan9) || player.isTouching(fan10) || player.isTouching(fan11) || player.isTouching(fan12) || player.isTouching(fan13) || player.isTouching(fan14)){
                    console.log("reset");
                    player.x = 75;
                    player.y = 125
                    player.velocityY = 0;
                    gGN = 1;
                    score=score-1;

                }

                if(player.isTouching(leftEdge) || player.isTouching(rightEdge) ){
                    console.log("reset");
                    player.x = 75;
                    player.y = 125
                    player.velocityY = 0;
                    gGN = 1;
                    score=score-1;

                    }

                player.collide(topEdge)
                player.collide(bottomEdge)
                player.collide(rightEdge)
                player.collide(leftEdge)

                fan6.bounceOff(stoneWall6)
                fan6.bounceOff(rightEdge)
                fan7.bounceOff(stoneWall7)
                fan7.bounceOff(leftEdge)

                if(player.isTouching(apple2)){
                    score ++
                    apple2.destroy()
                }
    
                if(player.isTouching(kiwi2)){
                    score ++
                    kiwi2.destroy()
                }
                
                if(player.isTouching(orange2)){
                    score ++
                    orange2.destroy()

                }
                
                if(player.isTouching(cherries2)){
                    score ++
                    cherries2.destroy()

                }
                if(player.isTouching(strawberry2)){
                    score ++
                    strawberry2.destroy()

                }

                if(player.isTouching(flag2)){
                    level = 23
                    score = score + 15

                }
            }

            if(level === 23){
                smallStone.lifetime = 1;
                stoneWall.lifetime = 1;
                stoneWall2.lifetime = 1;
                stoneWall3.lifetime = 1;
                stoneWall4.lifetime = 1;
                stoneWall5.lifetime = 1;
                stoneWall6.lifetime = 1;
                stoneWall7.lifetime = 1;
                stoneWall8.lifetime = 1;
                stoneWall9.lifetime = 1;
                stoneWall10.lifetime = 1;
                stoneWall11.lifetime = 1;
                stoneWall12.lifetime = 1;
                fan3.lifetime = 1;
                fan4.lifetime = 1;
                fan5.lifetime = 1;
                fan6.lifetime = 1;
                fan7.lifetime = 1;
                fan8.lifetime = 1;
                fan9.lifetime = 1;
                fan10.lifetime = 1;
                fan11.lifetime = 1;
                fan12.lifetime = 1;
                fan13.lifetime = 1;
                fan14.lifetime = 1;
                flag2.lifetime = 1;
                apple2.lifetime = 1;
                kiwi2.lifetime = 1;
                orange2.lifetime = 1;
                cherries2.lifetime = 1;
                strawberry2.lifetime = 1;

                tallCopper1 = createSprite(250,200,50,50);
                tallCopper1.scale = 3;
                tallCopper1.addImage(tallCopper)
                tallCopper2 = createSprite(250,350,50,50);
                tallCopper2.scale = 3;
                tallCopper2.addImage(tallCopper)
                tallCopper3 = createSprite(250,500,50,50);
                tallCopper3.scale = 3;
                tallCopper3.addImage(tallCopper)
                tallCopper4 = createSprite(250,650,50,50);
                tallCopper4.scale = 3;
                tallCopper4.addImage(tallCopper)

                jumpV=9.5
                player.x = 75;
                player.y = 125
                player.velocityY = 0;
                gGN = 1;

                level = 3;
            }

            if(level === 3){
                if(player.isTouching(leftEdge) || player.isTouching(rightEdge)){
                    player.x = 75;
                    player.y = 125
                    player.velocityY = 0;
                    gGN = 1;
                    score=score-1;

                }
                player.collide(topEdge);
                player.collide(bottomEdge);

            }


            if(gravityGameState === "normal"){
                player.mirrorY(1)
            if(keyDown("up") || touches < 0){
                player.velocityY = -jumpV;
                touches.length  = []
            }
            player.velocityY += 0.6;
            }
            if(gravityGameState === "flipped"){
                player.mirrorY(-1)
            if(keyDown("up") || touches < 0){
                player.velocityY = jumpV;
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
            gGN = gGN * -1;
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
