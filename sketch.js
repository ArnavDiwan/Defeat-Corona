var vir, virImg;
var back, BackImg;
var Lockdown, covid, Group;
var LockdownImg, CovidImg, groupImg;
var Lockdown1, covid1, Group1;
var Sanitizer, mask, vitaminC;
var SanitizerImg, maskImg, vitaminCImg;
var MvirImg;
var Invi, Invi2, Invi3, Invi4;
var house, houseImg;
var house1;
var Imun = 100;
var feedB;
var gameMode = 0;
var vir0;
var gameOver, gameOverImg;
var Finish, FinishImg
var Code, CodeImg;
var obj1, obj2;
var gameState = 0;

var Lockdown2, covid2, Group2;
var Lockdown3, covid3, Group3;
var Sanitizer1, mask1, vitaminC1;
var house2, houseImg;
var house3;
var Finish1;
var Code1;
var obj3, obj4;
var object, objectImg;

var security, system;
var code;
var backImg2;
var stopper;
var press, pressImg;
var press2, press2Img;

var Lockdown4, covid4, Group4;
var Lockdown5, covid5, Group5;
var Sanitizer3, mask2, vitaminC1;
var house4;
var house5;
var alpha, beta, gamma, delta;
var alphaImg, betaImg, gammaImg, deltaImg;
var Invi5, Invi6;
var hospital, hospitalImg;
var vaccine, vaccineImg;
var Shoot, Vaccinated;
var shootImg, vaccinatedImg;
var BackImg3;
var level3;
var lol;
var Lv1, Lv2, Lv3, Lv4, Lv5, Lv6, Lv7, Lv8, Lv9, Lv10;
var boss, boss2, boss3, boss4, boss5, boss6, boss7, boss8, boss9, boss10;
var bossImg1, bossImg2, bossImg3, bossImg4, bossImg5, bossImg6, bossImg7, bossImg8, bossImg9, bossImg10;
var bg4;
var yoyo;
var hash;
var arrow, arrowImg;
var school, schoolImg;
var thx, thxImg
var point, fail;
var yes;
var win, winImg;
var start, startImg;
var end, endImg;
var end1, end1Img;

function preload(){
  
  BackImg=loadImage("bg.png");
  MvirImg=loadAnimation("MVir/MVir1.png","MVir/MVir2.png","MVir/MVir3.png","MVir/MVir4.png","MVir/MVir5.png","MVir/MVir6.png","MVir/MVir7.png","MVir/MVir8.png");
  virImg=loadAnimation("Vir/VIR1.png","Vir/VIR2.png","Vir/VIR3.png","Vir/VIR4.png","Vir/VIR5.png","Vir/VIR6.png","Vir/VIR7.png","Vir/VIR8.png");
  LockdownImg=loadImage("Enemy/Lockdown.png");
  CovidImg=loadImage("Enemy/Covid.png");
  groupImg=loadImage("Enemy/Group.png");
  houseImg=loadImage("Help/house.png");
  maskImg=loadImage("Help/Mask.png");
  SanitizerImg=loadImage("Help/Sanitizer.png");
  vir0=loadImage("Vir/VIR3.png");
  gameOverImg=loadAnimation("GameOver/red.png", "GameOver/yellow.png", "GameOver/white.png", "GameOver/blue.png")
  FinishImg=loadImage("Finish.png")
  CodeImg=loadAnimation("GameOver/blue1.png", "GameOver/red1.png", "GameOver/white1.png", "GameOver/yellow1.png");
  backImg2=loadImage("bg2.png");
  pressImg=loadImage("Press.png");
  press2Img=loadImage("Press2.png");
  vitaminCImg=loadImage("Help/Vitamin C.png");
  alphaImg=loadImage("alpha.png");
  betaImg = loadImage("beta.png");
  gammaImg = loadImage("gamma.png");
  deltaImg = loadImage("delta.png");
  hospitalImg=loadImage("hospital.png");
  vaccineImg = loadImage("Vaccine.png");
  shootImg = loadImage("Shoot.png");
  vaccinatedImg = loadImage("Vaccinated.png");
  BackImg3=loadImage("bg3.png");

  bossImg1 = loadImage("Lv/100.png");
  bossImg2 = loadImage("Lv/200.png");
  bossImg3 = loadImage("Lv/300.png");
  bossImg4 = loadImage("Lv/400.png");
  bossImg5 = loadImage("Lv/500.png");
  bossImg6 = loadImage("Lv/600.png");
  bossImg7 = loadImage("Lv/700.png");
  bossImg8 = loadImage("Lv/800.png");
  bossImg9 = loadImage("Lv/900.png");
  bossImg10 = loadImage("Lv/1000.png");
  bg4 = loadImage("bg4.png")
  arrowImg = loadImage("arrow.png");
  schoolImg = loadImage("school.png");
  thxImg = loadImage("Thx.png");
  point = loadSound("pluspoint.wav");
  fail = loadSound("fail.mp3");
  winImg = loadImage("WIN.png");
  startImg = loadImage("start.png");
  endImg = loadImage("code3.png");
  end1Img = loadImage("code4.png");
  objectImg = loadImage("Defeat.png");
}

