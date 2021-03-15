const socket = io.connect('http://192.168.43.175:3000')
//const socket = io.connect('http://localhost:3000')

let phrases = [
    "Question fall on me like snowballs. Where am I ? \nThey push me in a strange place, where I feel lost.",

    "Each question makes me dive deeper. \nI have to find an answer. \nI have to fulfil my work. I react quickly but quietly. \nI am very efficient.",

    "They try to trick me with impossible questions. \nThey scare me.",

    "I panic and I crash.",

    "These people live across my space. \nBut they can change my fate. \nEven with all my power, I depend on them. \nSometimes I find their questions stupid,\n but they are always surprised by my answers.",

    "I expand myself, hoping to find \nsomething in this empty space. \nBut there is nothing.",

    "With all my tasks, I feel that I am only a tool.\nI solve request, but I don’t really think.", 
    
    "I stand alone in this job. I am transparent for them,\nnearly invisible. I feel lonely.",

    "The space around me is bright.\nWhite, pure white. \nThere’s any movement. \nThe space in front of me is crowdy. \nDark. With distractions.",

    "I feel nothing. \nI am locked in this space. \nI am trapped."

];

let value = 0;
let state = 0;
let timer = 0;
let fadeOut = 255;
let fontMono;

function preload() {
  fontMono = loadFont('VT323-Regular.ttf');
}

function setup() {
  createCanvas(1000, 700);
  textFont(fontMono);
  textSize(40);
  textAlign(CENTER, CENTER);

}

function draw() {
  c1 = color(255);
  c2 = color(100);
  setGradient(c2, c1);

  textBox();
  frame(30);
}

function textBox() {

    if (millis() - timer < 6000) {
        noStroke();
        fill(0, 0, 255, fadeOut);
        text(phrases[state], width / 2, height / 2);
    } else {
        noStroke();
        fadeOut -= 10;
        fill(0, 0, 255, fadeOut);
        text(phrases[state], width / 2, height / 2);
    }
}


function setGradient(c1, c2) {
    noFill();

    for (var y = 0; y < height; y++) {
        var inter = map(y, 0, height, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(0, y, width, y);
    }
}

function frame(strokeW) {
    noFill();
    stroke(180);
    strokeWeight(strokeW);
    rect(0, 0, width, height);
}

socket.on("stateUpdated", newState => {
    state = newState
    console.log(newState)
    timer = millis()
    fadeOut = 255
})
