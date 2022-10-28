import { GAME_MODE, EVENT_TYPE } from "./global/index.js";
import { popUpHandler } from "./pop-up/pop-up-handler.js";
import { textHandler } from "./text/text-handler.js";
import { soundHanlder } from "./sound/sound-handler.js";
import { backgroundHandler } from "./background/background-handler.js";
import { npcHandler } from "./npc/npc-handler.js";
import { storyHandler } from "./story/story-handler.js";
import { MiniGameHandler } from "./mini-game/mini-game-handler.js";
import { studyHandler } from "./study/study-handler.js";
import { effectHandler } from "./effect/effect-handler.js";
import { EFFECT_NAEMS } from "./sound/const/effect-names.js";

export default class Game {
  #canvas;
  #ctx;
  #mouse;
  #storyHandler;
  #backgroundHandler;
  #soundHandler;
  #npcHandler;
  #miniGameHandler;
  #studyHandler;
  #popUpHandler;
  #textHandler;
  #effectHandler;
  #mode;
  #clickSound;

  constructor() {
    // canvas
    this.#canvas = document.querySelector("canvas");
    this.#canvas.focus();
    this.#canvas.position = this.#canvas.getBoundingClientRect(); // DOM 엘리먼트 위치 정보를 제공하는 DOMRect 객체 반환
    this.#canvas.width = 800;
    this.#canvas.height = 600;
    // ctx
    this.#ctx = this.#canvas.getContext("2d");
    // mouse
    this.#mouse = { x: 1, y: 1, width: 0.1, height: 0.1 };
    // handler
    this.#storyHandler = storyHandler;
    this.#backgroundHandler = backgroundHandler;
    this.#soundHandler = soundHanlder;
    this.#npcHandler = npcHandler;
    this.#studyHandler = studyHandler;
    this.#popUpHandler = popUpHandler;
    this.#textHandler = textHandler;
    this.#effectHandler = effectHandler;
    this.#miniGameHandler = new MiniGameHandler(
      this.#canvas,
      this.#ctx,
      this.#mouse
    );
    this.#mode = GAME_MODE.STORY;
    this.#clickSound = new Audio();
    this.#clickSound.src = EFFECT_NAEMS.ClICK;
    this.#clickSound.volume = 0.7;

    this.#initEvent();
    this.#nextStory(); // 브라우저 보안 정책 때문에 첫 scene에서 소리 진행이 안되므로 잉여 scene 한번 진행
  }

  run() {
    switch (this.#mode) {
      case GAME_MODE.STORY: {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#effectHandler.update();
        this.#backgroundHandler.draw(this.#ctx);
        this.#npcHandler.draw(this.#ctx);
        this.#storyHandler.draw(this.#ctx);
        this.#textHandler.draw(this.#ctx);
        this.#effectHandler.draw(this.#ctx);
        break;
      }

      case GAME_MODE.STUDY: {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#studyHandler.draw(this.#ctx);
        break;
      }

      case GAME_MODE.SELECT: {
        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
        this.#backgroundHandler.draw(this.#ctx);
        this.#npcHandler.draw(this.#ctx);
        this.#textHandler.draw(this.#ctx);
        this.#popUpHandler.draw(this.#ctx);
        break;
      }

      case GAME_MODE.GAME: {
        const event = this.#miniGameHandler.update();
        this.#miniGameHandler.draw(this.#ctx);
        break;
      }
    }

    requestAnimationFrame(this.run.bind(this));
  }

  #initEvent() {
    // 마우스
    this.#canvas.onmousemove = (e) => {
      this.#mouse.x = e.x - this.#canvas.position.left;
      this.#mouse.y = e.y - this.#canvas.position.top;
    };
    this.#canvas.onmouseleave = (e) => {
      this.#mouse.x = undefined;
      this.#mouse.y = undefined;
    };

    // 클릭
    this.#canvas.onclick = (e) => {
      switch (this.#mode) {
        case GAME_MODE.STORY:
          this.#clickSound.play();
          this.#nextStory();
          break;

        case GAME_MODE.SELECT:
          this.#changeChapterByPopUp();
          break;

        case GAME_MODE.STUDY:
          // 컨트롤 + 클릭 누르면 공부 끝내기
          if (e.shiftKey) this.#nextStory();
          break;
      }
    };

    // 분기 업데이트 이벤트
    this.#storyHandler.onBranchUpdate = () => {
      // 분기 업데이트 이후 현재 이벤트를 실행을 해주어야
      // text, npc 이미지 등 필드 값 undefined 에러가 안남
      this.#executeEvent();
    };
  }

  /**
   * 스토리를 진행한다.
   */
  #nextStory() {
    this.#storyHandler.nextStory();
    this.#executeEvent();
  }

  /**
   * popup 클릭에 의해 chapter를 변경한다.
   */
  #changeChapterByPopUp() {
    const nextChapterName = this.#popUpHandler.getNextChapterByMouse(
      this.#mouse
    );
    if (!nextChapterName) return;

    // chapter 변경 후 변경된 chapter 첫번째 scene의 event들을 바로 실행한다.
    this.#storyHandler.changeChapter(nextChapterName);
    this.#executeEvent();
  }

  /**
   * event배열의 모든 event를 실행한다.
   */
  #executeEvent() {
    const events = this.#storyHandler.getEvents();
    for (let e of events) {
      switch (e.type) {
        case EVENT_TYPE.GAME:
          this.#mode = GAME_MODE.GAME;
          this.#miniGameHandler.updateByEvent(e);

          // 게임 끝 이벤트 설정
          this.#miniGameHandler.onGameOver = (isWin) => {
            this.#mode = GAME_MODE.STORY;
            isWin
              ? this.#storyHandler.changeChapter(e.successChapterName)
              : this.#storyHandler.changeChapter(e.failChapterName);

            this.#executeEvent();
          };
          break;

        case EVENT_TYPE.BACKGROUND:
          this.#backgroundHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.SOUND:
          this.#soundHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.TEXT:
          this.#mode = GAME_MODE.STORY;
          this.#textHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.NPC:
          this.#npcHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.STUDY:
          this.#mode = GAME_MODE.STUDY;
          this.#studyHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.POPUP:
          this.#mode = GAME_MODE.SELECT;
          this.#popUpHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.STORY:
          this.#storyHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.EFFECT:
          this.#effectHandler.updateByEvent(e);
          break;

        case EVENT_TYPE.END:
          alert(`========== 게임이 끝났습니다 ==========
                        ${e.message}
        확인을 누르면 메인화면으로 돌아갑니다.`);
          document.location = "/";
          break;
      }
    }
  }
}
