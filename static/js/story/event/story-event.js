import { BaseEvent, EVENT_TYPE } from "../../global/index.js";
import { DrawImageEvent } from "./detail/draw-image-event.js";
import { StoryBranchEvent } from "./detail/story-branch-event.js";

export class StoryEvent extends BaseEvent {
  #detailStoryEvent;
  constructor(detailStoryEvent) {
    super(EVENT_TYPE.STORY);
    this.#detailStoryEvent = detailStoryEvent;
  }

  /**
   * scene 일러스트를 그린다.
   */
  static drawSceneImage(name) {
    return new StoryEvent(DrawImageEvent.toScene(name));
  }

  /**
   * scene 일러스트를 숨긴다.
   */
  static hideSceneImage() {
    return new StoryEvent(DrawImageEvent.toScene(""));
  }

  /**
   * 콜백함수에 의한 스토리 분기처리
   */
  static branch(callback) {
    return new StoryEvent(StoryBranchEvent.byCallback(callback));
  }

  get detailStoryEvent() {
    return this.#detailStoryEvent;
  }
}
