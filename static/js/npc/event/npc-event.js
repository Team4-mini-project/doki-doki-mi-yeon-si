import { BaseEvent, EVENT_TYPE } from "../../global/index.js";
import { DrawNpcEvent } from "./detail/draw-npc-event.js";
import { LoveNpcEvent } from "./detail/love-npc-event.js";

/**
 *  NpcEvent has DrawNpcEvent | LoveNpcEvent
 */
export class NpcEvent extends BaseEvent {
  #detailNpcEvent;
  constructor(detailNpcEvent) {
    super(EVENT_TYPE.NPC);
    this.#detailNpcEvent = detailNpcEvent;
  }

  /* -------------- NPC 화면에 그리기 -------------- */
  static showCenter(name, face) {
    return new NpcEvent(DrawNpcEvent.toCenter(name, face));
  }

  static showRight(name, face) {
    return new NpcEvent(DrawNpcEvent.toRight(name, face));
  }

  static showLeft(name, face) {
    return new NpcEvent(DrawNpcEvent.toLeft(name, face));
  }

  static hide(name) {
    return new NpcEvent(DrawNpcEvent.toHide(name));
  }

  /* -------------- NPC 호감도 다루기 -------------- */
  static increaseLove(name) {
    return new NpcEvent(LoveNpcEvent.plus(name));
  }

  static decreaseLove(name) {
    return new NpcEvent(LoveNpcEvent.minus(name));
  }

  get detailNpcEvent() {
    return this.#detailNpcEvent;
  }
}
