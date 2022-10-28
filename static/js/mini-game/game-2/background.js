export default class Background{
    #img;
    constructor(imgPath){
        this.#img = new Image();
        if(imgPath) this.#img.src = imgPath
    }
    draw(ctx, x, y, z, h){
        if(!this.#img.src) return;
        // console.log(this.#img)
        ctx.drawImage(this.#img, 
            z, h, x, y);
    }

    setImgPath(imgPath) {
        this.#img.src = imgPath;
    }
}

