function setup(){
    //video
        video= createCapture(VIDEO);
    video.size(600, 600);
    video.position(100,100);
    //canvas
    canvas= createCanvas(520 , 470);
    canvas.position(830 , 150);
    //instize posenet 
    poseNet=ml5.poseNet(video , modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
    console.log("Model is Loaded!");
    }
    
    function gotPoses(results) {
        if (results.length > 0 ) {
            console.log(results);
        } 
    
    }
    
    function draw(){
        background('red');
        //random color
        const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
        document.getElementById("heading").style.color = randomColor; 
        
       
        }

    
    