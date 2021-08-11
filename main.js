    noseX = 0;
    noseY = 0;

    leftWristX = 0;
    rightWristX = 0;
    difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(450, 450);
    canvas.position(575, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is initialised :)");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        console.log("Nose x = " + noseX + " , Nose y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
        console.log("Left wrist x = " + leftWristX + " , Right wrist x = " +rightWristX + " , Difference = " + difference);
        
    }
}

function draw() {
    background('#4287f5');
    fill('#fcf403');
    stroke('#fc8403');
    square(noseX , noseY, difference);

    document.getElementById("square_side").innerHTML = "Width and height of a square will be = "+ difference + "px";

}