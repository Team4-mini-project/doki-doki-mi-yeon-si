export const EVENT_TYPE = {
  TEXT: "text",
  GAME: "game",
  BACKGROUND: "background",
  SOUND: "sound",
  NPC: "npc",
  STUDY: "study",
  POPUP: "popUp",
  STORY: "story",
  EFFECT: "effect",
  END: "end",
};

export class BaseEvent {
  #type;

  /**
   * @param {EVENT_TYPE} type
   */
  constructor(type) {
    this.#type = type;
  }

  get type() {
    return this.#type;
  }
}
