

var button2X;
var button2Y;

function setup()
{
  createCanvas(700,500);
  button2X = 500;
  button2Y = 400;

  
}

function draw()
{
	background(128,255,0)


	if (mouseX > 0 && mouseX < 0+200 && mouseY > 400 && mouseY < 400+100)
	{
		fill(255,0,0);
		stroke(0,0,0);
		strokeWeight(3);
		rect(0,400,200,100);	
	}
	else
	{
		fill(0,0,255);
		stroke(255,255,255);
		strokeWeight(3);
		rect(0,400,200,100);
	}

	fill(255,255,255);
	stroke(0,0,0);
	textSize(30);
	text("Douglas",45,460);





	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+100)
	{

		fill(255,128,0);
		stroke(0,0,0)
		rect(button2X,button2Y,200,100)
		fill(255,255,255);
		stroke(51,70,190);
		textSize(40);
		text("Kwok",button2X+60-10,button2Y+60+5);
	}
	else
	{

		fill(128,0,255);
		stroke(0,0,0);
		rect(button2X,button2Y,200,100);
		fill(255,255,255);
		stroke(0,0,0);
		textSize(30);
		text("Kwok",button2X+60,button2Y+60);

	}

}