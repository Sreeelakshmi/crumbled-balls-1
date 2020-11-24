/*class Box {
    constructor(x,y) {
      this.x=x;
      this.y=y;
      this.boxWidth=200;
      this.BoxHeight=100;
      this.thickness=20;
      this.angle=0;
      this.bottombody= Bodies.rectangle(this.x,this.y,this.boxWidth,this.thickness,{isStatic:true});
      this.leftbody= Bodies.rectangle(this.x-this.boxWidth/2,this.y-this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:true});
      this.rightbody= Bodies.rectangle(this.x+this.boxWidth/2,this.y-this.boxHeight/2,this.thickness,this.boxHeight,{isStatic:true});
     Matter.Body.setAngle(this.leftbody,this.angle);
     Matter.Body.setAngle(this.rightbody,-1*this.angle);
      
      World.add(world, this.bottombody);
      World.add(world, this.rightbody);
      World.add(world, this.leftbody);
    }
    display(){
      var pos =this.bottombody.position;
      var posleft =this.leftbody.position;
      var posright =this.rightbody.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(0,0, this.boxWidth, this.thickness);
      pop();
      push();
      translate(posleft.x,posleft.y);
      rectMode(CENTER);
      rotate(this.angle)
      rect(0,0, this.thickness, this.boxHeight);
      pop();
      push();
      translate(posright.x,posright.y);
      rectMode(CENTER);
      rotate(-1*this.angle)
      rect(0,0, this.thickness, this.boxHeight);
      pop();
    }
  };*/
  class Box
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
		this.angle=0;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			//angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			//angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}