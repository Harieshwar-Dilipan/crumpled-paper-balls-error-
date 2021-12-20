class Border{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(myWorld,this.body);
        this.w=w;
        this.h=h;
    }

    representation(){
        var pos=this.body.position;
        push()
        rectMode(CENTER);
        stroke("orange")
        fill("cyan");
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}
