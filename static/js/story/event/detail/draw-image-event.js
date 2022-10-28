import {
  BaseDetailStoryEvent,
  DETAIL_STORY_EVENT,
} from "./base-detail-story-event.js";

/**
 * 스토리 화면에 큰 이미지를 그리는 이벤트
 */
export class DrawImageEvent extends BaseDetailStoryEvent {
  #imgName;
  constructor(imgName) {
    super(DETAIL_STORY_EVENT.DRAW);
    this.#imgName = imgName;
  }

  /**
   * @param imgName 이미지 이름(경로)
   */
  static toScene(imgName) {
    return new DrawImageEvent(imgName);
  }

  get imgName() {
    return this.#imgName;
  }
}
