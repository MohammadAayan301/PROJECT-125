
difference = 0;
leftwristx = 0;
rightwristx = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
    background('#ff9100');
    document.getElementById("square_side").innerHTML="FONT SIZE OF THE TEXT WILL BE = " + difference + "px";
    fill('#023047');
   text('MOHAMMAD AAYAN' , 50 , 400);
   textSize(difference);
}

function modelLoaded() {
    console.log("POSENET IS INITIALIZED!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("leftwristx = " + leftwristx + " rightwristx = " + rightwristx + " difference = " + difference);
    }
}
