import { Scene } from "./scene.js";
import { TextEvent } from "../text/event/text-event.js";
import { MiniGameEvent } from "../mini-game/mini-game-event.js";
import { StudyEvent } from "../study/event/study-event.js";
import { PopUpEvent } from "../pop-up/event/pop-up-event.js";
import { SoundEvent } from "../sound/event/sound-event.js";
import { BaseEvent } from "../global/index.js";
import { EFFECT_NAEMS } from "../sound/const/effect-names.js";
import { PopUpFrame } from "../pop-up/event/pop-up-frame.js";
import { StoryEvent } from "./event/story-event.js";

/*
 * scene을 여러개 가진 chapter 객체
 */
export class Chapter {
  #daysNum;
  #name;
  #nextName;
  #scenes;
  #currentSceneIndex;
  #isLast;
  constructor(daysNum, name, nextName) {
    this.#daysNum = daysNum;
    this.#name = name;
    this.#nextName = nextName;
    this.#scenes = [];
    this.#currentSceneIndex = 0;
    this.#isLast = false;
  }

  /**
   * scene 하나 추가
   */
  addScene(scene) {
    this.#scenes.push(scene);
    return this;
  }

  nextScene() {
    this.#currentSceneIndex++;
    if (this.#currentSceneIndex === this.#scenes.length) return true;
  }

  /**
   * @returns {Scene}
   */
  getCurrentEvents() {
    return this.#scenes[this.#currentSceneIndex].events;
  }

  get daysNum() {
    return this.#daysNum;
  }

  get name() {
    return this.#name;
  }

  get nextName() {
    return this.#nextName;
  }

  get isLast() {
    return this.#isLast;
  }

  setDaysNum(num) {
    this.#daysNum = num;
  }

  setChapterName(name) {
    this.#name = name;
  }

  setNextChapterName(name) {
    this.#nextName = name;
  }

  setLastChapter() {
    if (this.isLast)
      throw new Error(
        `챕터 ${this.name}은/는 이미 ${this.#daysNum}일의 마지막 챕터입니다.`
      );
    this.#isLast = true;
  }
}
