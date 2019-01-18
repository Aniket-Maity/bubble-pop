let bubbles = [];
var NoOfBubble = 10;
var startSec;
var x;
var scoreEle;

function setup() {
	cnv = createCanvas(500,500);
	cnv.parent('sketch-holder');
	background(104);
	// bubbles[0] = new Bubble(50,100,30);
	// bubbles[1] = new Bubble(100,200,50);
	for(let i=0;i<NoOfBubble;i++){
		bubbles[i] = new Bubble(random(0,400),random(0,400),20,i);
	}
	cnv.mouseClicked(removeElement);
	// print(bubble.x,bubble.y);
	startSec = millis();
	x = false;
	scoreEle = document.getElementById('score');
}


function draw(){
	background(0);
	// bubbles[0].move();
	// bubbles[0].show();
	// bubbles[1].move();
	// bubbles[1].show();
	frameRate(10);
	for(let i=0;i<bubbles.length;i++){
			bubbles[i].move();
			bubbles[i].show();
		}
	//print(bubbles.length);
	if(bubbles.length == 0 && x==false){
		print(round((millis()-startSec)/1000));
		print("Game Over");
		x=true;
		scoreEle.innerHTML = "Score: "+ round((millis()-startSec)/1000) + " Game Over";
	}
	else if(x==false && bubbles.length>0){
		scoreEle.innerHTML = "Score: "+ round((millis()-startSec)/1000);
	}

}

function removeElement() {
  //bubbles.pop();
	//NoOfBubble=NoOfBubble-1;
	//alert(mouseX+" "+mouseY);
	//bubbles.splice( list.indexOf('foo'), 1 );
	for( var i = bubbles.length; i--;){
		maxX= mouseX+40
		minX = mouseX-40
		maxY = mouseY+40
		minY = mouseY-40
		if ( bubbles[i].x >= minX && bubbles[i].x <= maxX && bubbles[i].y >=minY && bubbles[i].y <= maxY) {
			bubbles.splice(i, 1);
			print("removed");
		}
	}
}


class Bubble {
	//var id;
	constructor(x,y,r,id) {
		this.x = x;
		this.y= y;
		this.r= r;
		this.id = id;
	}
	move(){
		this.x= this.x + random(-5,5);
		this.y= this.y + random(-5,5);
	}
	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}
}
