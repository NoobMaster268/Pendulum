let len=350, time=0;
const w=6;
let T = 2 * Math.PI / w;
let x = [], y = [], theta = [];
let Nball; 
let n;

for(let i=0; i<10; i++){
    theta[i] = Math.PI/2;
}

function setup(){
    textSize(50);
    createP('No. of Balls :');
    slider1 = createSlider(1, 10, 4, 1);
    slider1.position(150,15);
    createP('No. of Balls dropped :');
    slider2 = createSlider(1, 10, 1, 1);
    slider2.position(150,50);
    createCanvas(1100, 600);
    
}

function draw(){
    background(0);
    translate(width/2, height/4);
    stroke(255);
    fill("red");
    rect(- Nball*25, 0, Nball*50, 10);
    translate(-(Nball-1)*25,10);

    Nball = slider1.value();
    n = slider2.value();

    for(let i=0; i<Nball; i++){
        x[i] = 50*i + len * cos(theta[i]);
        y[i] = len * sin(theta[i]);
        strokeWeight(2);
        line(50*i, 0, x[i], y[i]);
        strokeWeight(3);
        ellipse(x[i], y[i], 50);

    }
    for(let k=0; k<100; k++){
        for(let i=0; i<n; i++){

            if( (Math.floor(4*time/T))%4 == 0
            || (Math.floor(4*time/T))%4 == 3){
                theta[i] = Math.PI/2 + Math.PI/4 * cos(w*time);
                for(let j=n; j<Nball; j++)
                theta[j] = Math.PI/2;
            }
            else{
                theta[Nball-i-1] = Math.PI/2 + Math.PI/4 * cos(w*time);
                for(let j=0; j<Nball-n; j++)
                theta[j] = Math.PI/2;
            }
            time += 0.00005/n;
        }
    }
    translate((Nball-1)*25,0);
    fill("orange");
    textSize(30);
    strokeWeight(1);
    text("No. of Balls : "+Nball, -100, -40);
}