export default class Answer{
    constructor(src){
        this.x = Math.floor(Math.random() * 700);
        this.y = Math.floor(Math.random() * 500);
        this.width = 100;
        this.height = 100;
        this.areaSX = 0;
        this.areaSY = 0;
        this.areaEX = 800; // areaEX, EY는 답이 움직이는 구역 범위끝 EndX, Y
        this.areaEY = 600;
         // 0과 1 값으로 음수 양수를 구한다
        this.rand = Math.random();
        const check = this.rand>0.5 ? 1:-1;
        this.dx = (Math.floor(Math.random() * 2)+1)*check;
        this.dy = (-Math.floor(Math.random() * 2)+2)*check;
        this.img = new Image(); 
        this.img.src = src;
    }
    draw(ctx){
        ctx.drawImage(this.img,
            this.x, this.y, this.width, this.height);

        // 움직이는 범위
        if(this.x + this.dx > this.areaEX - this.width || this.x + this.dx < this.areaSX) {
            this.dx = -this.dx;
        }
        if(this.y + this.dy > this.areaEY - this.height || this.y + this.dy < this.areaSY) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;
    }
    stop(){
        this.dx = 0;
        this.dy = 0;
    }
}