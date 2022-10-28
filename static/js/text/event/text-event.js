import { BaseEvent, EVENT_TYPE } from "../../global/index.js";

export class TextEvent extends BaseEvent {
  #npcName;
  #text;
  #setOnText;

  constructor(npcName, text, setOnText) {
    super(EVENT_TYPE.TEXT);
    this.#npcName = npcName;
    this.#text = text;
    this.#setOnText = setOnText;
  }

  /**
   * npcName, text에 대한 TextContainerEvent 생성
   * @param {String} npcName npc 이름
   * @param {String} text 대사
   */
  static to(npcName, text) {
    return new TextEvent(npcName, text);
  }

  static hide() {
    return new TextEvent(null, null, false);
  }

  get npcName() {
    return this.#npcName;
  }

  get text() {
    return this.#text;
  }

  get setOnText() {
    return this.#setOnText;
  }
}