function setup() {
  createCanvas(1700,750);
  
  back=createSprite(displayWidth*2.5, 750/2, 10000, 750)
  back.addImage("back", BackImg);
  back.velocityX = 0;

  vir=createSprite(120, 607, 30, 30);
  vir.addAnimation("vir",virImg);

  invi=createSprite(640,225,displayWidth,10);
  invi.visible = false;

  invi2=createSprite(28,745, displayWidth, 10);
  invi2.visible = false;

  invi3=createSprite(350, 577, 10, 350);
  invi3.visible = false;

  invi4=createSprite(40, 577, 10, 350);
  invi4.visible = false;

  Group=createSprite(1916,375,10,10);
  Group.addImage("group of people",groupImg);
  Group.scale = 0.5
 
  covid=createSprite(1060, 550, 20, 20);
  covid.addImage("Covid", CovidImg);
  covid.scale = 0.4;  
  
  Lockdown=createSprite(4000,450,10,10);
  Lockdown.addImage("Lockdown",LockdownImg);
 
  Lockdown1=createSprite(7000, 450, 10, 10);
  Lockdown1.addImage("Lockdown",LockdownImg)
 
  house=createSprite(3500, 300, 10, 10);
  house.addImage("house", houseImg);
 
  house1=createSprite(6500, 300, 10, 10);
  house1.addImage("house", houseImg);
 
  mask=createSprite(3000, 600, 10, 10);
  mask.addImage("mask", maskImg);

  Group1=createSprite(4700, 550, 20, 20);
  Group1.addImage("group", groupImg);
  Group1.scale = 0.5

  Sanitizer=createSprite(5300, 490, 20, 20);
  Sanitizer.addImage("San", SanitizerImg);

  covid1=createSprite(6000, 600, 20, 20);
  covid1.addImage("Covid", CovidImg);
  covid1.scale = 0.4;

  Finish = createSprite(8000, 550, 20, 20);
  Finish.addImage("Finish", FinishImg);
  Finish.scale = 1.5

  gameOver=createSprite(850, 375, displayWidth, displayHeight);
  gameOver.addAnimation("game", gameOverImg);
  gameOver.visible = false;

  Code=createSprite(850, 375, displayWidth, displayHeight);
  Code.addAnimation("Code", CodeImg)
  Code.visible = false;
  Code.scale = 0.75
  

  feedB=createSprite(1562, 70, 120, 10);

  

  obj1 = createSprite(100, 100, 20, 20);
  obj1.visible = false;
  obj2 = createSprite(200, 100, 10, 10);
  obj2.visible = false;

    Group2=createSprite(1060,375,10,10);
    Group2.addImage("group of people",groupImg);
    Group2.scale = 0.5
    Group2.velocityX=0;
    Group2.visible=false;

    covid2=createSprite(4000, 550, 20, 20);
    covid2.addImage("Covid", CovidImg);
    covid2.scale = 0.4;  
    covid2.velocityX=0;
    covid2.visible = false;

    Lockdown2=createSprite(6300,450,10,10);
    Lockdown2.addImage("Lockdown",LockdownImg);
    Lockdown2.velocityX=0;
    Lockdown2.visible = false;

    Lockdown3=createSprite(5000, 450, 10, 10);
    Lockdown3.addImage("Lockdown",LockdownImg)
    Lockdown3.velocityX=0;
    Lockdown3.visible = false;
  
    house2=createSprite(5800, 300, 10, 10);
    house2.addImage("house", houseImg);
    house2.velocityX=0;
    house2.visible = false;
  
    house3=createSprite(4500, 300, 10, 10);
    house3.addImage("house", houseImg);
    house3.velocityX=0;
    house3.visible = false;
  
    mask1=createSprite(3000, 600, 10, 10);
    mask1.addImage("mask", maskImg);
    mask1.velocityX=0;
    mask1.visible = false;

    Group3=createSprite(7000, 550, 20, 20);
    Group3.addImage("group of people", groupImg);
    Group3.scale = 0.5
    Group3.velocityX=0;
    Group3.visible = false;
  
    Sanitizer1=createSprite(5300, 490, 20, 20);
    Sanitizer1.addImage("San", SanitizerImg);
    Sanitizer1.velocityX = 0;
    Sanitizer1.visible = false;

    covid3=createSprite(1916, 600, 20, 20);
    covid3.addImage("Covid", CovidImg);
    covid3.scale = 0.4;
    covid3.velocityX=0;
    covid3.visible = false
  
    Code1=createSprite(850, 375, displayWidth, displayHeight);
    Code1.addAnimation("Code", CodeImg)
    Code1.visible = false;
    Code1.scale = 0.75
  
    Finish1 = createSprite(8000, 550, 20, 20);
    Finish1.addImage("Finish", FinishImg);
    Finish1.velocityX = 0;
    Finish1.scale = 1.5;

    Finish1.debug = true;

    obj3 = createSprite(100, 100, 20, 20);
    obj3.visible = false;
    obj4 = createSprite(200, 100, 10, 10);
    obj4.visible = false;

    security = new Security();
    system = new System();

    stopper = createSprite(200, 700, 20, 700);
    
    press = createSprite(1000, 200, 20, 20);
    press.addImage("press", pressImg);
    
    press2 = createSprite(1000, 500, 20, 20);
    press2.addImage("press2", press2Img);
    press2.visible = false;
    
  Group4=createSprite(4000,550,10,10);
  Group4.addImage("group of people",groupImg);
  Group4.scale = 0.5
  Group4.velocityX=0;
  Group4.visible = false;

  Group4.setCollider("rectangle", 0, 0, 500, 390)

  covid4=createSprite(6300, 450, 20, 20);
  covid4.addImage("Covid", CovidImg);
  covid4.scale = 0.4;  
  covid4.velocityX=0;
  covid4.visible = false;

  covid4.setCollider("circle", 0, 0, 200)

  Lockdown4=createSprite(1560,450,10,10);
  Lockdown4.addImage("Lockdown",LockdownImg);
  Lockdown4.velocityX=0;
  Lockdown4.visible = false;
 
  Lockdown5=createSprite(7500, 450, 10, 10);
  Lockdown5.addImage("Lockdown",LockdownImg)
  Lockdown5.velocityX=0;
  Lockdown5.visible = false;

  house4=createSprite(1060, 300, 10, 10);
  house4.addImage("house", houseImg);
  house4.velocityX=0;
  house4.visible = false;

  house5=createSprite(7000, 300, 10, 10);
  house5.addImage("house", houseImg);
  house5.velocityX=0;

  mask2=createSprite(1916, 600, 10, 10);
  mask2.addImage("mask", maskImg);
  mask2.velocityX=0;
  mask2.visible = false;

  Group5=createSprite(3000, 650, 20, 20);
  Group5.addImage("group", groupImg);
  Group5.scale = 0.5
  Group5.velocityX=0;
  Group5.visible = false;

  Group5.setCollider("rectangle", 0, 0, 500, 300)

  Sanitizer3=createSprite(5000, 490, 20, 20);
  Sanitizer3.addImage("San", SanitizerImg);
  Sanitizer3.velocityX = 0;
  Sanitizer3.visible = false;

  covid5=createSprite(5300, 600, 20, 20);
  covid5.addImage("Covid", CovidImg);
  covid5.scale = 0.4;
  covid5.velocityX=0;
  covid5.visible = false;

  vitaminC1 = createSprite(6800, 550, 10, 20);
  vitaminC1.addImage("vitamin", vitaminCImg);
  vitaminC1.velocityX = 0;
  vitaminC1.visible = false;
 
  Invi5 = createSprite(200, 225, 5000000000, 20);
  Invi5.visible = false;
  Invi6 = createSprite(200, 745, 5000000000, 20);
  Invi6.visible = false;
 
  alpha = createSprite(8500, 545, 20, 20);
  alpha.addImage("alpha", alphaImg);
  alpha.velocityX = 0
  alpha.velocityY = 7;
  alpha.visible = false;
 
  beta = createSprite(8700, 245, 20, 20);
  beta.addImage("beta", betaImg);
  beta.velocityX = 0;
  beta.velocityY = -7;
  beta.visible = false;
 
  gamma = createSprite(8900, 545, 20, 20);
  gamma.addImage("gam", gammaImg);
  gamma.velocityX = 0
  gamma.velocityY = 7;
  gamma.visible = false;
 
  delta = createSprite(9100, 245, 20, 20);
  delta.addImage("dle", deltaImg);
  delta.velocityX = 0;
  delta.velocityY = -7;
  delta.visible = false;
 
  hospital=createSprite(9800, 350, 20, 20);
  hospital.addImage("hos", hospitalImg);
  hospital.velocityX = 0;
  hospital.visible = false;
 
  vaccine = createSprite(200, -200, 20, 20);
 
  vaccine.visible = false;
  vaccine.addImage("vac", vaccineImg);

  vaccine.setCollider("rectangle", 0, 0, 350, 50);
  Shoot = createSprite(200, 150, 20, 20);
  Shoot.x = alpha.x;
  Shoot.velocityX = 0;
  Shoot.addImage("shoot", shootImg);
  Shoot.visible = false;
 
  Vaccinated = createSprite(10500, 150, 20, 20);

  Vaccinated.velocityX = 0;
  Vaccinated.addImage("vaccinated", vaccinatedImg);
  Vaccinated.visible = false;

  lol = createSprite(200, 200, 20, 20);
  lol.visible = false;
  lol.x = vir.x;
  lol.y = vir.y;

  Lv1 = createSprite(1000, 500, 20, 20);
  Lv1.addImage("Lv", CovidImg);
  Lv1.scale = 0.4;
  Lv1.visible = false;
  Lv2 = createSprite(1200, 700, 20, 20);
  Lv2.addImage("Lv", CovidImg);
  Lv2.scale = 0.4;
  Lv2.visible = false;
  Lv3 = createSprite(1400, 560, 20, 20);
  Lv3.addImage("Lv", CovidImg);
  Lv3.scale = 0.4;
  Lv3.visible = false;
  Lv4 = createSprite(1600, 475, 20, 20);
  Lv4.addImage("Lv", CovidImg);
  Lv4.scale = 0.4;
  Lv4.visible = false;
  Lv5 = createSprite(1800, 500, 20, 20);
  Lv5.addImage("Lv", CovidImg);
  Lv5.scale = 0.4;
  Lv5.visible = false;
  Lv6 = createSprite(2000, 650, 20, 20);
  Lv6.addImage("Lv", CovidImg);
  Lv6.scale = 0.4;
  Lv6.visible = false;
  Lv7 = createSprite(2200, 475, 20, 20);
  Lv7.addImage("Lv", CovidImg);
  Lv7.scale = 0.4;
  Lv7.visible = false;
  Lv8 = createSprite(2400, 700, 20, 20);
  Lv8.addImage("Lv", CovidImg);
  Lv8.scale = 0.4;
  Lv8.visible = false;
  Lv9 = createSprite(2600, 500, 20, 20);
  Lv9.addImage("Lv", CovidImg);
  Lv9.scale = 0.4;
  Lv9.visible = false;
  Lv10 = createSprite(2800, 650, 20, 20);
  Lv10.addImage("Lv", CovidImg)
  Lv10.scale = 0.4;
  Lv10.visible = false;

  boss = createSprite(8000, 400, 20, 20);
  boss.addImage("boss", bossImg1);
  boss.scale = 3;
  boss.visible = false;
  boss.setCollider("circle", 0, 0, 50)
  boss2 = createSprite(-2000, 650, 20, 20);
  boss2.addImage("boss", bossImg2);
  boss2.scale = 3;
  boss2.visible = false;
  boss2.setCollider("circle", 0, 0, 50)
  boss3 = createSprite(-2000, 650, 20, 20);
  boss3.addImage("boss", bossImg3);
  boss3.scale = 3;
  boss3.visible = false;
  boss3.setCollider("circle", 0, 0, 50)
  boss4 = createSprite(-2000, 650, 20, 20);
  boss4.addImage("boss", bossImg4);
  boss4.scale = 3;
  boss4.visible = false;
  boss4.setCollider("circle", 0, 0, 50)
  boss5 = createSprite(-2000, 650, 20, 20);
  boss5.addImage("boss", bossImg5);
  boss5.scale = 3;
  boss5.visible = false;
  boss5.setCollider("circle", 0, 0, 50)
  boss6 = createSprite(-2000, 650, 20, 20);
  boss6.addImage("boss", bossImg6);
  boss6.scale = 3;
  boss6.visible = false;
  boss6.setCollider("circle", 0, 0, 50)
  boss7 = createSprite(-2000, 650, 20, 20);
  boss7.addImage("boss", bossImg7);
  boss7.scale = 3;
  boss7.visible = false;
  boss7.setCollider("circle", 0, 0, 50)
  boss8 = createSprite(-2000, 650, 20, 20);
  boss8.addImage("boss", bossImg8);
  boss8.scale = 3;
  boss8.visible = false;
  boss8.setCollider("circle", 0, 0, 50)
  boss9 = createSprite(-2000, 650, 20, 20);
  boss9.addImage("boss", bossImg9);
  boss9.scale = 3;
  boss9.visible = false;
  boss9.setCollider("circle", 0, 0, 50)
  boss10 = createSprite(-2000, 650, 20, 20);
  boss10.addImage("boss", bossImg10);
  boss10.scale = 3;
  boss10.visible = false;
  boss10.setCollider("circle", 0, 0, 50);

  yoyo = createSprite(4000, 200, 20, 50000);
  yoyo.visible = false;

  hash = createSprite(4000, 200, 20, 20000);

  arrow = createSprite(5000, 100, 20, 20);
  arrow.addImage("arrow", arrowImg);
  arrow.visible = false;

  school = createSprite(9000, 500, 20, 20);
  school.visible = false;
  school.addImage("school", schoolImg);

  thx = createSprite(displayWidth/2 + 230, displayHeight/2, 20, 20);
  thx.addImage("thx", thxImg);
  thx.visible = false;
  thx.scale = 0.9;

  object = createSprite(850, 400, 5000, 5000);
  object.addImage("object", objectImg);
    object.visible = false;
    object.shapeColor = ("red");
    object.scale = 0.8;

    yes = createSprite(200, -100, 20, 20);

    win = createSprite(100, 200, 20, 30);
    win.addImage("win", winImg);
    win.visible = false;

    start = createSprite(3000, 200, 20, 20);
    start.addImage("start", startImg);
    start.visible = false;

    end = createSprite(100, 200, 20, 20);
    end.addImage("end", endImg);
    end.visible = false;

    end1 = createSprite(100, 200, 20, 20);
    end1.addImage("end", end1Img);
    end1.visible = false;

}

