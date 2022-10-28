import { BackgroundEvent } from "./event/background-event.js";

class BackgroundHandler {
  #x;
  #y;
  #width;
  #height;
  #img;
  constructor() {
    this.#x = 0;
    this.#y = 0;
    this.#width = 800;
    this.#height = 600;
    this.#img = new Image();
  }

  draw(ctx) {
    if (!this.#img.src) return;
    ctx.drawImage(
      this.#img,
      0,
      0,
      this.#img.width,
      this.#img.height,
      this.#x,
      this.#y,
      this.#width,
      this.#height
    );
  }

  /**
   * @param {BackgroundEvent} event
   */
  updateByEvent(event) {
    this.#img.src = event.src;
  }
}

export const backgroundHandler = new BackgroundHandler();
