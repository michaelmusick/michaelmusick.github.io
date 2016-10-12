/**
* @Author: Musick, Michael <michaelmusick>
* @Date:   04-03-2016 16:11
* @Email:  michael@michaelmusick.com
* @Last modified by:   michaelmusick
* @Last modified time: 12-10-2016 12:49

Automatic PacMan Example

*/

// Define an empty PacMan object Array
var pacmans = [];
var numPacMans = 4;

function setup() {
	createCanvas(1000, 600);

	// create some pacmans
	for (var i = 0; i < numPacMans; i++) {
		pacmans[i] = new PacMan(30+(i*120), 200);
	}
}

function draw() {
	background(200);

	for (var i = 0; i < pacmans.length; i++) {
		pacmans[i].draw();
	}
}

// TODO: finish the check position 
function checkPos(obj1, obj2) {
	if( dist( obj1.xpos, obj1.ypos, obj2.xpos, obj2.ypos) <= obj1.radius + obj2.radius ){
		obj1.tempHold
	}
}
