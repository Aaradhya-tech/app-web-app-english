
var child,school,flag;
var backgroundImg, happyImg, sadImg, schoolImg, flagImg;

function preload(){
  backgroundImg = loadImage("background.jpg");
  happyImg  = loadImage("happy emoji.png");
  sadImg = loadImage("sad emoji.png");
  schoolImg = loadImage("school.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  school = createSprite(displayWidth/2,50,10,10);
  school.addImage(schoolImg);


  child = createSprite(displayWidth/2,displayHeight/2,10,10);
  child.addImage(happyImg);
  child.scale = 0.16;

}



function draw() {
  background(backgroundImg);

  
  camera.y = child.y;
  camera.x = child.x; 

  allOldText();
  allNewText();

  if(keyDown(LEFT_ARROW)){
    child.x = child.x-2;
  }

  if(keyDown(RIGHT_ARROW)){
    child.x = child.x+2;
  }

  if(keyDown(UP_ARROW)){
    child.y = child.y-2;
  }

  if(keyDown(DOWN_ARROW)){
    child.y = child.y+2;
  }

  if(child.x < displayWidth/2){
    child.addImage(sadImg)
  }

  if(child.x > displayWidth/2){
    child.addImage(happyImg)
  }

  
  line(displayWidth/2,-20000,displayWidth/2,displayHeight+20000)
  textSize(32);
  textFont("Georgia");
  fill(255);
  text("OLD EDUCATION POLICY",100,50)
  text("NEW EDUCATION POLICY",displayWidth/2 + 250,50)
  drawSprites();
}

function allOldText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text("10 + 2 ", displayWidth/2 - 300,displayHeight/2);
  text("Schooling System", displayWidth/2 - 300,displayHeight/2 + 50);

  text("This policy just focuses on marks and academics ", displayWidth/2 - 700,displayHeight/2 - 200);

  text("This policy doesn't allow students to study in their own language", displayWidth/2 - 1300,displayHeight/2 - 100);
  
  text("We are not getting any internship in any of our skills", displayWidth/2 - 1000,displayHeight/2 + 200);

  text("Exams are just held in English and Hindi", displayWidth/2 - 1000,displayHeight/2 + 70);

  text("Teachers only have the right to rank a student", displayWidth/2 -700, displayHeight/2 +300);

  text("Students are ranked on the basis of academic performance only", displayWidth/2 - 1500,displayHeight/2 - 270);

  text("Students aren't taught any skills like coding, pottery, etc..", displayWidth/2 - 1200,displayHeight/2  + 400);

  text("Board exams are held annually", displayWidth/2 - 1400,displayHeight/2 + 10);

  text("No cultural study is provided", displayWidth/2 - 1400,displayHeight/2 +300);

  text("Qualification is only provided after completing the course", displayWidth/2 - 1600,displayHeight/2 + 140);

  text("12 marks are important for college admissions", displayWidth/2 - 1800,displayHeight/2 - 200);

  text("Fees aren't restricted", displayWidth/2 - 1400,displayHeight/2 + 480);

  text("Students are restricted to subjects", displayWidth/2 - 1750,displayHeight/2 + 350);
  
}

function allNewText(){
  textSize(28);
  textFont("Alatsi");
  fill(255);

  text(" 5 + 3 + 3 + 4 ", displayWidth/2 + 50,displayHeight/2);
  text("Schooling System", displayWidth/2 + 50,displayHeight/2 + 50);

  text("This policy, just not focuses on marks and academics, it also focuses on skills and non-academic activities", displayWidth/2 + 200,displayHeight/2 - 250);

  text("Students can now study in their regional language", displayWidth/2 + 300,displayHeight/2 - 100);
  
  text("We can get an internship in our skills in our school-age", displayWidth/2 + 500,displayHeight/2 + 200);

  text("Now exams are available in the regional languages", displayWidth/2 + 250,displayHeight/2 + 120);

  text("Teachers and students rank a child", displayWidth/2 +250, displayHeight/2 +300);

  text("Students are ranked on the bases of academic performance and creativity also", displayWidth/2 + 1000,displayHeight/2 - 310);

  text("Students are taught any many skills like coding, pottery etc..", displayWidth/2 + 700,displayHeight/2  + 400);

  text("Now board exams are held in two semesters", displayWidth/2 + 900,displayHeight/2 + 10);

  text("Indian culture is taught in school", displayWidth/2 + 900,displayHeight/2 +300);

  text("Qualification is provided after complete course and certificates and diploma are provided in between the courses", displayWidth/2 + 1100,displayHeight/2 + 140);

  text("12 marks are not important for college admissions, students can give entrance exam", displayWidth/2 + 800,displayHeight/2 - 200);

  text("Fees are restricted", displayWidth/2 + 300,displayHeight/2 + 400);

  text("Students can take any subject they want", displayWidth/2 + 1250,displayHeight/2 + 350);
  
}