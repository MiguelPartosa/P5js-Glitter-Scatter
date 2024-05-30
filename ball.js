// class for ball 
// will use this for drop 
class Ball {
    constructor(x,y,size){
        this.x = x;
        this.y = y;
        this.size = size;
        lifetime = 200; //200 frames
    }

    display (){
        circle(this.x, this.y, this.size);
        
    }

    animate(){
        // some animation here
        scale(2,1,1); //stretches
    }


}