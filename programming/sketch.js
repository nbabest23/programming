var diaml = 0;
var r = 255;
var g = 255;
var b = 0;

function setup() {
    // put setup code here
    createCanvas(500, 500)
    background("#003366")

}

function draw() {

    background("#003366");


    for (var i = 0; i < 500; i++) {


        fill('lightblue')

        var randomX = random(0, 500);
        ellipse(randomX, i, 2)
    }


    fill('white')
    ellipse(250, 250, 400, 400);
    textSize(30);
    textFont("Georgia");
    textStyle("ITALIC");
    text("night", 400, 400);

    ////    fill("#add8e6");
    ////    stroke("#ffff00");
    ////    strokeWeight(5);
    ////    ellipse(50, 100, 20, 20);
    ////    //elispe that moves with the mouse
    ////    fill("#ffff00");
    ////    ellipse(mouseX, mouseY, 20, 20);
    ////    textSize(20);
    ////    textFont("Georgia");
    ////    textStyle(ITALIC);
    ////    noStroke();
    ////    text("hello", 325, 450);


    if (mouseX < 250) {
        background('lightblue')
        fill(r, g, b)
        ellipse(250, 250, 400, 400);

        fill('white')
        noStroke();
        ellipse(250, 150, 170, 100);
        ellipse(350, 150, 170, 100);
        ellipse(150, 150, 170, 100);
        ellipse(100, 150, 170, 100);
        ellipse(150, 150, 170, 100);
        
        
        
        ellipse(350, 350, 120, 40);
        ellipse(350, 350, 120, 40);
        ellipse(250, 350, 120, 40);
        ellipse(350, 350, 120, 40);
        text("day", 450, 450);
    }




}

function mousePressed() {
    //    if (diam1 >= 50) {
    //        diam1 = 0;
    //    } else {
    //        diam1 = diam1 + 5;
    //    }
    r = random(200, 225);
    g = random(200, 255);
    b = 0;
    //    fill(r, g, b)

}
