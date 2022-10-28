import {
  d01_ch01,
  d01_ch02_1,
  d01_ch02_1_f,
  d01_ch02_1_s,
  d01_ch02_2,
  d01_ch02_3,
  d01_ch03,
  d01_ch03_1,
  d01_ch03_2,
  d01_ch03_3,
  d01_ch04,
  d01_ch04_1,
  d01_ch04_2,
  d01_ch04_2_f,
  d01_ch04_2_s,
  d01_ch04_3,
  d01_ch05,
  d01_ch05_1,
  d01_ch05_2,
  d01_ch05_3,
  d01_ch06,
} from "./day-1/index.js";
import {
  d02_ch01,
  d02_ch02_1,
  d02_ch02_2,
  d02_ch02_3,
  d02_ch03,
  d02_ch04_1,
  d02_ch04_2,
  d02_ch04_3,
  d02_ch05,
} from "./day-2/index.js";
import {
  d03_ch01,
  d03_ch02_1,
  d03_ch02_2,
  d03_ch02_3,
  d03_ch03,
  d03_ch04_1,
  d03_ch04_1_f,
  d03_ch04_1_s,
  d03_ch04_2,
  d03_ch04_3,
  d03_ch05,
  d03_ch06_1,
  d03_ch06_2,
  d03_ch06_3,
  d03_ch07,
  d03_ch08_1,
  d03_ch08_1_f,
  d03_ch08_1_s,
  d03_ch08_2,
  d03_ch08_3,
  d03_ch09,
} from "./day-3/index.js";
import {
  d04_ch01,
  d04_ch_bad,
  d04_ch_seulgi,
  d04_ch_yujin,
  d04_ch_all,
} from "./day-4/index.js";
import { StoryEvent } from "./event/story-event.js";
import { DETAIL_STORY_EVENT } from "./event/detail/base-detail-story-event.js";

class StoryHandler {
  #days;
  #currentDaysIndex;
  #currentChapter;
  #sceneImage;

  constructor() {
    this.#sceneImage = new Image();
    this.#days = [
      [
        // d01_ch_end_test,
        // d01chtest,
        d01_ch01,
        d01_ch02_1,
        d01_ch02_1_f,
        d01_ch02_1_s,
        d01_ch02_2,
        d01_ch02_3,
        d01_ch03,
        d01_ch03_1,
        d01_ch03_2,
        d01_ch03_3,
        d01_ch04,
        d01_ch04_1,
        d01_ch04_2,
        d01_ch04_2_f,
        d01_ch04_2_s,
        // 2번 게임
        d01_ch04_3,
        d01_ch05,
        d01_ch05_1,
        d01_ch05_2,
        d01_ch05_3,
        d01_ch06,
      ],
      [
        // day02
        d02_ch01,
        d02_ch02_1,
        d02_ch02_2,
        d02_ch02_3,
        d02_ch03,
        d02_ch04_1,
        d02_ch04_2,
        d02_ch04_3,
        d02_ch05,
      ],
      [
        // day 03
        d03_ch01,
        d03_ch02_1,
        d03_ch02_2,
        d03_ch02_3,
        d03_ch03,
        d03_ch04_1,
        d03_ch04_1_f,
        d03_ch04_1_s,
        d03_ch04_2,
        d03_ch04_3,
        d03_ch05,
        d03_ch06_1,
        d03_ch06_2,
        d03_ch06_3,
        d03_ch07,
        d03_ch08_1,
        d03_ch08_1_f,
        d03_ch08_1_s,
        d03_ch08_2,
        d03_ch08_3,
        d03_ch09,
      ],
      // day 04
      [d04_ch01, d04_ch_all, d04_ch_bad, d04_ch_seulgi, d04_ch_yujin],
    ];
    this.#currentDaysIndex = 3; // #days의 y축
    this.#currentChapter = this.#days[3][0]; // 현재 d,ch index
    this.onBranchUpdate = null;
  }

  nextStory() {
    // 챕터가 끝났다면 다음 챕터로 교체
    const isChapterDone = this.#currentChapter.nextScene();
    if (isChapterDone) this.#changeToNextChapter();
  }

  changeChapter(name) {
    this.#currentChapter = this.#getChpaterByName(name);
  }

  /**
   * 현재 chapter를 다음 chapter로 바꾼다.
   */
  #changeToNextChapter() {
    // 현재 chapter가 days의 마지막 chapter인지 확인
    if (this.#currentChapter.isLast) {
      // 다음날 첫번째 chapter로 변경
      this.#currentDaysIndex++;
      this.#currentChapter = this.#days[this.#currentDaysIndex][0];
      return;
    }
    // 아니라면 그 날의 다음 chapter로 변경
    const nextChpaterName = this.#currentChapter.nextName;
    const nextChapter = this.#getChpaterByName(nextChpaterName);
    this.#currentChapter = nextChapter;
  }

  /**
   * 진행중인 days의 chapter를 이름으로 찾는다.
   */
  #getChpaterByName(chapterName) {
    return this.#days[this.#currentDaysIndex].find(
      (chapter) => chapter.name === chapterName
    );
  }

  /**
   * 진행중인 scene의 이벤트들을 반환한다.
   */
  getEvents() {
    return this.#currentChapter.getCurrentEvents();
  }

  draw(ctx) {
    ctx.drawImage(
      this.#sceneImage,
      0,
      0,
      this.#sceneImage.width,
      this.#sceneImage.height,
      0,
      0,
      800,
      600
    );
  }

  /**
   *
   * @param {StoryEvent} event
   */
  updateByEvent(event) {
    const detailStoryEvent = event.detailStoryEvent;
    switch (detailStoryEvent.type) {
      // 화면에 큰 이미지 그리기
      case DETAIL_STORY_EVENT.DRAW:
        this.#sceneImage.src = detailStoryEvent.imgName;
        break;

      // 스토리 분기 처리
      case DETAIL_STORY_EVENT.BRANCH:
        const callback = detailStoryEvent.callback;
        const nextChapterName = callback(); // callback 리턴 값: 다음 챕터 이름

        this.changeChapter(nextChapterName);
        this.onBranchUpdate(); // 브랜치 업데이트 발생했다고 Game에게 알림
        break;
    }
  }
}

export const storyHandler = new StoryHandler();
