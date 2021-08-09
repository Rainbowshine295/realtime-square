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
    }
}

function draw() {
    background('#4287f5');
}