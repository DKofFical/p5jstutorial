// part 1
// imagine you have the power of god in a programming world
// you create a variable (think container) out of thin air

var buttonNothing;
var buttonHoverOver;
var buttonClick;
var blep;
var imgCatInMug
var button2X;
var button2Y;
var qwerty

function preload()
{
	// part 2
	// now that you have created a variable it is time to put some 
	// data into the variable, the code below does that

	imgCatInMug = loadImage('https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%203.1/CatInMug.png');
	buttonClick = loadImage('https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%203.1/buttonClick.png');
	buttonHoverOver = loadImage('https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%203.1/buttonHoverOver.png');
  	buttonNothing = loadImage('https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%203.1/buttonNothing.png');
  	blep = loadImage('https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%203.1/abc.png')
  	qwerty = loadImage('https://dkoffical.github.io/p5jstutorial/p5js%20Tutorial%203.1/rhino.png')

}

function setup()
{
	createCanvas(800,600);

	button2X = 1;
	button2Y = 1;
}

function draw()
{
	background(125,125,125)


	// part 3
	// show the contents of the variable on the canvas
	// image(imageVariable,x,y,length,height)

	





	// the code below shows you how you can
	// use images to represent buttons

	if (mouseX > button2X && mouseX < button2X + 200 && mouseY > button2Y && mouseY < button2Y+50)
	{
		image(buttonHoverOver,button2X,button2Y);
		image(qwerty,10,150,1060/3,702/3);
		if (mouseIsPressed)
		{
			image(buttonClick,button2X,button2Y);
			image(imgCatInMug,10,150,1060/3,702/3);
		}
	}
	else
	{
		image(buttonNothing,button2X,button2Y);
		image(blep,10,150,1060/3,702/3);
	}


}
