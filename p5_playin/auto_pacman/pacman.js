


// constructor for PacMan
function PacMan(xpos, ypos) {

	// shape
	this.diam = 80;
	this.radius = this.diam / 2;
	this.eyePos = this.diam / 7;
	this.eyeDiam = this.diam / 8;
	this.mouthAngle = (1/6);
	this.mouthChange = 1/128;

	//  position and movement
	this.xpos = xpos;
	this.ypos = ypos;
	this.direction = 0;
	this.change = 0;
	this.xChange = 0;
	this.yChange = 0;
	this.maxDirChange = 4;

	// timing
	this.curTime = 0;
	this.maxTime = 4;
	this.targetTime = random(this.maxTime);

}

PacMan.prototype.draw = function () {
	// call move
	this.timer();
	this.move();

	push();
	translate( this.xpos, this.ypos );

	// check direction
	if ( this.direction === 0 ) {
		// do nothing
	} else if ( this.direction === 1 ) {
		rotate(PI/2);
	} else if ( this.direction === 2 ) {
		scale(-1, 1);
	} else if ( this.direction === 3 ) {
		rotate(-PI/2);
	}

	// draw the pacman
	fill(color("Yellow"));
	arc( 0, 0, this.diam, this.diam, PI*this.mouthAngle, -PI*this.mouthAngle, PIE );

	fill(color("Black"));
	arc( this.eyePos, -this.eyePos * 2, this.eyeDiam, this.eyeDiam, PI*(1/6), -PI*(1/6), PIE );


	pop();
};

//  Moe Function
PacMan.prototype.move = function () {

	// update position
	this.xpos += this.xChange;
	this.ypos += this.yChange;

	//  mouth animation
	this.mouthAngle = this.mouthAngle + ( this.mouthChange * this.change);
	if( this.mouthAngle > (1/6) ){
		this.mouthChange = -this.mouthChange;
		this.mouthAngle = (1/6);
	}
	if( this.mouthAngle < 0.01 ){
		this.mouthChange = -this.mouthChange;
		this.mouthAngle = 0.03;
	}


	// edge check
	if( this.xpos+this.radius >= width ){
		this.xpos = width-this.radius;
		this.xChange = 0;
	} else if ( this.xpos-this.radius <= 0 ){
		this.xpos = 0+this.radius;
		this.xChange = 0;
	}

	if ( this.ypos+this.radius >= height ){
		this.ypos = height-this.radius;
		this.yChange = 0;
	} else if ( this.ypos-this.radius <= 0 ){
		this.ypos = 0+this.radius;
		this.yChange = 0;
	}
};

// Timer
PacMan.prototype.timer = function () {
	var curTime = this.curTime / frameRate();
	if ( curTime >= this.targetTime ){
		// change direction and update timer
		this.changeDirection();
	} else {
		this.curTime++;
	}
};

PacMan.prototype.changeDirection = function () {
	var newDirection;

	// reset timer
	this.curTime = 0;
	this.targetTime = random(this.maxTime);

	// choose a new direction
	do {
		newDirection = floor( random(4) );
	} while ( newDirection == this.direction );

	this.direction = newDirection;

	this.change = random(this.maxDirChange);
	if (newDirection === 0){
		// East
		this.xChange = this.change;
		this.yChange = 0;
	} else if (newDirection === 1){
		// South
		this.xChange = 0;
		this.yChange = this.change;
	} else if (newDirection === 2){
		// West
		this.xChange = -this.change;
		this.yChange = 0;
	} else if (newDirection === 3){
		// North
		this.xChange = 0;
		this.yChange = -this.change;
	}
};
