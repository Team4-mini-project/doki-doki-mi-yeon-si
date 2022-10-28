import {
  BaseDetailStoryEvent,
  DETAIL_STORY_EVENT,
} from "./base-detail-story-event.js";

/**
 * 콜백함수에 의한 스토리 분기 처리 이벤트
 */
export class StoryBranchEvent extends BaseDetailStoryEvent {
  #callback;
  constructor(callback) {
    super(DETAIL_STORY_EVENT.BRANCH);
    this.#callback = callback;
  }

  /**
   * @param {Function} callback
   * 콜백 함수는 반드시 분기처리 결과로 "다음 챕터 이름(문자열)"을 리턴해야한다.
   *
   * `ex` :
   * () => {
   *    if(npc.lovePoint >= 5) return "d-03-01";
   *    else return "d-03-02";
   * }
   */
  static byCallback(callback) {
    return new StoryBranchEvent(callback);
  }

  get callback() {
    return this.#callback;
  }
}
