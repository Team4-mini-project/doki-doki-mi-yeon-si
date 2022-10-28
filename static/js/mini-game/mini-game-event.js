import { BaseEvent, EVENT_TYPE } from "../global/index.js";
import { MINI_GAME_TYPE } from "./const/mini-game-type.js";

export class MiniGameEvent extends BaseEvent {
  #gameType;
  #question;
  #answers;
  #successChapterName;
  #failChapterName;

  constructor(
    gameType,
    question,
    answers,
    successChapterName,
    failChapterName
  ) {
    super(EVENT_TYPE.GAME);
    this.#gameType = gameType;
    this.#question = question;
    this.#answers = answers;
    this.#successChapterName = successChapterName;
    this.#failChapterName = failChapterName;
  }

  /**
   * @param {MINI_GAME_TYPE} gameType
   * @param {String} question // 정답 이미지 경로 //TODO: question, answers 클래스로 묶기
   * @param {String[]} answers // 선택지 이미지 경로 배열
   * @param {String} successChapterName 성공시 진행할 챕터 이름
   * @param {String} failChapterName 실패시 진행할 챕터 이름
   */
  static play(
    gameType,
    question,
    answers,
    successChapterName,
    failChapterName
  ) {
    return new MiniGameEvent(
      gameType,
      question,
      answers,
      successChapterName,
      failChapterName
    );
  }

  get gameType() {
    return this.#gameType;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    return this.#answers;
  }

  get successChapterName() {
    return this.#successChapterName;
  }

  get failChapterName() {
    return this.#failChapterName;
  }
}
