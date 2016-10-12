/**
* @Author: Musick, Michael <michaelmusick>
* @Date:   12-10-2016 09:43
* @Email:  michael@michaelmusick.com
* @Last modified by:   michaelmusick
* @Last modified time: 12-10-2016 09:53

Astroid Class

*/

function Astroid(size){
	this.objSize = size;
	this.objRad = this.objSize / 2;
	this.xPos = random(0, width);
	this.yPos = random(0,height);
	this.fillAlpha = random(100);
	this.fillColor = color(random(256),random(256),random(256),this.fillAlpha);
}

Astroid.prototype.drawAstroid = function () {

	push();

	translate(this.xPos, this.yPos);

	fill(this.fillColor);
	ellipse(0,0,this.objSize,this.objSize);

	pop();

};

Astroid.prototype.move = function () {

};
