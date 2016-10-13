/**
* @Author: Musick, Michael <michaelmusick>
* @Date:   04-03-2016 16:11
* @Email:  michael@michaelmusick.com
* @Last modified by:   michaelmusick
* @Last modified time: 12-10-2016 20:41

Automatic PacMan Example
*/

// Define an empty PacMan object Array
var pacmans = [];
var numPacMans = 12;

// setup function
function setup() {
	createCanvas(1000, 600);

	// create some pacmans
	for (var i = 0; i < numPacMans; i++) {
		pacmans[i] = new PacMan((i+1)*80, 200);
	}
}

// draw loop
function draw() {
	var tempArr = [];
	background(200);

	// update pacman positions
	for (var i = 0; i < pacmans.length; i++) {
		// check neihbors by passing in an array of other PacMan's
		tempArr = pacmans.slice(0,i);
		tempArr = tempArr.concat( pacmans.slice(i+1, pacmans.length) );
		pacmans[i].checkPos( tempArr );

		pacmans[i].draw();
	}

}
