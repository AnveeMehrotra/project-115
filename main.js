moustache=0;


function preload(){

}
function setup(){
canvas=createCanvas(500,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();


poseNet=ml5.poseNet(video, modelLoad);
poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Model initialized");
}

function draw(){
image(video, 0, 0, 500,400)
}

function take_snapshot(){
save('myPicture.png');
}

function gotPoses(results){
    if(results.length>0){
console.log(results);

 console.log("'x' coordinate=" + results[0].pose.nose.x);
 console.log("'y' coordinate=" + results[0].pose.nose.y)
    }
}