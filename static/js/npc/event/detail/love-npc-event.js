import {
  BaseDetailNpcEvent,
  DETAIL_NPC_EVENT,
} from "./base-detail-npc-event.js";

/**
 * NPC의 호감도를 처리하는 이벤트
 */
export class LoveNpcEvent extends BaseDetailNpcEvent {
  #name;
  #point;
  constructor(name, point) {
    super(DETAIL_NPC_EVENT.LOVE);
    this.#name = name;
    this.#point = point;
  }

  /**
   * NPC의 호감도를 상승
   */
  static plus(name) {
    return new LoveNpcEvent(name, +1);
  }

  /**
   * NPC의 호감도를 하락
   */
  static minus(name) {
    return new LoveNpcEvent(name, -1);
  }

  get name() {
    return this.#name;
  }

  get point() {
    return this.#point;
  }
}
