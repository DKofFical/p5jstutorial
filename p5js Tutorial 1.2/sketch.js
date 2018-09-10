function setup()
{
  createCanvas(700,500);
  
}

function draw()
{
	background(0,250,184)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(144,144,25);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(200,29,33);

	// modifies the thickness of the border of an object
	strokeWeight(5);


	rect(10,10,200,100);
	rect(10,120,200,100);


	fill(50,55,50);    
	stroke(235,25,69);
	strokeWeight(5);

	rect(220,10,200,100);
	rect(220,120,200,100);	

}