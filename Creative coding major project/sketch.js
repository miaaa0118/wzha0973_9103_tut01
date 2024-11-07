// Global variables 
let secondSegStart;
let secondSegWidth;
let thirdSegStart;
let thirdSegWidth;
let fourthSegStart;
let fourthSegWidth;
let minHeight;
let maxHeight;
let rectWidth;
let rectHeight;

let red = [206, 29, 29];
let blue = [21, 33, 173];
let yellow = [255, 196, 31];

let Layer = 0; // New variable to control which layer to display

function fillColour(colour) {
  // Fills colour based on inputted colour name
  switch(colour) {
    case "red":
      fill(red[0], red[1], red[2]);
      break;
    case "blue":
      fill(blue[0], blue[1], blue[2]);
      break;
    case "yellow":
      fill(yellow[0], yellow[1], yellow[2]);
      break;
    case "white":
      fill(255);
      break;
    case "black":
      fill(0);
      break;
  }
}

class FirstBuilding {
  constructor() {
    this.Layer = 1;  // You can adjust the default layer as needed
  }

  setLayer(layer) {
    this.Layer = layer;
  }
  
  drawRect(x, y, w, h, c) {
    // draws rectangle using ratios as setup in global variables
    fillColour(c);
    rect(x * rectWidth, windowHeight - y * rectHeight, w * rectWidth, h * rectHeight);
  }

  drawLayer1() {
    if (this.Layer >= 1) {
      this.drawRect(24, 10, 6, 10, "white");
      this.drawRect(14, 9, 12, 9, "red");
      this.drawRect(16, 19, 2, 12, "red");
      this.drawRect(7, 17, 4, 17, "white");
      this.drawRect(12, 7, 6, 7, "white");
    }
  }

  drawLayer2() {
    if (this.Layer >= 2) {
      this.drawRect(1, 11, 10, 11, "blue");
      this.drawRect(19, 20, 5, 8, "blue");
      this.drawRect(30, 36, 6, 36, "blue");
      this.drawRect(33.5, 9, 1.5, 9, "red");
      this.drawRect(33.5, 6, 1, 1, "yellow");
      this.drawRect(24, 20, 8, 8, "white");
    }
  }

  drawLayer3() {
    if (this.Layer >= 3) {
      this.drawRect(35, 41, 4, 18, "white");
      this.drawRect(30, 36, 6, 13, "blue");
      this.drawRect(36, 38, 1, 15, "yellow");
      this.drawRect(29, 53, 2, 30, "yellow");
      this.drawRect(24, 50, 6, 27, "blue");
    }
  }

  drawLayer4() {
    if (this.Layer >= 4) {
      this.drawRect(30, 50, 0.25, 27, "black");
      this.drawRect(26, 42, 2, 4, "yellow");
      this.drawRect(7, 33, 17, 11, "white");
      this.drawRect(28, 30, 4, 7, "red");
      this.drawRect(11, 18, 1, 18, "yellow");
    }
  }

  drawLayer5() {
    if (this.Layer >= 5) {
      this.drawRect(4.5, 42, 6.5, 7, "white");
      this.drawRect(15, 12, 18, 3, "yellow");
      this.drawRect(35, 9, 0.25, 7, "black");
      this.drawRect(30, 9, 0.5, 7, "black");
      this.drawRect(18, 7, 0.5, 5, "black");
      this.drawRect(0.5, 35, 27.5, 2, "yellow");
      this.drawRect(11, 48, 2, 13, "yellow");
    }
  }

  drawLayer6() {
    if (this.Layer >= 6) {
      this.drawRect(16, 64, 8, 29, "red");
      this.drawRect(20, 59, 2, 5, "yellow");
      this.drawRect(30, 28, 1.5, 2.5, "yellow");
      this.drawRect(4, 23, 36, 3, "yellow");
      this.drawRect(18, 25, 2, 25, "yellow");
      this.drawRect(4, 20, 36, 1, "black");
    }
  }

  drawLayer7() {
    if (this.Layer >= 7) {
      this.drawRect(26, 38, 2, 0.5, "black");
      this.drawRect(23.5, 59, 1.5, 36, "yellow");
      this.drawRect(0.5, 33, 23, 1, "black");
      this.drawRect(20, 25, 0.5, 2, "black");
      this.drawRect(20, 20, 0.5, 8, "black");
      this.drawRect(20, 8, 0.5, 6, "black");
      this.drawRect(15, 9, 18, 1, "black");
      this.drawRect(32, 20, 0.5, 8, "black");
    }
  }

