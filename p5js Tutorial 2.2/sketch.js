var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 200;
  button2Y = 100;

  
}

function draw()
{
	background(255,255,0)


	// Example 1: easy to understand - Start

	if (mouseX > 200 && mouseX < 200 + 100 && mouseY > 10 && mouseY < 10+50)
	{
		fill(255,200,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		text("Shanghai",215,40);		
		if (mouseIsPressed == true)
		{
			fill(47,247,114);
			stroke(0,0,0);
			strokeWeight(3);
			rect(200,10,100,50);
			fill(255,255,255);
			stroke(0,0,0);
			text("Academy",215,40);					
		}
	}
	else
	{
		fill(255,200,200);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,10,100,50);
		fill(255,255,255);
		stroke(0,0,0);	
		text("Victoria",215,40);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);

	// Example 1: easy to understand - End

	if (mouseX > 200 && mouseX < 200 + 100 && mouseY > 100 && mouseY < 100+50)
	{
		fill(0,255,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,100,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		text("Amazon",215,130);		
		if (mouseIsPressed == true)
		{
			fill(255,0,0);
			stroke(0,0,0);
			strokeWeight(3);
			rect(200,100,100,50);
			fill(255,255,255);
			stroke(0,0,0);
			text("Nile",215,130);					
		}
	}
	else
	{
		fill(150,0,150);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,100,100,50);
		fill(255,255,255);
		stroke(0,0,0);	
		text("Danube",215,130);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);

	//3rd code


	if (mouseX > 200 && mouseX < 200 + 100 && mouseY > 190 && mouseY < 190+50)
	{
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,190,100,50);
		fill(255,255,255);
		stroke(0,0,0);
		text("Joy",215,220);		
		if (mouseIsPressed == true)
		{
			fill(255,192,203);
			stroke(0,0,0);
			strokeWeight(3);
			rect(200,190,100,50);
			fill(255,255,255);
			stroke(0,0,0);
			text("Virtue",215,220);					
		}
	}
	else
	{
		fill(0,0,255);
		stroke(0,0,0);
		strokeWeight(3);
		rect(200,190,100,50);
		fill(255,255,255);
		stroke(0,0,0);	
		text("Peace",215,220);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(12);


	// Example 2: less code but harder to understand - Start




	// Example 2: less code but harder to understand - End


}