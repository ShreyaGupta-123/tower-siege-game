class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0,
            friction:3,
            density:1.2
        }
         
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
        this.Visibility=255;
        
    } 
    score(){
        if(this.Visibility<0 && this.Visibility>-1005){
            score=score+1
        }
    }

    
    display(){
        var position=this.body.position;
        if (this.body.velocity.x<0.2){
        push();
        translate(position.x,position.y);
        rectMode(CENTER);
        fill("red")
        rect(0,0,this.width,this.height);
            pop();
        }
        else{
            World.remove(world,this.body);
            push();
            this.Visibility=this.Visibility-5;
            tint(255,this.Visibility);
            pop();
        }

       
            }
            
        }
        