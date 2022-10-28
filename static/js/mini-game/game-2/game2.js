import Ball from "./ball.js";
import Background from "./background.js";
import Aim from "./aim.js";
import Answer from "./answer.js";
import { isHit } from "../../global/index.js";
import { GameIntro } from "../../global/index.js";

export class Game2 {
  #gameBgm; // 배경음악
  #shootEffect; // 효과음
  #correctEffect;
  #wrongEffect;
  constructor(cansvas, ctx) {
    this.#gameBgm = new Audio();
    this.#shootEffect = new Audio();
    this.#correctEffect = new Audio();
    this.#wrongEffect = new Audio();

    this.obj = cansvas;
    this.quiz;
    this.backgrounds = [
        new Background(),
        new Background("/static/image/game-2/soccer.png"),
        new Background("/static/image/game-2/success.png"),
        new Background("/static/image/game-2/wrong.png")];
    this.answers;// 문제 이미지 경로 배열
    this.ball = new Ball();
    this.aim = new Aim();

    this.gameOver = false;
    
    this.ctx = ctx;

    this.obj.onkeydown = this.keydownHandler.bind(this);
    this.obj.onkeyup = this.keyupHandler.bind(this);

    this.onGameOver = null;
    this.gameIntro = new GameIntro();
    this.gameProgress = "start";
    this.gameIntro.onIntroFinish = ()=>{
      this.gameProgress = "play";
    }
    this.gameResult;
    this.frame = 0;
    // this.#playGameBgm();
    // console.log(this.#playBgm)
  }
  keydownHandler(e) {
    if (this.gameOver) return; // 게임이 끝나면 키보드 막기

    switch (e.code) {
      case "ArrowLeft":
        this.aim.move("Left");
        break;

      case "ArrowRight":
        this.aim.move("Right");
        break;

      case "ArrowUp":
        this.aim.move("Up");
        break;

      case "ArrowDown":
        this.aim.move("Down");
        break;
    }
  }
  keyupHandler(e) {
    if (this.gameOver) return; // 게임이 끝나면 키보드 막기

    switch (e.code) {
      case "ArrowLeft":
        this.aim.stop("Left");
        break;

      case "ArrowRight":
        this.aim.stop("Right");
        break;

      case "ArrowUp":
        this.aim.stop("Up");
        break;

      case "ArrowDown":
        this.aim.stop("Down");
        break;

      case "Space": // 스페이스를 눌렀을 떄 볼이 움직이고 정답들과 조준점이 멈춘다
        this.#shootEffect.play();
        this.ball.move(this.aim.x, this.aim.y);
        for (let an of this.answers) an.stop();
        this.aim.pause();
        break;
    }
  }
  /**
  * 미니게임 초기화
  */
  init(question, answers) {
    // 질문, 선택지 이미지 초기화
    this.backgrounds[0].setImgPath(question);
    this.answers = [];
    for(let i=0; i<answers.length; i++) {
      const answer = new Answer(answers[i]);
      this.answers.push(answer);
    }
    this.ball.init();
    this.aim.init();
    // 게임 상태 초기화
    this.gameProgress = "start";
    this.gameResult = null;
    this.gameOver = false;
    this.frame = 0;
    this.#playGameBgm();
    this.#playGameEffect();
  }
  /**
   * @param 게임 BGM
   */
   #playGameBgm() {
    this.#gameBgm.src = "/static/sound/game/game_2_bgm.mp3";
    this.#gameBgm.volume = 0.3;
    // if(this.gameProgress === "end")
    //   this.#gameBgm.pause();
  }

  /**
   * @param 이펙트 사운드
   */
  #playGameEffect() {
    this.#shootEffect.src = "/static/image/game-2/shoot.mp3";
    this.#shootEffect.volume = 0.7;
    this.#correctEffect.src = "/static/image/game-2/correct.mp3";
    this.#correctEffect.volume = 0.7;
    this.#wrongEffect.src = "/static/image/game-2/wrong.mp3";
    this.#wrongEffect.volume = 0.7;
  }
  update() {
    switch(this.gameProgress){
      case "start": {
        this.gameIntro.update();
        break;
      }
      case "play": {
        console.log("play")
        // 상태 변경 & 상태 체크
        this.#gameBgm.play();
        this.ball.update();
        this.aim.update();
        // for (let an of this.answers) an.update();     
        if (this.ball.speed === 0) { // 볼이 움직임이 멈추면 충돌 검사 실행     
          this.gameOver = isHit(this.answers[0], this.ball);
          if (this.gameOver && this.ball.speed === 0) this.gameResult = true;
          if (!this.gameOver && this.ball.speed === 0) this.gameResult = false;
          if(this.frame % 60 === 0){
            this.gameProgress = "end";
            if(this.gameResult == true)
              this.#correctEffect.play();
            else this.#wrongEffect.play();
          }
          this.frame++;
        }
        break;
      }
      case "end": {
        if(this.frame % 120 === 0){
          this.#shootEffect.pause();
          this.#gameBgm.pause();
          if (this.gameResult ? this.onGameOver(true) : this.onGameOver(false));
        }
        this.frame++;
        break;
      }
    }

  }
  draw(ctx) {
    switch(this.gameProgress){
      case "start": {
        ctx.clearRect(0, 0, this.obj.width, this.obj.height);
        this.backgrounds[0].draw(ctx,800,600,0,0);
        this.gameIntro.draw(ctx);
        break;
      }
      case "play": {
        ctx.clearRect(0, 0, this.obj.width, this.obj.height);
        this.backgrounds[1].draw(ctx,800,600,0,0);
        for (let an of this.answers) an.draw(ctx);
        this.ball.draw(ctx);
        this.aim.draw(ctx);
        break;
      }
      case "end": {
        ctx.clearRect(0, 0, this.obj.width, this.obj.height);
        this.backgrounds[1].draw(ctx,800,600,0,0);
        if (this.gameResult) this.backgrounds[2].draw(ctx,300,300,230,160);
        if (!this.gameResult) this.backgrounds[3].draw(ctx,300,300,230,160);
        break;
      }
    }
  }
}
