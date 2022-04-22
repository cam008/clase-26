class Birds extends ClaseBase{
    constructor(x,y,width,height){
        super(x, y, width,height)
        this.image = loadImage("imagenes/bird.png")
    }
    display(){
       // this.body.position.x= mouseX
        //this.body.position.y= mouseY
        super.display()
    }
}