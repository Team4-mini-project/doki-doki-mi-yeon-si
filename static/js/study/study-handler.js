import { StudyEvent } from "./event/study-event.js";

class StudyHandler {
  #x;
  #y;
  #img;
  constructor() {
    this.#x = 0;
    this.#y = 0;
    this.#img = new Image();
  }

  draw(ctx) {
    ctx.drawImage(this.#img,
      this.#x, this.#y);
  }

  /**
   * @param {StudyEvent} event
   */
  updateByEvent(event) {
    const subjectName = event.subjectName;
    this.#img.src = subjectName;
  }
}

export const studyHandler = new StudyHandler();
