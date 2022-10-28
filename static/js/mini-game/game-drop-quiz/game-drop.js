import Hero from "./hero.js";
import { Quiz } from "./quiz.js";
import Background from "./background.js";
import { GameIntro, isHit } from "../../global/index.js";
import { textBorard } from "./text-board.js";

//문제 갈아끼우기
// 배경  브금

export class GameDrop {
  #QUIZ_INTERVAL = 85;
  constructor(canvas, ctx, mouse) {
    this.canvas = canvas;
    this.mouse = mouse;
    this.ctx = ctx;
    this.hero = new Hero();
    this.dropQuiz = [];
    this.quiz = new Quiz();
    this.background = new Background();
    this.quizPositions = [];
    this.gameIntro = new GameIntro();
    this.gameProgress = "start";
    this.gameIntro.onIntroFinish = () => {
      this.gameProgress = "play";
    };
    this.textBorard = new textBorard();
    this.gameOver = false;
    this.frame = 0;
    this.onGameOver = null;
    this.gameResult;
    this.bgm = new Audio();
  }

  playBgm() {
    this.bgm.src = "/static/sound/game/game_1_bgm.mp3";
    this.bgm.volume = 0.3;
    this.bgm.play();
  }

  draw(ctx) {
    switch (this.gameProgress) {
      case "start": {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.textBorard.draw(ctx);
        this.gameIntro.draw(ctx);
        break;
      }
      case "play": {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw(ctx);

        this.hero.draw(ctx);
        for (var drop of this.dropQuiz) {
          drop.draw(ctx);
        }
        break;
      }
      case "end": {
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.draw(ctx, this.gameResult);
      }
    }
  }
  update() {
    switch (this.gameProgress) {
      case "start": {
        this.textBorard.update();
        this.gameIntro.update();
        break;
      }
      case "play": {
        let idx = Math.floor(Math.random() * 5);
        if (this.frame % this.#QUIZ_INTERVAL === 0) {
          let xPosition = Math.floor(Math.random() * 11) * 50;
          this.quizPositions.push(xPosition);
          this.dropQuiz.push(new Quiz(this.quizImg[idx], xPosition));
        }
        this.hero.update(this.mouse);
        this.frame++;

        for (let drop of this.dropQuiz) {
          drop.update();
          drop.onHitFloor = () => {
            this.dropQuiz.splice(drop, 1);
          };

          if (isHit(this.hero, drop) && this.#isAnswer(drop) && this.#isAnswer_1(drop)) {
            this.gameResult = true;
            this.gameProgress = "end";
          } else if (isHit(this.hero, drop)) {
            this.gameResult = false;
            this.gameProgress = "end";
          }
        }
        break;
      }
      case "end": {
        this.bgm.pause();
        this.frame++;
        if (this.frame % 300 === 0)
          this.gameResult ? this.onGameOver(true) : this.onGameOver(false);
        break;
      }
    }
  }
  /**
   * 미니게임 초기화
   */
  init(question, answers) {
    console.log("질문", question, answers);
    this.gameProgress = "start";
    this.gameResult = null;
    this.textBorard.setImgSrc(question); // 질문 이미지 초기화
    this.quizImg = answers; // 선택지 이미지들 초기화
    this.gameOver = false;
    this.frame = 0;
    this.dropQuiz = [];
    this.playBgm();
  }

  #isAnswer(drop) {
    const dropImgName = drop.img.src.split("/")[7];
    const answerImgName = this.quizImg[0].split("/")[5];
    return dropImgName === answerImgName;
  }
  #isAnswer_1(drop) {
    const dropImgName = drop.img.src.split("/")[7];
    const answerImgName = this.quizImg[0].split("/")[5];
    return dropImgName === answerImgName;
  }
}