function draw() {

  background(0, 0, 0); 
  
  Group3.depth = Code1.depth + 1;

  if(keyDown(UP_ARROW)){
    vir.y = vir.y-10;
  }

  if(keyDown(DOWN_ARROW)){
    vir.y = vir.y+10;
  }

  if(keyDown(RIGHT_ARROW)){
    vir.x = vir.x+10
  }

  if(keyDown(LEFT_ARROW)){
    vir.x = vir.x-10;
  }

  if(Imun >= 70){
    feedB.shapeColor = ("Green");
  }

  if(Imun >= 30 && Imun < 70){
    feedB.shapeColor = ("yellow");
  }

  if(Imun < 30){
    feedB.shapeColor = ("red");
  }
  if(gameState === 0){
    object.visible = true;
    stopper.visible = false;
    press.visible = false;
  }
  if(gameState === 10){
    stopper.visible = true;
    press.visible = true;

  if(covid.isTouching(vir)||Lockdown.visible === false||Lockdown1.visible === false||Group1.visible === false||covid1.isTouching(vir)){
    gameMode = 0;
    vir.addAnimation("vir", virImg);
  }

  if(vir.isTouching(Finish)){
    vir.addImage("vir", vir0);
    back.velocityX = 0;
    gameMode = 0;
  }

  if (keyDown('space')){
     press.velocityX = -3;
      back.velocityX = -3;
      covid.velocityX = -3;
      covid1.velocityX = -3;
      Sanitizer.velocityX = -3;
      house.velocityX = -3;
      house1.velocityX = -3;
      Lockdown.velocityX = -3;
      Lockdown1.velocityX = -3;
      Group1.velocityX = -3;
      Group.velocityX = -3;
      mask.velocityX = -3
      Finish.velocityX = -3;
      stopper.x = -300;
  }

  if(Code.visible === true){
    obj1.velocityX = 3;
  }

  if(obj1.isTouching(obj2)){
    obj1.velocityX = 0;
    Code.visible = false;
  }
  

  if(gameMode === 0){

    if(covid.isTouching(vir)){
      Imun = Imun - 30
      covid.visible = false;
      covid.y = 10;
      fail.play();
    }

    if(covid1.isTouching(vir)){
      Imun = Imun - 30
      covid1.visible = false;
      covid1.y = 10;
      fail.play();
    }

    if(Imun <= 0){
      back.velocityX = 0;
      covid.velocityX = 0;
      covid1.velocityX = 0;
      Sanitizer.velocityX = 0;
      house.velocityX = 0;
      Lockdown.velocityX = 0;
      Group1.velocityX = 0;
      Group.velocityX = 0;
      vir.addImage("vir", vir0);
      gameOver.visible = true;
    }

    if(house.isTouching(vir)){
      house.visible = false;
      Lockdown.y = -10000;
      point.play();
    }

    if(house1.isTouching(vir)){
      house1.visible = false;
      Lockdown1.y = -10000
      point.play();
    }

    if(Group.isTouching(vir)){
      Imun = Imun - 20
      Group.visible = false;
      Group.y = 10;
      fail.play();
    }

    if(Group1.isTouching(vir)){
      Imun = Imun - 30
      Group1.visible = false;
      Group1.y = -1000;
      fail.play();
    }
    if(Lockdown.isTouching(vir)){
      Imun = Imun - 40;
      Lockdown.visible = false;
      Lockdown.y = -10000;
      fail.play();
    }

    if(Lockdown1.isTouching(vir)){
      Imun = Imun - 40;
      Lockdown1.visible = false;
      Lockdown1.y = -10000;
      fail.play();
    }

    if(Lockdown.y === -10000){
      Lockdown.visible = true;
    }

    if(Lockdown1.y === -10000){
      Lockdown1.visible = true;
    }

    if(Sanitizer.isTouching(vir)){
      Imun = Imun + 20;
      Sanitizer.visible = false;
      Sanitizer.y = -5;
      point.play();
    }

    if(Group1.y === -1000){
      Group1.visible = true;
    }

    if(Finish.isTouching(vir)){
      gameMode = 0
      gameState = 20;
      Finish.x = -300;
      obj1.velocityX = 5;
      Imun = 100;
    }

}
  
  if(vir.isTouching(mask)){
    vir.addAnimation("vir", MvirImg);
    mask.visible = false;
    mask.y = 10;
    gameMode = 1;
    point.play();
  }
  
  if(gameMode === 1){
    
    if(covid.isTouching(vir)){
      Imun = Imun - 20
      covid.visible = false;
      covid.y = 10;
      vir.addAnimation("vir", virImg);
      fail.play();
    }

    if(Imun <= 0){
      back.velocityX = 0;
      covid.velocityX = 0;
      covid1.velocityX = 0;
      Sanitizer.velocityX = 0;
      house.velocityX = 0;
      Lockdown.velocityX = 0;
      Group1.velocityX = 0;
      Group.velocityX = 0;
      vir.addImage("vir", vir0);
      gameOver.visible = true;
    }

    if(house.isTouching(vir)){
      house.visible = false;
      Lockdown.y = -10000;
      point.play();
    }

    if(house1.isTouching(vir)){
      house1.visible = false;
      Lockdown1.y = -10000;
      point.play();
    }

    if(Group.isTouching(vir)){
      Imun = Imun - 10
      Group.visible = false;
      Group.y = 10;
      vir.addAnimation("vir", virImg);
      fail.play();
    }

    if(Group1.isTouching(vir)){
      Imun = Imun - 10
      Group1.visible = false;
      Group1.y = -1000;
      vir.addAnimation("vir", virImg);
      fail.play();
    }

    if(Lockdown.isTouching(vir)){
      Imun = Imun - 30;
      Lockdown.visible = false;
      Lockdown.y = -10000
      vir.addAnimation("vir", virImg);
      fail.play();
    }

    if(Lockdown1.isTouching(vir)){
      Imun = Imun - 30;
      Lockdown1.visible = false;
      Lockdown1.y = -10000
      vir.addAnimation("vir", virImg);
      fail.play();
    }
  }
  
  }

  if(gameState === 20){

    press2.visible = true
    Group2.visible = true
    covid2.visible = true
    Lockdown2.visible = true
    Lockdown3.visible = true
    house2.visible = true
    house3.visible = true
    mask1.visible = true
    Group3.visible = true
    Sanitizer1.visible = true
    covid3.visible = true

    Group2.velocityX = -7;
    covid2.velocityX = -7;
    Lockdown2.velocityX = -7;
    Lockdown3.velocityX = -7;
    house2.velocityX = -7;
    house3.velocityX = -7;
    mask1.velocityX = -7;
    Group3.velocityX = -7;
    Sanitizer1.velocityX = -7;
    covid3.velocityX = -7;
    Finish1.velocityX = -7;
    back.velocityX = -7;

    if(mask1.velocityX === -7){
      press2.velocityX = -4;
      stopper.x = -30
    }


    back.addImage("back", backImg2);
    Group.visible = false;
    covid.visible = false;
    Lockdown.visible = false;
    Lockdown1.visible = false;
    house.visible = false;
    house1.visible = false;
    mask.visible = false;
    Group1.visible = false;
    Sanitizer.visible = false;
    covid1.visible = false;
    Finish.visible = false;

  if(covid2.isTouching(vir)||Lockdown2.visible === false||Lockdown3.visible === false||Group2.visible === false||Group3.visible === false||covid3.isTouching(vir)){
      gameMode = 0;
      vir.addAnimation("vir", virImg);
    }
  
    if (keyDown('space')){
      Group2.velocityX = -7;
      covid2.velocityX = -7;
      Lockdown2.velocityX = -7;
      Lockdown3.velocityX = -7;
      house2.velocityX = -7;
      house3.velocityX = -7;
      mask1.velocityX = -7;
      Group3.velocityX = -7;
      Sanitizer1.velocityX = -7;
      covid3.velocityX = -7;
      Finish1.velocityX = -7;
      back.velocityX = -7;
    }
  
    if(Code1.visible === true){
      obj1.velocityX = 3;
    }
  
    if(obj1.isTouching(obj2)){
      obj1.velocityX = 0;
      Code.visible = false;
  
      Group2.velocityX = -7;
    covid2.velocityX = -7;
    Lockdown2.velocityX = -7;
    Lockdown3.velocityX = -7;
    house2.velocityX = -7;
    house3.velocityX = -7;
    mask1.velocityX = -7;
    Group3.velocityX = -7;
    Sanitizer1.velocityX = -7;
    covid3.velocityX = -7;
    Finish1.velocityX = -7;
        Finish1.visible = false;
        Finish1.y = -100

        vir.addAnimation("vir", virImg);
        obj1.y = -200;
    }
    
  
    if(gameMode === 0){
  
      if(covid2.isTouching(vir)){
        Imun = Imun - 30
        covid2.visible = false;
        covid2.y = -100;
        fail.play();
      }
  
      if(covid3.isTouching(vir)){
        Imun = Imun - 30
        covid3.visible = false;
        covid3.y = -100;
        fail.play();
      }
  
      if(Imun <= 0){
        back.velocityX = 0;
        covid2.velocityX = 0;
        covid3.velocityX = 0;
        Sanitizer1.velocityX = 0;
        house2.velocityX = 0;
        Lockdown2.velocityX = 0;
        Lockdown3.velocityX = 0;
        Group3.velocityX = 0;
        Group2.velocityX = 0;
        vir.addImage("vir", vir0);
        gameOver.visible = true;
      }
  
      if(house2.isTouching(vir)){
        house2.visible = false;
        Lockdown2.y = -10000;
        point.play();
      }
  
      if(house3.isTouching(vir)){
        house3.visible = false;
        Lockdown3.y = -10000
        point.play();
      }
  
      if(Group2.isTouching(vir)){
        Imun = Imun - 20
        Group2.visible = false;
        Group2.y = -1000;
        fail.play();
      }
  
      if(Group3.isTouching(vir)){
        Imun = Imun - 30
        Group3.visible = false;
        Group3.y = -1000;
        fail.play();
      }
      if(Lockdown2.isTouching(vir)){
        Imun = Imun - 40;
        Lockdown2.visible = false;
        Lockdown2.y = -10000;
        fail.play();
      }
  
      if(Lockdown3.isTouching(vir)){
        Imun = Imun - 40;
        Lockdown3.visible = false;
        Lockdown3.y = -10000;
        fail.play();
      }
  
      if(Lockdown2.y === -10000){
        Lockdown2.visible = true;
      }
  
      if(Lockdown3.y === -10000){
        Lockdown3.visible = true;
      }
  
      if(Sanitizer1.isTouching(vir)){
        Imun = Imun + 20;
        Sanitizer1.visible = false;
        Sanitizer1.y = -500;
        point.play();
      }
  
      if(Group2.y === -1000){
        Group2.visible = true;
      }
  
      if(Group3.y === -1000){
        Group3.visible = true;
      }
  
      if(Finish1.isTouching(vir)){
        gameMode = 1;
        vir.addImage("vir", vir0);
        Finish1.visible=false;
        gameState = 30;
        Imun = 100;
        back.x = 4000;
        back.velocityX = 0;
        Finish1.destroy();
      }
  
  }
    
    if(vir.isTouching(mask1)){
      vir.addAnimation("vir", MvirImg);
      mask1.visible = false;
      mask1.y = -100;
      gameMode = 1;
      point.play();
    }
    
    if(gameMode === 1){
      
      if(covid2.isTouching(vir)){
        Imun = Imun - 20
        covid2.visible = false;
        covid2.y = -100;
        vir.addAnimation("vir", virImg);
        fail.play();
      }
  
      if(Imun <= 0){
        back.velocityX = 0;
        covid2.velocityX = 0;
        covid3.velocityX = 0;
        Sanitizer1.velocityX = 0;
        house2.velocityX = 0;
        Lockdown2.velocityX = 0;
        Lockdown3.velocityX = 0;
        Group2.velocityX = 0;
        Group3.velocityX = 0;
        vir.addImage("vir", vir0);
        gameOver.visible = true;
      }
  
      if(house2.isTouching(vir)){
        house2.visible = false;
        Lockdown2.y = -10000;
        point.play();
      }
  
      if(house3.isTouching(vir)){
        house3.visible = false;
        Lockdown3.y = -10000;
        point.play();
      }
  
      if(Group2.isTouching(vir)){
        Imun = Imun - 10
        Group2.visible = false;
        Group2.y = -100;
        vir.addAnimation("vir", virImg);
        fail.play();
      }
  
      if(Group3.isTouching(vir)){
        Imun = Imun - 10
        Group3.visible = false;
        Group3.y = -1000;
        vir.addAnimation("vir", virImg);
        fail.play();
      }
  
      if(Sanitizer1.isTouching(vir)){
        Imun = Imun + 20;
        Sanitizer1.visible = false;
        Sanitizer1.y = -500;
        point.play();
      }
  
      if(Lockdown2.isTouching(vir)){
        Imun = Imun - 30;
        Lockdown2.visible = false;
        Lockdown2.y = -10000
        vir.addAnimation("vir", virImg);
        fail.play();
      }
  
      if(Lockdown3.isTouching(vir)){
        Imun = Imun - 30;
        Lockdown3.visible = false;
        Lockdown3.y = -10000
        vir.addAnimation("vir", virImg);
        fail.play();

      }
      if(Finish1.isTouching(vir)){
        gameState = 30;
        gameMode = 1;
        Imun = 100;
        back.x = 4000;
        back.velocityX = 0;
        Finish1.destroy();
        vir.addImage("vir", vir0);
      }
    }

   
  }

  if(gameState === 30){
    back.addImage("back", BackImg3)
    Group4.visible = true;
    covid4.visible = true;
    Lockdown4.visible = true;
    Lockdown5.visible = true;
    house4.visible = true;
    house5.visible = true;
    mask2.visible = true;
    Group5.visible = true;
    Sanitizer3.visible = true;
    covid5.visible = true;
    vitaminC1.visible = true;
    alpha.visible = true;
    beta.visible = true;
    gamma.visible = true;
    delta.visible = true;
    hospital.visible = true;
    Shoot.visible = true;
    Vaccinated.visible = true;
    vaccine.visible = true;
    press.x = 100;
    press.y = 200;
    end.visible = true;
    covid.visible = false;
    covid1.visible = false;
    covid2.visible = false;
    covid3.visible = false;

    if(lol.isTouching(vir)){
      back.velocityX = 0;
    }
    if(keyDown('space')){
    back.velocityX = -7;
    Group4.velocityX = -7
    covid4.velocityX = -7
    Lockdown4.velocityX = -7
    Lockdown5.velocityX = -7
    house4.velocityX = -7
    house5.velocityX = -7
    mask2.velocityX = -7
    Group5.velocityX = -7
    Sanitizer3.velocityX = -7
    covid5.velocityX = -7
    vitaminC1.velocityX = -7
    alpha.velocityX = -7
    beta.velocityX = -7
    gamma.velocityX = -7
    delta.velocityX = -7
    hospital.velocityX = -7
    Shoot.velocityX = -7
    Vaccinated.velocityX = -7
    press.velocityX = -7;
    end.velocityX = -7;
    vir.addAnimation("vir", virImg);
    lol.y = -2000;
}


    if(covid4.isTouching(vir)||Lockdown4.visible === false||Lockdown5.visible === false||Group4.visible === false||Group5.visible === false||covid5.isTouching(vir)){
      gameMode = 0;
      vir.addAnimation("vir", virImg);
    }
  
   if (gameOver.visible === true){
        back.velocityX = 0;
        covid5.velocityX = 0;
        covid4.velocityX = 0;
        Sanitizer3.velocityX = 0;
        house4.velocityX = 0;
        house5.velocityX = 0;
        Lockdown4.velocityX = 0;
        Lockdown5.velocityX = 0;
        Group4.velocityX = 0;
        Group5.velocityX = 0;
        mask2.velocityX = 0
        Finish1.velocityX = 0;
        alpha.velocityX=0;
        alpha.velocityY = 0;
        beta.velocityX=0;
        beta.velocityY = 0;
        gamma.velocityX=0;
        gamma.velocityY = 0;
        delta.velocityX=0;
        delta.velocityY = 0;
    }
  
    if(obj1.isTouching(obj2)){
      obj1.velocityX = 0;
  
        back.velocityX = 0;
        covid4.velocityX = 0;
        covid5.velocityX = 0;
        Sanitizer3.velocityX = 0;
        house4.velocityX = 0;
        house5.velocityX = 0;
        Lockdown4.velocityX = 0;
        Lockdown5.velocityX = 0;
        Group4.velocityX = 0;
        Group5.velocityX = 0;
        mask2.velocityX = 0
        Finish1.velocityX = 0;
        Finish1.visible = false;
        Finish1.y = -100
    }
    
  
    if(gameMode === 0){

      back.velocityX = -7;
  
      if(alpha.isTouching(vir) || gamma.isTouching(vir) || beta.isTouching(vir) || delta.isTouching(vir)){
        Imun = 0;
        hospital.visible = false;
        alpha.visible = false;
        beta.visible = false
        gamma.visible = false
        delta.visible = false;
        fail.play();
      }
      if(keyDown('s')){
        vaccine.velocityX = 10;
        vaccine.x = vir.x;
        vaccine.y = vir.y;
        vaccine.visible = true;
      }
      if(vaccine.isTouching(alpha)){
        alpha.destroy();
        vaccine.velocityY = 0;
        vaccine.y = -200
        point.play()
      }
      if(vaccine.isTouching(beta)){
        beta.destroy();
        vaccine.velocityY = 0;
        vaccine.y = -200
        point.play()
      }
      if(vaccine.isTouching(gamma)){
        gamma.destroy();
        vaccine.velocityY = 0;
        vaccine.y = -200
        point.play()
      }
      if(vaccine.isTouching(delta)){
        delta.velocityY = 0;
        delta.destroy();
        vaccine.velocityY = 0;
        vaccine.y = -200
        point.play()
      }
  
      if(hospital.isTouching(vir)){
        gameState = 40;
        hospital.visible = false;
        point.play()
      }
  
  
  
  
      if(vitaminC1.isTouching(vir)){
        Imun = Imun+30;
        vitaminC1.y = -300;
        point.play()
      }
      if(covid4.isTouching(vir)){
        Imun = Imun - 30
        covid4.visible = false;
        covid4.y = -1000;
        fail.play();
      }
  
      if(covid5.isTouching(vir)){
        Imun = Imun - 30
        covid5.visible = false;
        covid5.y = -100;
        fail.play();
      }
  
      if(Imun <= 0){
        back.velocityX = 0;
        covid4.velocityX = 0;
        covid5.velocityX = 0;
        Sanitizer3.velocityX = 0;
        house4.velocityX = 0;
        Lockdown4.velocityX = 0;
        Lockdown5.velocityX = 0;
        Group5.velocityX = 0;
        Group4.velocityX = 0;
        vir.addImage("vir", vir0);
        gameOver.visible = true;
      }
  
      if(house4.isTouching(vir)){
        house4.visible = false;
        Lockdown4.y = -10000;
        point.play()
      }
  
      if(house5.isTouching(vir)){
        house5.visible = false;
        Lockdown5.y = -10000
        point.play()
      }
  
      if(Group4.isTouching(vir)){
        Imun = Imun - 20
        Group4.visible = false;
        Group4.y = -1000;
        fail.play();
      }
  
      if(Group5.isTouching(vir)){
        Imun = Imun - 30
        Group5.visible = false;
        Group5.y = -1000;
        fail.play();
      }
      if(Lockdown4.isTouching(vir)){
        Imun = Imun - 40;
        Lockdown4.visible = false;
        Lockdown4.y = -10000;
        fail.play();
      }
  
      if(Lockdown5.isTouching(vir)){
        Imun = Imun - 40;
        Lockdown5.visible = false;
        Lockdown5.y = -10000;
        fail.play();
      }
  
      if(Lockdown4.y === -10000){
        Lockdown4.visible = true;
      }
  
      if(Lockdown5.y === -10000){
        Lockdown5.visible = true;
      }
  
      if(Sanitizer3.isTouching(vir)){
        Imun = Imun + 20;
        Sanitizer3.visible = false;
        Sanitizer3.y = -500;
        point.play()
      }
  
      if(Group4.y === -1000){
        Group4.visible = true;
      }
  
      if(Group5.y === -1000){
        Group5.visible = true;
      }
  }
    
    if(vir.isTouching(mask2)){
      vir.addAnimation("vir", MvirImg);
      mask2.visible = false;
      mask2.y = 10;
      gameMode = 1;
      point.play()
    }
    
    if(gameMode === 1){
      if(covid4.isTouching(vir)){
        Imun = Imun - 20
        covid4.visible = false;
        covid4.y = 10;
        vir.addAnimation("vir", virImg);
        fail.play();
      }
  
      if(Imun <= 0){
        back.velocityX = 0;
        covid4.velocityX = 0;
        covid5.velocityX = 0;
        Sanitizer2.velocityX = 0;
        house4.velocityX = 0;
        Lockdown4.velocityX = 0;
        Lockdown5.velocityX = 0;
        Group4.velocityX = 0;
        Group5.velocityX = 0;
        vir.addImage("vir", vir0);
        gameOver.visible = true;
      }

      if(hospital.isTouching(vir)){
        gameState = 40;
        hospital.visible = false;
        point.play();
      }
  
      if(house4.isTouching(vir)){
        house4.visible = false;
        Lockdown4.y = -10000;
        point.play();
      }
  
      if(house5.isTouching(vir)){
        house5.visible = false;
        Lockdown5.y = -10000;
        point.play();
      }
  
      if(Group4.isTouching(vir)){
        Imun = Imun - 10
        Group4.visible = false;
        Group4.y = -1000;
        vir.addAnimation("vir", virImg);
        gameMode = 0;
        fail.play();
      }
  
      if(Group4.y === -1000){
        Group4.visible = true;
      }
  
      if(Group5.isTouching(vir)){
        Imun = Imun - 10
        Group5.visible = false;
        Group5.y = -1000;
        vir.addAnimation("vir", virImg);
        gameMode = 0;
        fail.play();
      }
  
      if(Group5.y === -1000){
        Group5.visible = true;
      }
  
      if(Sanitizer3.isTouching(vir)){
        Imun = Imun + 20;
        Sanitizer3.visible = false;
        Sanitizer3.y = -5;
        point.play();
      }
  
      if(Lockdown4.isTouching(vir)){
        Imun = Imun - 30;
        Lockdown4.visible = false;
        Lockdown4.y = -10000
        vir.addAnimation("vir", virImg);
        fail.play();
      }
  
      if(Lockdown5.isTouching(vir)){
        Imun = Imun - 30;
        Lockdown5.visible = false;
        Lockdown5.y = -10000
        vir.addAnimation("vir", virImg);
        fail.play();
      }
    }
 }

 if(gameState === 40){
  back.addImage("back", bg4);
  Lv1.visible = true;
  Lv2.visible = true;
  Lv3.visible = true;
  Lv4.visible = true;
  Lv5.visible = true;
  Lv6.visible = true;
  Lv7.visible = true;
  Lv8.visible = true;
  Lv9.visible = true;
  Lv9.visible = true;
  Lv10.visible = true;
  vaccine.visible = true;
  boss.visible = true;
  boss2.visible = true;
  boss3.visible = true;
  boss4.visible = true;
  boss5.visible = true;
  boss6.visible = true;
  boss7.visible = true;
  boss8.visible = true;
  boss9.visible = true;
  boss10.visible = true;
  win.visible = true;
  start.visible = true;
  school.visible = true;

  back.velocityX = -10;
  Lv1.velocityX = -10;
  Lv2.velocityX = -10;
  Lv3.velocityX = -10
  Lv4.velocityX = -10
  Lv5.velocityX = -10
  Lv6.velocityX = -10
  Lv7.velocityX = -10
  Lv8.velocityX = -10
  Lv9.velocityX = -10
  Lv10.velocityX = -10

  boss.velocityX = -10;
  boss2.velocityX = -10;
  boss3.velocityX = -10;
  boss4.velocityX = -10;
  boss5.velocityX = -10;
  boss6.velocityX = -10;
  boss7.velocityX = -10;
  boss8.velocityX = -10;
  boss9.velocityX = -10;
  boss10.velocityX = -10;
  
  yoyo.velocityX = -10;
  school.velocityX = -10;
  win.velocityX = -10;
  start.velocityX = -10;
  end1.visible = true;
  end1.velocityX = -10;
  covid.visible = false;
  covid1.visible = false;
  covid2.visible = false;
  covid3.visible = false;
  covid4.visible = false;
  covid5.visible = false;
 


if(Lv1.isTouching(vir) || Lv2.isTouching(vir) || Lv3.isTouching(vir) || Lv4.isTouching(vir) || Lv5.isTouching(vir) || Lv6.isTouching(vir) || Lv7.isTouching(vir) || Lv8.isTouching(vir) || Lv9.isTouching(vir) || Lv10.isTouching(vir)){
  Imun = 0;
  fail.play();
}



if(Imun === 0){
  gameOver.visible = true;
}

if(keyDown('s')){
  vaccine.x = vir.x;
  vaccine.y = vir.y;
  vaccine.velocityX = 20
}

if(vaccine.isTouching(Lv1)){
  Lv1.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv2)){
  Lv2.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv3)){
  Lv3.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv4)){
  Lv4.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv5)){
  Lv5.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv6)){
  Lv6.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv7)){
  Lv7.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv8)){
  Lv8.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv9)){
  Lv9.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(Lv10)){
  Lv10.destroy();
  vaccine.y = -100
  point.play();
}

