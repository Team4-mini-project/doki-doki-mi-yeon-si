export const DETAIL_STORY_EVENT = {
  /**
   *  화면 일러스트 그리기 이벤트
   */
  DRAW: "draw",
  /**
   *  스토리 분기 이벤트
   */
  BRANCH: "branch",
};

export class BaseDetailStoryEvent {
  #type;

  /**
   * @param {DETAIL_STORY_EVENT} type
   */
  constructor(type) {
    this.#type = type;
  }

  get type() {
    return this.#type;
  }
}
