function setup()
{
  //create a drawing service 700px wide, 500px tall
  createCanvas(700,500);
  
}

function draw()
{
  //create a background using RGB values
  background(25,100,25)

  // change the paint brush to a specific color according to RGB values
  fill(255,0,0);
  

  // create a rectangle at x,y coordinates 10,10 with length x height at 100 x 50
  rect(0,0,200,100);
  fill(0,0,255);
  rect(500,0,200,100);
  fill(134,139,209);
  rect(0,400,200,100);
  fill(0,233,250);
  rect(500,400,200,100);
  fill(0,0,0);
  rect(250,200,200,100)
    
}