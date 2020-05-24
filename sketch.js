function setup() {
  createCanvas(400, 400);
  textSize(25);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  let hr = hour();
  let mn = minute();
  let sc = second();
  let mo = month();
  let yr = year();
  let mi = millis();
  let dy = day();

  noFill();
  strokeWeight(10);
  stroke(255, 70, 180);
  let end6 = map(mi, 0, 1000, 0, 360)
  arc(200, 200, 225, 225, 0, end6);
  stroke(255, 100, 150);
  let end1 = map(sc, 0, 60, 0, 360);
  arc(200, 200, 250, 250, 0, end1);
  stroke(20, 100, 190);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(200, 200, 275, 275, 0, end2);
  stroke(100, 250, 10);
  let end3 = map(hr, 0, 24, 0, 360);
  arc(200, 200, 300, 300, 0, end3);
  stroke(50, 250, 150);
  let end7 = map(dy, 1, 30, 0, 360)
  arc(200, 200, 325, 325, 0, end7);
  stroke(250, 30, 175);
  let end4 = map(mo, 0, 12, 0, 360)
  arc(200, 200, 350, 350, 0, end4);
  stroke(10, 20, 160);
  let end5 = map(yr, 0, 21, 0, 360)
  arc(200, 200, 375, 375, 0, end5);

  fill(255);
  noStroke();
  text(hr + ':' + mn + ':' + sc, 150, 250); 
  text(yr + ':' + mo + ':' + dy,145,200);
}