function setup() {
  createCanvas(600, 600);
}
//cloud white
function cloudWhite(x, y) {
  strokeWeight(0);  
  fill(255);
  ellipse(x, y, 50);
  ellipse(x - 40, y, 50);
  ellipse(x + 30, y - 10, 70);
  rect(x - 80, y + 5, 150, 20);
  ellipse(x - 80, y, 50);
  ellipse(x + 65, y, 50);
}
//cloud dark
function cloudDark(a, b) {

  strokeWeight(0);
  fill(128, 64, 50);
  rect(a - 40, b + 5, 100, 20);
  ellipse(a, b, 50);
  ellipse(a - 40, b, 50);
  ellipse(a + 30, b - 10, 70);
  ellipse(a + 50, b, 55);
}

// a function that draws the background
function gameBackground() {

strokeWeight(0);
fill(18, 55, 0);
rect(0, 500, 600, 600);


}
function landingSpace(landingPadX,landingPadY){
strokeWeight(2);
fill(255, 0, 0);
rect(landingPadX , landingPadY, 150, 40);
fill(255);
textSize(15);
textAlign(CENTER, CENTER);
text("Landing Pad", landingPadX+75, 520);

}
// Draw start button with "Start Game" text
function startButton() {
strokeWeight(0);
fill(0, 0, 255);
rect(250, 300, 100, 40);
fill(255);
textSize(16);
textAlign(CENTER, CENTER);
text("Start Game", 300, 320); // Centered text on the button
fill(0);
textSize(45);
text("Parachute Landing Game", width /2,  220);
}


// Draw the "Back to Start" button
function endScreen(){
strokeWeight(0);
fill(0, 0, 255);
rect(250, 350, 100, 40);
fill(255);
textSize(16);
text("Back To Start", 300, 370);
}

function endButton() {
strokeWeight(0);
fill(0, 0, 255);
rect(250, 550, 100, 40);
fill(255);
textSize(16);
textAlign(CENTER, CENTER);
text("End Game", 300, 570); // Centered text on the button
}



