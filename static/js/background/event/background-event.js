import { BaseEvent, EVENT_TYPE } from "../../global/index.js";

export class BackgroundEvent extends BaseEvent {
  #src;

  constructor(name) {
    super(EVENT_TYPE.BACKGROUND);
    this.#src = name;
  }

  /**
   * BackgroundEvent 이벤트 객체 생성
   */
  static changeTo(name) {
    return new BackgroundEvent(name);
  }

  get src() {
    return this.#src;
  }
}
