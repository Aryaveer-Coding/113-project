function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 480);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(30, 30, 40);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(610, 30, 40);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(30, 450, 40);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(610, 450, 40);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(50, 20, 540, 20);
    rect(50, 440, 540, 20);
    rect(20, 50, 20, 380);
    rect(600, 50, 20, 380);

    
   
}    

function take_snapshot()
{
    save('student_name.png');
}