  drawLayer8() {
    if (this.Layer >= 8) {
      this.drawRect(25, 33, 3, 1, "black");
      this.drawRect(20, 54, 2, 0.5, "black");
      this.drawRect(37, 38, 0.5, 15, "black");
      this.drawRect(32, 30, 0.25, 7, "black");
      this.drawRect(30, 25.5, 1.5, 0.25, "black");
      this.drawRect(0, 2, 39, 2, "yellow");
    }
  }

  draw() {
    push();
    this.drawLayer1();
    this.drawLayer2();
    this.drawLayer3();
    this.drawLayer4();
    this.drawLayer5();
    this.drawLayer6();
    this.drawLayer7();
    this.drawLayer8();
    pop();
  }
}

class SecondBuilding {
  constructor() {
    this.Layer = 1;
  }

  setLayer(layer) {
    this.Layer = layer;
  }

  drawRect(x, y, w, h, c) {
    fillColour(c);
    rect(x * rectWidth, windowHeight - y * rectHeight, w * rectWidth, h * rectHeight);
  }

  drawLayer1() {
    if (this.Layer >= 1) {
      this.drawRect(18, 4, 23, 4, "red");
      this.drawRect(0, 7, 27, 3.8, "white");
      this.drawRect(0, 19, 6, 12, "white");
      this.drawRect(0, 35, 17, 7, "white");
      this.drawRect(3, 1.5, 37, 1.5, "yellow");
      this.drawRect(0, 7, 25, 1, "yellow");
    }
  }

  drawLayer2() {
    if (this.Layer >= 2) {
      this.drawRect(3, 11, 3, 4, "blue");
      this.drawRect(7, 11, 9, 4, "blue");
      this.drawRect(0, 19, 15, 6, "red");
      this.drawRect(29.5, 9, 3, 5, "yellow");
      this.drawRect(15, 19, 0.5, 6, "black");
      this.drawRect(15, 11, 1, 4, "black");
    }
  }

  drawLayer3() {
    if (this.Layer >= 3) {
      this.drawRect(33, 20, 5, 7, "white");
      this.drawRect(9, 13.5, 20, 2.5, "yellow");
      this.drawRect(1, 22, 16, 2, "yellow");
      this.drawRect(9, 32, 5, 10, "yellow");
      this.drawRect(12, 18, 2, 4, "yellow");
    }
  }

  drawLayer4() {
    if (this.Layer >= 4) {
      this.drawRect(18.6, 10.5, 10, 3.2, "blue");
      this.drawRect(28, 24, 6, 20, "blue");
      this.drawRect(24, 76, 6, 63, "white");
      this.drawRect(18, 72, 1.5, 60, "white");
      this.drawRect(33, 24, 1, 20, "black");
      this.drawRect(0, 6, 19, 0.5, "black");
    }
  }

  drawLayer5() {
    if (this.Layer >= 5) {
      this.drawRect(32, 48, 3, 20, "blue");
      this.drawRect(28, 38, 4, 10, "red");
      this.drawRect(17, 69, 1.5, 69, "yellow");
      this.drawRect(32, 48, 3, 20, "blue");
      this.drawRect(11, 36, 6, 1, "yellow");
      this.drawRect(20, 28, 18, 2.5, "yellow");
    }
  }

  drawLayer6() {
    if (this.Layer >= 6) {
      this.drawRect(6, 69, 6, 47, "blue");
      this.drawRect(22, 63, 3, 50, "blue");
      this.drawRect(28.5, 37, 3, 2, "yellow");
      this.drawRect(13, 32, 1, 10, "black");
      this.drawRect(35, 48, 0.5, 20, "black");
    }
  }

  drawLayer7() {
    if (this.Layer >= 7) {
      this.drawRect(14, 69, 3, 33, "red");
      this.drawRect(20, 66, 2, 45, "red");
    }
  }

  drawLayer8() {
    if (this.Layer >= 8) {
      this.drawRect(7.5, 66, 3, 6, "yellow");
      this.drawRect(17, 69, 0.5, 33, "black");
      this.drawRect(19.5, 72, 0.5, 51, "black");
      this.drawRect(25, 63, 0.5, 50, "black");
    }
  }

