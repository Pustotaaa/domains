export default class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        this.speed = 4;
        document.addEventListener('keydown',this.keydown)
        document.addEventListener('keyup',this.keyup)
    }

    draw(ctx){
        this.move();
        ctx.strokeStyle = "yellow";
        ctx.fillStyle = "black";                                                   
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width,this.height); 
    }
    move() {
        if (this.downPressed) {
          this.y += this.speed;
        }
        if (this.upPressed) {
          this.y -= this.speed;
        }
        if (this.leftPressed) {
          this.x -= this.speed;
        }
    
        if (this.rightPressed) {
          this.x += this.speed;
        }
      } 

    keydown = (e) =>{
        if(e.code === 'ArrowUp'){
            this.upPressed = true;
        }
        
        if(e.code === 'ArrowDown'){
            this.downPressed = true;
        }
        
        if(e.code === 'ArrowLeft'){
            this.leftPressed = true;
        }
        
        if(e.code === 'ArrowRight'){
            this.rightPressed = true;
        }
    };
    keyup=(e)=>{
        if(e.code === 'ArrowUp'){
            this.upPressed = false;
        }
        
        if(e.code === 'ArrowDown'){
            this.downPressed = false;
        }
        
        if(e.code === 'ArrowLeft'){
            this.leftPressed = false;
        }
        
        if(e.code === 'ArrowRight'){
            this.rightPressed = false;
        }
    };
    }
