import {
  BaseDetailNpcEvent,
  DETAIL_NPC_EVENT,
} from "./base-detail-npc-event.js";

export const NPC_POSITION = {
  LEFT: "l",
  CENTER: "c",
  RIGHT: "r",
  HIDE: "h",
};

/**
 * 화면에 NPC를 그리는 이벤트
 */
export class DrawNpcEvent extends BaseDetailNpcEvent {
  #name;
  #face;
  #position;
  constructor(name, face, position) {
    super(DETAIL_NPC_EVENT.DRAW);
    this.#name = name;
    this.#face = face;
    this.#position = position;
  }

  get name() {
    return this.#name;
  }

  get face() {
    return this.#face;
  }

  get position() {
    return this.#position;
  }

  /**
   * NPC를 중앙에 그린다.
   */
  static toCenter(name, face) {
    return new DrawNpcEvent(name, face, NPC_POSITION.CENTER);
  }

  /**
   * NPC를 우측에 그린다.
   */
  static toRight(name, face) {
    return new DrawNpcEvent(name, face, NPC_POSITION.RIGHT);
  }

  /**
   * NPC를 좌측에 그린다.
   */
  static toLeft(name, face) {
    return new DrawNpcEvent(name, face, NPC_POSITION.LEFT);
  }

  /**
   * NPC를 화면에서 숨긴다.(지운다.)
   */
  static toHide(name) {
    return new DrawNpcEvent(name, null, NPC_POSITION.HIDE);
  }
}