  draw() {
    push();
    translate(secondSegStart, 0); 
    this.drawLayer1();
    this.drawLayer2();
    this.drawLayer3();
    this.drawLayer4();
    this.drawLayer5();
    this.drawLayer6();
    this.drawLayer7();
    this.drawLayer8();
    pop();
  }
}

class ThirdBuilding {
  constructor() {
    this.Layer = 1; 
  }

  setLayer(layer) {
    this.Layer = layer;
  }

  drawRect(x, y, w, h, c) {
    fillColour(c);
    rect(x * rectWidth, windowHeight - y * rectHeight, w * rectWidth, h * rectHeight);
  }

  drawLayer1() {
    if (this.Layer >= 1) {
      this.drawRect(6, 20, 3, 20, "white");
      this.drawRect(4, 20, 2, 20, "yellow");
      this.drawRect(2, 8, 5, 5, "blue");
      this.drawRect(8, 20, 12, 20, "blue");
      this.drawRect(9, 16, 4, 11, "red");
    }
  }

  drawLayer2() {
    if (this.Layer >= 2) {
      this.drawRect(20, 20, 1, 8, "yellow");
      this.drawRect(21, 20, 9, 8, "red");
      this.drawRect(20, 12, 18, 12, "white");
      this.drawRect(26, 17, 10, 8, "blue");
    }
  }

  drawLayer3() {
    if (this.Layer >= 3) {
      this.drawRect(8, 54, 8, 7, "red");
      this.drawRect(17, 54, 14, 21, "blue");
      this.drawRect(31, 46, 5, 13, "red");
      this.drawRect(23, 53, 6, 6, "red");
      this.drawRect(25, 51, 2, 2, "yellow");
    }
  }

  drawLayer4() {
    if (this.Layer >= 4) {
      this.drawRect(5, 43, 17, 19, "white");
      this.drawRect(26, 33, 7, 8, "white");
      this.drawRect(2, 39, 8, 14, "red");
      this.drawRect(12, 42, 3, 14, "blue");
      this.drawRect(7, 42, 1, 17, "yellow");
      this.drawRect(1, 22, 33, 2, "black");
      this.drawRect(19, 20, 1, 20, "black");
    }
  }

  drawLayer5() {
    if (this.Layer >= 5) {
      this.drawRect(27, 15, 6, 2, "yellow");
      this.drawRect(10, 42, 1, 17, "yellow");
      this.drawRect(22, 33, 4, 9, "yellow");
      this.drawRect(1, 25, 33, 3, "yellow");
    }
  }

  drawLayer6() {
    if (this.Layer >= 6) {
      this.drawRect(3, 66, 22, 9, "blue");
      this.drawRect(27, 67, 9, 10, "white");
      this.drawRect(16, 54, 1, 7, "black");
      this.drawRect(7, 55, 32, 1, "black");
      this.drawRect(4, 43, 13, 1, "black");
      this.drawRect(4, 47, 13, 4, "yellow");
    }
  }

  drawLayer7() {
    if (this.Layer >= 7) {
      this.drawRect(1, 75, 19, 13, "white");
      this.drawRect(10, 71, 5, 9, "blue");
      this.drawRect(3, 79, 5, 8, "red");
      this.drawRect(5, 77, 3, 2, "yellow");
      this.drawRect(7, 77, 10, 3, "red");
    }
  }

  drawLayer8() {
    if (this.Layer >= 8) {
      this.drawRect(23, 80, 9, 9, "red");
      this.drawRect(22, 68, 16, 1, "black");
      this.drawRect(7, 57, 32, 2, "yellow");
      this.drawRect(22, 71, 16, 3, "yellow");
      this.drawRect(24, 68, 2, 11, "yellow");
      this.drawRect(0, 3, 40, 3, "yellow");
    }
  }

  draw() {
    push();
    translate(thirdSegStart, 0); 
    this.drawLayer1();
    this.drawLayer2();
    this.drawLayer3();
    this.drawLayer4();
    this.drawLayer5();
    this.drawLayer6();
    this.drawLayer7();
    this.drawLayer8();
    pop();
  }
}

class FourthBuilding {
  constructor() {
    this.Layer = 1; 
  }

  setLayer(layer) {
    this.Layer = layer;
  }

  drawRect(x, y, w, h, c) {
    fillColour(c);
    rect(x * rectWidth, windowHeight - y * rectHeight, w * rectWidth, h * rectHeight);
  }

