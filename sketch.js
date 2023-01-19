let ballCount = 500;

let x = [];
let y = [];
let size = [];

let xSpeed = [];
let ySpeed = [];

let h = [];
let s = [];
let b = [];


function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    for(let i = 0; i < ballCount; i++) {
        x[i] = width / 2;
        y[i] = height;

        size[i] = random(5, 30);

        xSpeed[i] = random(-3, 3);
        ySpeed[i] = random(-3, 3);

        h[i] = random(230, 290);
        s[i] = random(10, 40);
        b[i] = random(80, 95);
    }
}

function draw() {
    background('rgba(78, 13, 37, 0.25)');
    push();
    stroke('#340919');
    strokeWeight(50);
    noFill();
    snowMan1();
    translate(width/2, 0);
    pop();

    push();
    stroke('#631819');
    strokeWeight(50);
    noFill();
    snowMan2();
    translate(width/2, 0);
    pop();

    push();
    stroke('#5E2138');
    strokeWeight(50);
    noFill();
    snowMan3();
    translate(width/2, 0);
    pop();

    for (let i = 0; i < ballCount; i++) {
        ellipse(x[i], y[i], size[i]);

        x[i] += xSpeed[i];
        y[i] += ySpeed[i];

        if(x[i] < 0 || x[i] > width) {
            xSpeed[i] = xSpeed[i] * (-1);
        }

        if(y[i] < 0 || y[i] > height) {
            ySpeed[i] = ySpeed[i] * (-1);
        }

        fill(h[i], s[i], b[i]);

        noStroke();
    }
    

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function snowMan1() {
    ellipse(width / 8 * 3, height / 2, 180, 180);

    push();
    translate(0, 130);
    ellipse(width / 8 * 3, height / 2, 220, 220);
    pop();
    
    push();
    translate(-40, 280);
    ellipse(width / 8 * 3, height / 2, 350, 350);
    pop();
}

function snowMan2() {
    ellipse(width / 16 * 9, height / 8 * 6, 120, 180);

    push();
    translate(0, 130);
    ellipse(width / 16 * 9, height / 8 * 6, 180, 230);
    pop();
}

function snowMan3() {
    ellipse(width / 16 * 11, height / 16 * 9, 230, 160);

    push();
    translate(0, 230);
    ellipse(width / 16 * 11, height / 2, 220, 400);
    pop();
}

