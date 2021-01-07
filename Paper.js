class Paper{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.body = Bodies.rectangle(x, y,20,20,{isStatic:false} );
        this.width = 20;
        this.height = 20;

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        strokeWeight(3);
        stroke("black");
        fill("purple");
        rect(0, 0, this.width, this.height);
        pop();
      }
    }