  drawLayer1() {
    if (this.Layer >= 1) {
      this.drawRect(2, 16, 12, 15, "red");
      this.drawRect(17, 14, 11, 13, "blue");
      this.drawRect(8, 8, 18, 7, "white");
      this.drawRect(5, 6, 5, 5, "yellow");
      this.drawRect(22, 7, 2, 6, "red");
      this.drawRect(24, 9, 5, 8, "white");
      this.drawRect(24, 7, 14, 6, "blue");
      this.drawRect(34, 6, 3, 2, "yellow");
    }
  }

  drawLayer2() {
    if (this.Layer >= 2) {
      this.drawRect(3, 25, 9, 8, "white");
      this.drawRect(12, 27, 6, 10, "blue");
      this.drawRect(15, 22, 12, 5, "white");
      this.drawRect(28, 23, 8, 6, "red");
      this.drawRect(32, 21, 3, 2, "yellow");
      this.drawRect(8, 19, 5, 3, "yellow");
      this.drawRect(2, 16, 12, 0.5, "black");
      this.drawRect(10, 6, 0.5, 5, "black");
    }
  }

  drawLayer3() {
    if (this.Layer >= 3) {
      this.drawRect(12, 35, 7, 8, "blue");
      this.drawRect(5, 31, 15, 3, "red");
      this.drawRect(6, 30, 3, 1, "yellow");
      this.drawRect(9, 33, 3, 5, "blue");
      this.drawRect(26, 32, 12, 5, "red");
      this.drawRect(27, 32, 1, 15, "blue");
      this.drawRect(27, 32.5, 15, 0.5, "yellow");
      this.drawRect(35, 36, 4, 8, "blue");
      this.drawRect(36, 35, 2, 2, "yellow");
      this.drawRect(12, 25, 0.5, 6, "black");
      this.drawRect(28, 23, 0.5, 6, "black");
    }
  }

  drawLayer4() {
    if (this.Layer >= 4) {
      this.drawRect(3, 36, 18, 1, "yellow");
      this.drawRect(10, 42, 6, 6, "blue");
      this.drawRect(13, 39, 8, 3, "white");
      this.drawRect(22, 62, 3, 35, "red"); 
      this.drawRect(23, 61, 1, 3, "yellow");
      this.drawRect(9, 48, 12, 6, "blue");
      this.drawRect(18, 60, 1, 18, "white");
      this.drawRect(19, 64, 1, 14, "blue");
      this.drawRect(20, 62, 1, 14, "red");
      this.drawRect(2, 49, 16, 1, "yellow");
    }
  }

  drawLayer5() {
    if (this.Layer >= 5) {
      this.drawRect(10, 62, 5, 13, "white");
      this.drawRect(13, 54, 5, 5, "red");
      this.drawRect(26, 50, 7, 8, "white");
      this.drawRect(32, 48, 2, 5, "yellow");
      this.drawRect(24, 47, 5, 4, "blue");
      this.drawRect(28, 57, 1, 6, "white");
      this.drawRect(29, 54, 5, 3, "blue");
      this.drawRect(31, 53, 2, 1, "yellow");
      this.drawRect(14, 35, 0.5, 18, "black");
      this.drawRect(27, 32, 0.5, 15, "black");
      this.drawRect(27, 14, 0.5, 12, "black");
      this.drawRect(14, 27, 4, 0.5, "black");
    }
  }

  drawLayer6() {
    if (this.Layer >= 6) {
      this.drawRect(22, 42, 0.5, 15, "black");
      this.drawRect(22, 42, 3, 0.5, "black");
      this.drawRect(9, 48, 9, 0.5, "black");
      this.drawRect(27, 32, 8, 0.5, "black");
      this.drawRect(10, 42, 6, 0.5, "black");
      this.drawRect(0, 3, 40, 2, "yellow");
      this.drawRect(0, 17, 35, 1, "yellow");
      this.drawRect(0, 3, 40, 2, "yellow");
    }
  }

  drawLayer7() {
    if (this.Layer >= 7) {
      this.drawRect(25, 46, 3, 1, "yellow");
      this.drawRect(22, 51, 14, 1, "yellow");
      this.drawRect(0, 3, 40, 2, "yellow");
      this.drawRect(0, 17, 35, 1, "yellow");
      this.drawRect(0, 28, 40, 1, "yellow");
      this.drawRect(12, 35, 2, 18, "yellow");
    }
  }

