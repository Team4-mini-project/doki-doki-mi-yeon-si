export default class Ball{
    constructor(){
        this.x;
        this.y;
        this.width = 100;
        this.height = 100;
        this.vx; //* 백터
        this.vy;
        this.dx; //* 거리
        this.dy; 
        this.speed;
        this.init();
        this.img = new Image(); 
        this.img.src = "/static/image/game-2//ball.png";
    }
    draw(ctx){
        ctx.drawImage(this.img,
            this.x, this.y, this.width, this.height);
    }
    move(x, y){
        this.dx = x-50;                                  //* 백터값을 구하는 공식
        this.dy = y-50;
        let w = this.dx - this.x;
        let h = this.dy - this.y;
        let d = Math.sqrt(w*w + h*h);
        this.vx = (this.dx - this.x) / d * this.speed;
        this.vy = (this.dy - this.y) / d * this.speed;
    }
    update() {
        this.x += this.vx;                               //* 백터값을 공에 좌표값을 더해서 움직인다
        this.y += this.vy;
        if(this.dx-3 <= this.x && this.x <= this.dx+3
            && this.dy-3 <= this.y && this.y <= this.dy+3) { //* 조준선 좌표값에 도착하면 동작을 멈춘다
            this.vx = 0;
            this.vy = 0;
            this.speed = 0;
        }
    }
    init(){
        this.x = 800/2 - 50;
        this.y = 600*4/5 - 40;
        this.vx = 0; //* 백터
        this.vy = 0;
        this.dx = 0; //* 거리
        this.dy = 0;
        this.speed = 5;
    }
    // get vx(){
    //     return this.vx;
    // }
    // get speedBall(){
    //     return this.speed;
    // }
    // get x(){
    //     return this.#x;
    // }
    // get y(){
    //     return this.#y;
    // }
    // get w(){
    //     return this.#w;
    // }
    // get h(){
    //     return this.#h;
    // }
}
