var runners, runner1, runner2, runner3, runner4;
var runner1Img, runner2Img, runner3Img, runner4Img;
var canvas;
var database;




function preload (){
   runner1 = loadAnimation("yellowrun1.png","yellowrun2.png", "yellowrun3.png");
   runner2= loadAnimation("bluerun1.png","bluerun2.png", "bluerun3.png");
   runner3 = loadAnimation("greenrun1.png","greenrun2.png", "greenrun3.png");
   runner4 = loadAnimation("purplerun1.png","purplerun2.png", "purplerun3.png");

}






function setup(){
   canvas = createCanvas(windowWidth, windowHeight);
   var database = firebase.database();
   


}






function draw(){

}