import { BaseEvent, EVENT_TYPE } from "./base-event.js";

/**
 * 게임 종료 이벤트
 */
export class EndEvent extends BaseEvent {
  #message;
  constructor(message) {
    super(EVENT_TYPE.END);
    this.#message = message;
  }
  static doneGame(message, endingType) {
    return new EndEvent(message, endingType);
  }

  get message() {
    return this.#message;
  }
}