function man(x,y,parachute){
 
  push();
  strokeWeight(3);
  translate(x,y);
  scale(0.35);
  translate(-x,-y);
  
  //hair
  fill(0,0,0);
  rect(x,y,160,130,100);
  fill(255,255,255);
  
  //ear
  fill(255,255,120);
  ellipse(x+5,y+100,20,40);
  ellipse(x+155,y+100,20,40);
  
  //neck
  fill(255,255,120);
  rect(x+50,y+210,60,60);
  
  //leg
  fill(204,0,102);
  rect(x+10,y+340,140,150,20);
  line(x+80,y+380,x+80,y+490);
  
  //hand
  fill(255,153,0);
  rect(x-100,y+270,120,20,10);
  ellipse(x-100,y+280,30);
  rect(x+140,y+270,120,20,10);
  ellipse(x+250,y+280,30);
  
  //body
  fill(0,204,10);
  rect(x-20,y+230,200,150,40);
  strokeWeight(0);
  fill(255,255,120);
  ellipse(x+80,y+230,60,30);
  
  //face
  strokeWeight(3);
  fill(255,255,120);
  ellipse(x+80,y+120,140,200);
  
  //hair
  fill(0,0,0);
  rect(x+15,y+20,130,50,100);
  
  //left eye
  fill(255,255,255);
  ellipse(x+40,y+100,30,15);
  fill(153,255,153);
  ellipse(x+40,y+100,12);
  fill(0,0,0);
  ellipse(x+40,y+100,5);
  ellipse(x+40,y+85,30,1);
  
  //right eye
  fill(255,255,255);
  ellipse(x+120,y+100,30,15);
  fill(153,255,153);
  ellipse(x+120,y+100,12);
  fill(0,0,0);
  ellipse(x+120,y+100,5);
  ellipse(x+120,y+85,30,1);
  
  //nose
  fill(0,0,0);
  line(x+80,y+100,x+90,y+145);
  arc(x+82,y+145,15,5,0,3.14);

  //mouth
  fill(0,0,0);
  arc(x+82,y+180,50,40,0,3.14);
  fill(255,255,255);
  arc(x+82,y+185,30,20,0,3.14);
  
  //parachute
  if(parachute){

      strokeWeight(4);
      fill(0,0,255);
      ellipse(x+85,y-120,450,200);
      fill(255,255,0);
      ellipse(x+85,y-100,400,150);
      line(x-139,y-120,x-105,y+265);
      line(x+309,y-120,x+255,y+265);

  }
  else{
  //parachute
  strokeWeight(4);
  fill(255,0,0);
  ellipse(x+85,y-120,450,200);
  fill(0,255,255);
  ellipse(x+85,y-100,400,150);
  line(x-139,y-120,x-105,y+265);
  line(x+309,y-120,x+255,y+265);
  }
  pop();
  
  }

  let x = 275;
  let y = 0;
  let landingPadX = 225;
  let landingPadY = 500;

  // game logic variable
  let gravity = 0.1;
  let acceleration = 0.1;
  let initialGravity = 0.1;
  let landingPadSpeed = 1;
  
  

  // game state variables
  let gameState = true;
  let endGameScreen = false; // New state for the "Game Ended" screen
  let gameStartScreen = true; // initially show the start screen
 

  function draw() {
   
  background(120, 120, 120); // Clear background for each frame
   
 
  if (gameStartScreen) {
    // Show start screen with button only
    background(150, 15, 200);
    startButton();
    
  }
  
  else if (endGameScreen) {
    // Show end game message screen
    background(50, 50, 50);
    fill(0,255,0);
    textSize(80);
    textAlign(CENTER, CENTER);
    text("Game Ended", width / 2, height / 2 - 20);
    endScreen();
    
  }
    else {
      gameBackground();
      landingSpace(landingPadX,landingPadY);
      endButton();
      
      
      
      // Draw clouds first so they appear behind the character
      cloudDark(450, 200);
      cloudDark(350, 200);
      cloudWhite(90, 100);
      cloudWhite(500, 90);
    
      // Draw character on top of clouds
      man(x, y, keyIsPressed || mouseIsPressed);


      y = y + gravity;
      gravity = gravity + acceleration;

      
    
     //landing pad movement
     landingPadX = landingPadX + landingPadSpeed;
     if(landingPadX >= 450 || landingPadX <= 0){
     landingPadSpeed = landingPadSpeed *-1;
     }

     // decrease the velocity when clicking
     if (keyIsDown(32) || mouseIsPressed) {
     gravity = gravity -0.5;
     }
     
     if (y + 173 >= landingPadY) { 
      // Check if the x-position of the man is within the landing pad's range
      if (x >= landingPadX && x <= landingPadX + 150) {
          // Character has landed on the pad
          gameState = false;
          landingPadSpeed = 0;
          gravity = 0; // Stop vertical speed (simulate landing)
          fill(0, 100, 0);
          textSize(80);
          text("Landed Safely", width /2.2 ,  80);
      }
      
      else {
          // Character landed outside the landing pad
          gameState = false;
          landingPadSpeed = 0;
          gravity = 0; // Stop vertical speed (simulate landing)
          fill(255, 0, 0);
          textSize(80);
          text("Game Over", width / 2, 80);
         }     
          
  }
 
    }  

}

function mousePressed() {
  if (gameStartScreen) {
    // Check if the mouse is within the bounds of the "Start Game" button
    if (mouseX >= 250 && mouseX <= 350 && mouseY >= 300 && mouseY <= 340) {
      console.log("The Start Button Pressed! Game started!");
      
      // Transition from start screen to main game
      gameStartScreen = false;
      
      // Initialize game variables for a new game
      y = -200;
      gravity = initialGravity;
      acceleration = 0.1;
      landingPadSpeed = 1;
    }
  } else if (endGameScreen) {
    // Check if the "Back to Start" button is clicked
    if (mouseX >= 250 && mouseX <= 350 && mouseY >= 350 && mouseY <= 390) {
      console.log("Back to Start Button Pressed! Returning to Start Screen.");
      
      // Transition to the start screen
      endGameScreen = false;
      gameStartScreen = true;
    }
  } else {
    // Check if the "End Game" button is clicked
    if (mouseX >= 250 && mouseX <= 350 && mouseY >= 550 && mouseY <= 590) {
      console.log("The End Button Pressed! Showing 'Game Ended' screen.");
      
      // Transition to "Game Ended" screen
      endGameScreen = true;
      
    }
  }
}




