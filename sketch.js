var player;
var default_ , default_img1, default_img2;
var mario, mario_img1, mario_img2;
var megaman, megaman_img1, megaman_img2;
var sonic, sonic_img1, sonic_img2;
var samus, samus_img1, samus_img2;
var bg, bg_img;
var reset, reset_img;
var pause, pause_img;
var play, play_img;
var menu, menu_img;
var character, character_img;
var tri, obstacle1;
var wood1, obstacle2;
var wood2, obstacle3;
var tnt, obstacle4;
var ground;
var obstaclesGroup
var gameState = "intro";
var score = 0;
var count = 3;
var x = 20;
var velocity_x = -4;
var costume;

function preload(){
  default_img1 = loadImage("Images/default.png");
  default_img2 = loadImage("Images/default2.png");

  sonic_img1 = loadImage("Images/sonic.jpeg");
  sonic_img2 = loadImage("Images/sonic2.jpeg");

  mario_img1 = loadImage("Images/mario.png");
  mario_img2 = loadImage("Images/mario2.png");

  megaman_img1 = loadImage("Images/megaman.png");
  megaman_img2 = loadImage("Images/megaman2.png");

  samus_img1 = loadImage("Images/samus.png");
  samus_img2 = loadImage("Images/samus2.png");

  bg_img = loadImage("Images/bg.jpg");

  obstacle1 = loadImage("Images/obstacle1.png");
  obstacle2 = loadImage("Images/obstacle2.png");
  obstacle3 = loadImage("Images/obstacle3.png");
  //obstacle4 = loadImage("Images/obstacle6.png");

  reset_img = loadImage("Images/reset.png");
  pause_img = loadImage("Images/pause.jpg");
  play_img = loadImage("Images/play.png");
  menu_img = loadImage("Images/menu.png");
  character_img = loadImage("Images/character.png");
}
function setup(){
  var canvas = createCanvas(800,400);
    
  ground = createSprite(400,400,800,50);
  ground.shapeColor = "green";
  ground.visible = false;

  player = createSprite(250,300,5,5);
  player.visible = false;

  default_ = createSprite(400,50,5,5);
  default_.addImage("default", default_img1);
  default_.scale = 0.2;
  default_.visible = false;

  mario = createSprite(250,150,5,5);
  mario.addImage("mario", mario_img1);
  mario.scale = 0.2;
  mario.visible = false;

  megaman = createSprite(300,300,5,5);
  megaman.addImage("megaman", megaman_img1);
  megaman.scale = 0.2;
  megaman.visible = false;

  sonic = createSprite(550,150,5,5);
  sonic.addImage("sonic", sonic_img1);
  sonic.scale = 0.2;
  sonic.visible = false;

  samus = createSprite(500,300,5,5);
  samus.addImage("samus", samus_img1);
  samus.scale = 0.2;
  samus.visible = false;

  pause = createSprite(775, 30, 5, 5);
  pause.addImage("pause", pause_img);
  pause.scale = 0.05;
  pause.visible = false;

  reset = createSprite(400,300,50,50);
  reset.addImage("reset", reset_img);
  reset.scale = 0.5;
  reset.visible = false;

  character = createSprite(400,180,50,50);
  character.addImage("character", character_img);
  character.scale = 0.3;
  character.visible = false;

  play = createSprite(300,200,50,50);
  play.addImage("play", play_img);
  play.scale = 0.15;
  play.visible = false;

  menu = createSprite(500,215,50,50);
  menu.addImage("menu", menu_img);
  menu.scale = 0.19;
  menu.visible = false;
  
  obstaclesGroup = new Group();
}