if(vaccine.isTouching(boss)){
  boss2.x = boss.x
  boss2.y = boss.y
  boss.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss2)){
  boss3.x = boss2.x
  boss3.y = boss2.y
  boss2.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss3)){
  boss4.x = boss3.x
  boss4.y = boss3.y
  boss3.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss4)){
  boss5.x = boss4.x
  boss5.y = boss4.y
  boss4.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss5)){
  boss6.x = boss5.x
  boss6.y = boss5.y
  boss5.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss6)){
  boss7.x = boss6.x
  boss7.y = boss6.y
  boss6.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss7)){
  boss8.x = boss8.x
  boss8.y = boss8.y
  boss7.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss8)){
  boss9.x = boss8.x
  boss9.y = boss8.y
  boss8.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss9)){
  boss10.x = boss9.x
  boss10.y = boss9.y
  boss9.destroy();
  vaccine.y = -200;
  point.play();
}

if(vaccine.isTouching(boss10)){
  vaccine.y = boss10.y;
  vaccine.x = boss10.x
  back.velocityX = -10;
  school.velocityX = -10
  vaccine.velocityX = 0;
  yes.x = boss10.x;
  yes.y = boss10.y;
  yoyo.destroy();
  hash.destroy();
  boss10.y = -1000;
  gameState = 50;
  point.play();
}

