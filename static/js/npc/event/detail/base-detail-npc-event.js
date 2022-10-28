export const DETAIL_NPC_EVENT = {
  DRAW: "draw",
  LOVE: "love",
};

/**
 * 자세한 NPC 이벤트의 base 클래스
 */
export class BaseDetailNpcEvent {
  #type;

  /**
   * @param {DETAIL_NPC_EVENT} type
   */
  constructor(type) {
    this.#type = type;
  }

  get type() {
    return this.#type;
  }
}