function draw(){
  if(gameState === "intro"){
    background("white");

    textSize(15);
    text("Instructions :", 300, 20);
    text("The object of this game is to get the highest score by pakouring on the blocks with the player and not fall off", 60, 50);
    text("Use the left and right arrow keys to move left and right. Use the space bar to jump.", 120, 80);
    text("If you hold the space bar under an object, you'll 'hang' onto it", 140,110);
    text("Remember, the higher your score gets, the harder the game becomes", 150, 140);
    text("Your score will start increasing when you jump", 180, 170);
    text("Press 'P' or click the pause button at any time to bring up the pause menu which has these instructions", 70, 200);
    text("Press 'C' to choose your character", 230, 230);

    if(keyDown("c")){
      gameState = "cc";
    }
  }

  if(gameState === "cc"){
    background("white");

    ground.visible = false;
    player.visible = false;
    reset.visible = false;
    character.visible = false;

    default_.visible = true;
    sonic.visible = true;
    mario.visible = true;
    samus.visible = true;
    megaman.visible = true;

    textSize(15);
    text("Default", 375, 85);
    text("Mario", 230, 190);
    text("Megaman", 265, 340);
    text("Sonic", 530, 190);
    text("Samus", 475, 340);

    if(mousePressedOver(default_) || keyDown("d")){
      costume = "default";
      player.addImage("player", default_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "play";
    }

    if(mousePressedOver(mario) || keyDown("m")){
      costume = "mario";
      player.addImage("player", mario_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "play";
    }

    if(mousePressedOver(megaman) || keyDown("e")){
      costume = "megaman";
      player.addImage("player", megaman_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "play";
    }

    if(mousePressedOver(samus) || keyDown("s")){
      costume = "samus";
      player.addImage("player", samus_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "play";
    }

    if(mousePressedOver(sonic) || keyDown("o")){
      costume = "sonic";
      player.addImage("player", sonic_img1);
      player.scale = 1;
      player.scale = 0.2;
      gameState = "play";
    }
  }
    

  if(gameState === "play"){
    background(bg_img);
    textSize(15);
    text("Score : " + score,380,25);
    //console.log(Math.round(getFrameRate()/60));
  
    player.visible = true;
    ground.visible = true;
    pause.visible = true;
    obstaclesGroup.setVisibleEach(true);

    reset.visible = false;
    play.visible = false;
    menu.visible = false;
    character.visible = false;

    default_.visible = false;
    sonic.visible = false;
    mario.visible = false;
    samus.visible = false;
    megaman.visible = false;

    player.velocityY = player.velocityY + 0.7;

    if(keyDown("space")){
      player.y = player.y - 13.5;
    }

    if(keyDown("right_arrow")){
      player.x = player.x + 7;

      if(costume === "default"){
        player.addImage("player", default_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "mario"){
        player.addImage("player", mario_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "megaman"){
        player.addImage("player", megaman_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "sonic"){
        player.addImage("player", sonic_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "samus"){
        player.addImage("player", samus_img1); 
        player.scale = 1;
        player.scale = 0.2;
      }
    }

    if(keyDown("left_arrow")){
      player.x = player.x - 7;

      if(costume === "default"){
        player.addImage("player", default_img2);
        player.scale = 1; 
        player.scale = 0.2;
      }

      if(costume === "mario"){
        player.addImage("player", mario_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "megaman"){
        player.addImage("player", megaman_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "sonic"){
        player.addImage("player", sonic_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }

      if(costume === "samus"){
        player.addImage("player", samus_img2); 
        player.scale = 1;
        player.scale = 0.2;
      }
    }

    if(player.y < 300){
      score = score + Math.round(getFrameRate()/60);
      ground.y = 1000;
      player.velocityX = velocity_x;
    }

    player.collide(obstaclesGroup);
    player.collide(ground);

    spawnObstacles();
        
    if(keyDown('p') || mousePressedOver(pause)){
      gameState = "pause";
    }

    if(player.x < 0 || player.y > 400){
      gameState = "end";
    }
  }

  if(gameState === "pause"){
    background("white");
    count = 3;
    score = score;
    
    player.velocityX = 0;
    player.velocityY = 0;
   
    player.visible = false;
    ground.visible = false;
    pause.visible = false;
    play.visible = true;
    menu.visible = true;
    
    obstaclesGroup.setVisibleEach(false);
    obstaclesGroup.setLifetimeEach(false);
    obstaclesGroup.setVelocityXEach(0);
    
    textSize(17);
    text("Resume", 267, 255);
    text("Instructions", 455, 255);

    if(keyDown("i") || mousePressedOver(menu)){
      gameState = "instructions";
    }
      
    if(keyDown("r") || mousePressedOver(play)){
      gameState = "countdown";
    }
  }

  if(gameState === "countdown"){
    countdown();
  }
    
  if(gameState === "instructions"){
    background("white");

    menu.visible = false;
    play.visible = false;

    textSize(15);
    text("Instructions :", 300, 20);
    text("The object of this game is to get the highest score by pakouring on the blocks with the player and not fall off", 60, 50);
    text("Use the left and right arrow keys to move left and right. Use the space bar to jump.", 120, 80);
    text("If you hold the space bar under an object, you'll 'hang' onto it", 140,110);
    text("Remember, the higher your score gets, the harder the game becomes", 150, 140);
    text("Your score will start increasing when you jump", 180, 170);
    text("Press 'P' or click the pause button at any time to bring up the pause menu which has these instructions", 70, 200);
    text("Press 'B' to go back", 260 , 230);
      
    if(keyDown("b")){
      background("white");
      gameState = "pause";
    } 
  }

  if(gameState === "end"){
    textSize(15);
    text("Score : " + score,380,25);
    score = score;

    player.visible = false;
    pause.visible = false;

    reset.visible = true;
    character.visible = true;

    obstaclesGroup.destroyEach();
    
    if(mousePressedOver(reset) || keyDown("r")){
      restart();
    }

    if(mousePressedOver(character) || keyDown("c")){
      gameState = "cc";
    }
  }

  drawSprites();
}   

function restart(){
  gameState = "play";

  x = 20;
  score = 0;
  frameCount = 0;

  player.y = 300;
  player.x = 250;
  player.velocityX = 0;

  ground.y = 400;
  
  obstaclesGroup.setVelocityXEach(0);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown(){
  menu.visible = false;
  play.visible = false;

  player.visible = true;
  ground.visible = true;
  obstaclesGroup.setVisibleEach(true);

  textSize(100);
  background(bg_img);
  
  text(count , 400, 200);
  await sleep(1000);

  count = 2;
  await sleep(1000);

  count = 1;
  await sleep(1000);
  
  gameState = "play";

  obstaclesGroup.setLifetimeEach(210);

  if(score < 100){
    obstaclesGroup.setVelocityXEach(-4);
  }

  if(score < 200 && score > 100){
    obstaclesGroup.setVelocityXEach(-4.1);
  }

  if(score < 300 && score > 200){
    obstaclesGroup.setVelocityXEach(-4.2);
  }

  if(score < 400 && score > 300){
    obstaclesGroup.setVelocityXEach(-4.3);
  }

  if(score < 500 && score > 400){
    obstaclesGroup.setVelocityXEach(-4.4);
  }

  if(score < 600 && score > 500){
    obstaclesGroup.setVelocityXEach(-4.5);
  }

  if(score < 700 && score > 600){
    obstaclesGroup.setVelocityXEach(-4.6);
  }

  if(score < 800 && score > 700){
    obstaclesGroup.setVelocityXEach(-4.7);
  }
        
  if(score < 900 && score > 800){
    obstaclesGroup.setVelocityXEach(-4.8);
  } 
      
  if(score < 1000 && score > 900){
    obstaclesGroup.setVelocityXEach(-4.9);
  }

  if(score > 1000){
    obstaclesGroup.setVelocityXEach(-5);
  }
} 
  
function spawnObstacles() {
  if(frameCount % x === 0) {
    var obstacle = createSprite(780,random(50,300),10,40);
      
    if(score < 100){
      obstacle.velocityX = -4;
      velocity_x = -4;
      x = 20;
    }

    if(score < 200 && score > 100){
      obstacle.velocityX = -4.1;
      velocity_x = -4.1;
      x = 21;
    }

    if(score < 300 && score > 200){
      obstacle.velocityX = -4.2;
      velocity_x = -4.2;
      x = 22;
    }

    if(score < 400 && score > 300){
      obstacle.velocityX = -4.3;
      velocity_x = -4.3;
      x = 23;
    }

    if(score < 500 && score > 400){
      obstacle.velocityX = -4.4;
      velocity_x = -4.4;
      x = 24;
    }

    if(score < 600 && score > 500){
      obstacle.velocityX = -4.5;
      velocity_x = -4.5;
      x = 25;
    }

    if(score < 700 && score > 600){
      obstacle.velocityX = -4.6;
      velocity_x = -4.6;
      x = 26;
    }

    if(score < 800 && score > 700){
      obstacle.velocityX = -4.7;
      velocity_x = -4.7;
      x = 27;
    }
        
    if(score < 900 && score > 800){
      obstacle.velocityX = -4.8;
      velocity_x = -4.8;
      x = 28;
    } 
      
    if(score < 1000 && score > 900){
      obstacle.velocityX = -4.9;
      velocity_x = -4.9;
      x = 29;
    }

    if(score > 1000){
      obstacle.velocityX = -5;
      velocity_x = -5;
      x = 30;
    }
      
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
      break;
      case 2: obstacle.addImage(obstacle2);
      break;
      case 3: obstacle.addImage(obstacle3);
      break;
      //case 4: obstacle.addImage(obstacle4);
      //break;
      default: break;
    }
      
    obstacle.scale = 0.5;
    obstacle.lifetime = 210;
    obstaclesGroup.add(obstacle);
  }
}