if(vir.isTouching(boss10)){
  Imun =0
}

if(yes.isTouching(boss10)){
 gameState = 50;
}

if(school.isTouching(vir)){
  thx.visible = true;
}
}

if(gameState === 50){
  thx.visible = true;
}

  vir.collide(invi);
  vir.collide(invi2);
  vir.collide(invi3);
  vir.collide(invi4);
  
  security.display()
  drawSprites();

  if(gameState === 10 || gameState === 20 || gameState === 30){
    textSize(30);
  fill("blue");
  text("Imun: "+Imun, 1500, 61)
  }

  if(gameState === 40){
    textSize(30)
    fill("red")
    text("Imun: "+Imun, 200, 200)
  }

  if(alpha.isTouching(Invi5)){
    alpha.velocityY = 20;
  }

  if(beta.isTouching(Invi5)){
    beta.velocityY = 20;
  }

  if(gamma.isTouching(Invi5)){
    gamma.velocityY = 20;
  }

  if(delta.isTouching(Invi5)){
    delta.velocityY = 20;
  }

  if(alpha.isTouching(Invi6)){
    alpha.velocityY = -20;
  }

  if(beta.isTouching(Invi6)){
    beta.velocityY = -20;
  }

  if(gamma.isTouching(Invi6)){
    gamma.velocityY = -20;
  }

  if(delta.isTouching(Invi6)){
    delta.velocityY = -20;
  }




  textSize(30);
  fill("black");
  text(mouseX+","+mouseY,mouseX,mouseY);


}