let ns;
let str, str2;
let cld;
let cldx, cldx2; //cloud1 n 2 x variables
let bul;
let bulx; //we need a variable for the xpos
let bulx2; //we need a variable for the xpos
let imgC;
let imgE;
let player, enemy, coin;
let seconds = 100;
let score;
let startScore;
let lives = 3; //sets up a live counters

function setup() {
  new Canvas(800, 400);
  ns = loadImage("nightsky.png");
  str = loadImage("street.png");
  //str2 = loadImage('street.png')
  cld = loadImage("clouds.png");
  //cld2 = loadImage('clouds.png');
  bul = loadImage("buildings.png");
  imgC = loadImage("Vhawk.png");
  imgE = loadImage("darkness.png");

  score = 0;
  startScore = millis(); //get the initial time the sketch starts

  cldx = 0; //onscreen starting position
  cldx2 = width; //offscreen starting position

  bulx = 0; //starting position
  bulx2 = width; //starting position

  // world.gravity.y = 10;
  player = new Sprite();
  player.img = imgC;
  player.x = 175;
  player.diameter = 40;
  player.scale = 1.25;

  enemy = new Group();
  enemy.img = imgE;
  enemy.diameter = 55;
  enemy.direction = 180;
  enemy.speed = 8;
  enemy.scale = 1;

  //here we set up the first platform
  platform = new Sprite();
  platform.color = (13, 14, 12);
  platform.width = 800;
  platform.height = 5;
  platform.x = 400;
  platform.y = 400;
  platform.collider = "static"; //we make the colliders static so they don't fall due to gravity
}

function draw() {
  background(ns);

  image(cld, cldx, 0, width, height);
  image(cld, cldx2, 0, width, height);
  image(bul, bulx, 0, width, height);
  image(bul, bulx2, 0, width, height);
  image(str, 0, 0, width, height);

  if (kb.pressing("up")) player.vel.y = -8;
  else if (kb.pressing("down")) player.vel.y = 8;
  else player.vel.y = 0;

  if (seconds <= 0) {
    new enemy.Sprite(width, random(height));
    seconds = 20;
  }

  //Player Reset
  if (player.x >= width || player.x < 0) {
    lives--; //lose a life
    player.x = 175;
    player.vel.x = 0;
    player.vel.y = 0;
    player.rotation = 0; //resets player rotation
    player.rotationLock = true; //locks the player rotation
  } else {
    player.rotationLock = false; //unlocks the player rotation once the player returns
  }

  print(lives); //this is our debug, remove on final build

  // cldx -= 0.5;
  // cldx2 = cldx2 - 0.5;

  //resets bg1 off screen
  // if (cldx <= 0 - width) {
  //   cldx = width;
  // }
  // //resets bg2 off screen
  // if (cldx2 <= 0 - width) {
  //   cldx2 = width;
  // }

  //Start of Parallaxing
  bulx--;
  bulx2--;
  //resets bg1 off screen
  if (bulx <= 0 - width) {
    bulx = width;
  }
  //resets bg2 off screen
  if (bulx2 <= 0 - width) {
    bulx2 = width;
  }

  //console.log(player.vel.y);

  if (player.y < 25) {
    player.y = 25;
  }

  if (player.y > 375) {
    player.y = 375;
  }

  seconds--;
  //here is where we'll list the time
  // score = (millis() - startScore) / 1000;
  // fill(255);
  // textSize(32);
  // text(floor(score), width - 75, 35);

  //remove these debugs once final build
  player.debug = mouse.pressing();
  enemy.debug = mouse.pressing();
}