  drawLayer8() {
    if (this.Layer >= 8) {
      this.drawRect(22, 53, 3, 3, "yellow");
      this.drawRect(26, 55, 1, 4, "blue");
      this.drawRect(27, 58, 1, 7, "yellow");
      this.drawRect(25, 36, 2, 34, "yellow");
      this.drawRect(7, 43, 31, 1, "yellow");
      this.drawRect(21, 68, 1, 40, "yellow");
    }
  }

  draw() {
    push();
    translate(fourthSegStart, 0);
    this.drawLayer1();
    this.drawLayer2();
    this.drawLayer3();
    this.drawLayer4();
    this.drawLayer5();
    this.drawLayer6();
    this.drawLayer7();
    this.drawLayer8();
    pop();
  }
}

let firstBuilding;
let secondBuilding;
let thirdBuilding;
let fourthBuilding;

  function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  
    // Calculate the start positions and widths for the second, third, and fourth segments
    secondSegStart = width / 4;  
    secondSegWidth = width / 2 - secondSegStart;  
    thirdSegStart = width / 2;  
    thirdSegWidth = width / 4 * 3 - thirdSegStart;
    fourthSegStart = width / 4 * 3;
    fourthSegWidth = width - fourthSegStart;
    
    minHeight = height / 4;
    maxHeight = height - minHeight;
    rectWidth = secondSegWidth / 40; 
    rectHeight = maxHeight / 80;

    firstBuilding = new FirstBuilding;
    secondBuilding = new SecondBuilding;
    thirdBuilding = new ThirdBuilding;
    fourthBuilding = new FourthBuilding;
  }

  function draw() {
    background(220);

    if (frameCount > 40 && Layer < 1) {
      Layer = 1;
      firstBuilding.setLayer(1); 
      secondBuilding.setLayer(1); 
      thirdBuilding.setLayer(1);  
      fourthBuilding.setLayer(1); 
    }
    if (frameCount > 80 && Layer < 2) {
      Layer = 2;
      firstBuilding.setLayer(2); 
      secondBuilding.setLayer(2); 
      thirdBuilding.setLayer(2);  
      fourthBuilding.setLayer(2);
    }
    if (frameCount > 120 && Layer < 3) {
      Layer = 3;
      firstBuilding.setLayer(3); 
      secondBuilding.setLayer(3); 
      thirdBuilding.setLayer(3);  
      fourthBuilding.setLayer(3); 
    }
    if (frameCount > 160 && Layer < 4) {
      Layer = 4;
      firstBuilding.setLayer(4); 
      secondBuilding.setLayer(4); 
      thirdBuilding.setLayer(4);  
      fourthBuilding.setLayer(4); 
    }
    if (frameCount > 200 && Layer < 5) {
      Layer = 5;
      firstBuilding.setLayer(5); 
      secondBuilding.setLayer(5); 
      thirdBuilding.setLayer(5);  
      fourthBuilding.setLayer(5); 
    }
    if (frameCount > 240 && Layer < 6) {
      Layer = 6;
      firstBuilding.setLayer(6); 
      secondBuilding.setLayer(6); 
      thirdBuilding.setLayer(6);  
      fourthBuilding.setLayer(6);
    }
    if (frameCount > 280 && Layer < 7) {
      Layer = 7;
      firstBuilding.setLayer(7); 
      secondBuilding.setLayer(7); 
      thirdBuilding.setLayer(7);  
      fourthBuilding.setLayer(7);
    }

    if (frameCount > 320 && Layer < 8) {
      Layer = 8;
      firstBuilding.setLayer(8); 
      secondBuilding.setLayer(8); 
      thirdBuilding.setLayer(8);  
      fourthBuilding.setLayer(8);
    }

    firstBuilding.draw();
    secondBuilding.draw();
    thirdBuilding.draw();
    fourthBuilding.draw();

    // Yellow floor
    fillColour("yellow");
    rect(0, height-rectHeight*2, width, rectHeight*2);

  }

  function windowResized() {
    // Resize the canvas to match the new window size
    resizeCanvas(windowWidth, windowHeight);
    
    secondSegStart = windowWidth / 4;
    secondSegWidth = windowWidth / 2 - secondSegStart;
    thirdSegStart = windowWidth / 2;
    thirdSegWidth = windowWidth / 4 * 3 - thirdSegStart;
    fourthSegStart = width / 4 * 3;
    fourthSegWidth = width - fourthSegStart;
    
    minHeight = windowHeight / 4;
    maxHeight = windowHeight - minHeight;
    rectWidth = secondSegWidth / 40;
    rectHeight = maxHeight / 80;
  }