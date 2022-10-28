export default class Aim{
    #x;
    #y;
    #speed;
    #flagrE;
    #flagrW;
    #flagrS;
    #flagrN;
    #img;

    constructor(x, y){
        this.#x = x || 400;
        this.#y = y || 240;
        this.#speed = 3;

        this.#flagrE = false;
        this.#flagrW = false;
        this.#flagrS = false;
        this.#flagrN = false;

        this.#img = new Image();
        this.#img.src = "/static/image/game-2/aim.png";
    }
    draw(ctx) {
        ctx.drawImage(this.#img, this.#x-40, this.#y-40);
    }
    move(dir){
            
        switch(dir){

            case "Left":
                this.#flagrW = true;
                break;

            case "Right":
                this.#flagrE = true;
                break;

            case "Up":
                this.#flagrS = true;
                break;

            case "Down":
                this.#flagrN = true;
                break;
        }
    }
    stop(dir){

        switch(dir){

            case "Left":
                this.#flagrW = false;
                break;

            case "Right":
                this.#flagrE = false;
                break;

            case "Up":
                this.#flagrS = false;
                break;

            case "Down":
                this.#flagrN = false;
                break;
        }
    }
    pause(){
        this.#speed = 0;
    }
    update() {
       
        if(this.#flagrE)
            this.#x += this.#speed;
        if(this.#flagrW)
            this.#x -= this.#speed;
        if(this.#flagrS)
            this.#y -= this.#speed;
        if(this.#flagrN)
            this.#y += this.#speed;
    }

    init(){
        this.#x = 400;
        this.#y = 240;
        this.#speed = 3;
        this.#flagrE = false;
        this.#flagrW = false;
        this.#flagrS = false;
        this.#flagrN = false;
    }
    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }
}