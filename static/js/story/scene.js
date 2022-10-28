import { BaseEvent } from "../global/index.js";

/**
 * 장면
 */
export class Scene {
  #events;
  #isLast;
  constructor() {
    this.#events = [];
    this.#isLast = false;
  }

  /**
   * scene에 event를 추가한다.
   * @param {BaseEvent} event
   */
  addEvent(event) {
    this.#events.push(event);
    return this;
  }

  get events() {
    return this.#events;
  }
}
