var buttonMainMenuEasy;
var imageMainMenuTitle;
var buttonMainMenuMedium;
var buttonMainMenuHard;


var buttonMainMenuEasyX;
var buttonMainMenuEasyY;
var buttonMainMenuMediumX;
var buttonMainMenuMediumY;
var buttonMainMenuHardX;
var buttonMainMenuHardY;


function preloadMainMenu()
{
	buttonMainMenuEasy = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonEasy.png');
	imageMainMenuTitle = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/titleMainMenu.png');	
	buttonMainMenuMedium = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonMedium.png');
	buttonMainMenuHard = loadImage('https://bleungwpg.github.io/p5jsTutorial3.2/images/buttonHard.png');	
}

function setupMainMenu()
{
	
	buttonMainMenuEasyX = 200;
	buttonMainMenuEasyY = 110;
	buttonMainMenuMediumX = 200;
	buttonMainMenuMediumY = 260;
	buttonMainMenuHardX = 200;
	buttonMainMenuHardY = 410;

}

function drawMainMenu()
{
	background(255,125,0)

	image(imageMainMenuTitle,400,10);

	image(buttonMainMenuEasy,buttonMainMenuEasyX,buttonMainMenuEasyY);

	if (mouseX > buttonMainMenuEasyX && mouseX < buttonMainMenuEasyX + 200 && mouseY > buttonMainMenuEasyY && mouseY < buttonMainMenuEasyY+50 && mouseIsPressed)
	{
		canvasID = -2;
	}

	image(buttonMainMenuMedium,buttonMainMenuMediumX,buttonMainMenuMediumY);

	if (mouseX > buttonMainMenuMediumX && mouseX < buttonMainMenuMediumX + 200 && mouseY > buttonMainMenuMediumY && mouseY < buttonMainMenuMediumY+50 && mouseIsPressed)
	{
		canvasID = -3;
	}

	image(buttonMainMenuHard,buttonMainMenuHardX,buttonMainMenuHardY);

	if (mouseX > buttonMainMenuHardX && mouseX < buttonMainMenuHardX + 200 && mouseY > buttonMainMenuHardY && mouseY < buttonMainMenuHardY+50 && mouseIsPressed)
	{
		canvasID = -4;
	}



}