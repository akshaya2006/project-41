var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;
var player1score =0;
var player2score =0;

function preload(){
  back_img = loadImage("Images/jungle.jpg");
  player_img = loadImage("Images/basket2.png");
  fruit1_img = loadImage("Images/apple2.png");
  fruit2_img = loadImage("Images/banana2.png");
  fruit3_img = loadImage("Images/melon2.png");
  fruit4_img = loadImage("Images/orange2.png");
  fruit5_img = loadImage("Images/pineapple2.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  

}

function draw() {
  background(back_img);

  // Add conditions for gameStates and playerCount

  if (gameState === 1){
     clear();
     game.play();
  }
  if (gameState === 2){
     game.end();
  }
  if (gameState === 2){
     game.update();
  }


}