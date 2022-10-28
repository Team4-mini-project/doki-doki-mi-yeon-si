import { Chapter } from "./chapter.js";
import { Scene } from "./scene.js";
import { PopUpEvent } from "../pop-up/event/pop-up-event.js";
import { SoundEvent } from "../sound/event/sound-event.js";
import { StudyEvent } from "../study/event/study-event.js";
import { TextEvent } from "../text/event/text-event.js";
import { StoryEvent } from "./event/story-event.js";
import { EFFECT_NAEMS } from "../sound/const/effect-names.js";

export class ChapterBuilder {
  #chapter;
  constructor() {
    this.#chapter = new Chapter();
  }

  setDaysNum(daysNum) {
    this.#chapter.setDaysNum(daysNum);
    return this;
  }

  setChapterName(name) {
    this.#chapter.setChapterName(name);
    return this;
  }

  setNextChapterName(name) {
    this.#chapter.setNextChapterName(name);
    return this;
  }

  /**
   * 이벤트 요소를 장면에 모두 담은 후 장면을 추가한다.
   * @param {BaseEvent[]} events
   */
  addSceneWithEvents(events) {
    const scene = new Scene();
    for (let e of events) scene.addEvent(e);
    this.#chapter.addScene(scene);

    return this;
  }

  /**
   * 텍스트 장면을 추가한다.
   */
  addTextScene(name, text) {
    const event = TextEvent.to(name, text);
    const scene = new Scene().addEvent(event);
    this.#chapter.addScene(scene);
    return this;
  }

  /**
   * 미니게임 장면을 추가한다.
   */
  addGameScene(miniGameEvent) {
    const soundEvent = SoundEvent.stopBgm();
    const scene = new Scene().addEvent(soundEvent).addEvent(miniGameEvent);
    this.#chapter.addScene(scene);
    return this;
  }

  /**
   * 공부 장면을 추가한다.
   */
  addStudyScene(subjectName) {
    const soundEvent = SoundEvent.playEffect(EFFECT_NAEMS.CLASS_START);
    const studyEvent = StudyEvent.to(subjectName);
    const scene = new Scene().addEvent(studyEvent).addEvent(soundEvent);
    this.#chapter.addScene(scene);
    return this;
  }

  /**
   * 선택 장면을 추가한다.
   * @param {PopUpFrame[]} popUpFrames
   */
  addSelectScene(popUpFrames) {
    const event = PopUpEvent.toSelects(popUpFrames);
    const scene = new Scene().addEvent(event);
    this.#chapter.addScene(scene);
    return this;
  }

  /**
   * 콜백 함수에 의한 분기를 추가한다.
   * 콜백 함수는 반드시 분기처리 결과로 "다음 챕터 이름(문자열)"을 리턴해야한다.
   * @param {Function} callback
   * `ex` :
   * () => {
   *    if(npc.lovePoint >= 5) return "d-03-01";
   *    else return "d-03-02";
   * }
   */
  addBranch(callback) {
    const event = StoryEvent.branch(callback);
    const scene = new Scene().addEvent(event);
    this.#chapter.addScene(scene);
    return this;
  }

  /**
   * N일차의 마지막 chapter로 설정한다.
   */
  endOfDays() {
    this.#chapter.setLastChapter();
    return this;
  }

  /**
   * chapter 빌드를 끝낸다.
   */
  build() {
    return this.#chapter;
  }
}
