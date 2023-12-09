let ns;
let str, str2;
let cld, cld2; 
let bul, bul2;
let imgC;
let imgE;
let player, enemy, coin;
let seconds = 100;

 
function setup() {
  new Canvas(800, 400);
  ns = loadImage('nightsky.png');
  str = loadImage('street.png');
  //str2 = loadImage('street.png')
  cld = loadImage('clouds.png');
  //cld2 = loadImage('clouds.png');
  bul = loadImage('buildings.png');
  //bul2 = loadImage('buildings.png');
  imgC = loadImage('Vhawk.png');
  imgE = loadImage('darkness.png');
  
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
  image(str, 0, 0, width, height);
  image(cld, 0, 0, width, height);
  image(bul, 0, 0, width, height);



  
  if (kb.pressing('up')) player.vel.y = -8;
  else if (kb.pressing('down')) player.vel.y = 8;
  else player.vel.y = 0;
  
  

    seconds--; 

    if (seconds <= 0) {
      new enemy.Sprite(width, random(height));
      seconds = 20; 
    }

    //Player Reset

    if(player.x >= width || player.x < 0){
      player.x = 175;
      player.vel.x = 0;
      player.vel.y = 0;
  
    }

    //Start of Parallaxing
    
     if (bul >= width + width/2){
       bul= -width/2;
     }

     if (bul2 >= width + width/2){
       bul2= -width/2;
     }




    

   
  

  console.log(player.vel.y);

  if (player.y < 20) {
    player.y = 20;
  }

  if (player.y > 375) {
    player.y = 375;
  }
  player.debug = mouse.pressing();
  enemy.debug = mouse.pressing();

}
 