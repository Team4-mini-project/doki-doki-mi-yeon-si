import { MINI_GAME_TYPE } from "./const/mini-game-type.js";
import { MiniGameEvent } from "./mini-game-event.js";
import { GameDrop } from "./game-drop-quiz/game-drop.js";
import { Game2 } from "./game-2/game2.js";

export class MiniGameHandler {
  #type; // game 1 or game 2
  #games;
  constructor(canvas, ctx, mouse) {
    this.#games = [new GameDrop(canvas, ctx, mouse), new Game2(canvas, ctx)];
    this.onGameOver = null;
  }

  draw(ctx) {
    const miniGame = this.#getCurrentMiniGame();
    miniGame.draw(ctx);
  }

  update() {
    const miniGame = this.#getCurrentMiniGame();
    miniGame.update();
    // this.#games[0].create();
  }

  /**
   * @param {MiniGameEvent} event
   */
  updateByEvent(event) {
    const { gameType, question, answers } = event;
    this.#type = gameType;
    // 미니게임 변경
    const miniGame = this.#getCurrentMiniGame();
    // 미니게임 초기화
    miniGame.init(question, answers);
    // 이벤트 설정
    miniGame.onGameOver = (isWin) => {
      this.onGameOver(isWin);
    };
  }

  #getCurrentMiniGame() {
    if (!this.#type) throw new Error("설정된 미니게임이 없습니다.");
    // TODO: switch -> 키값으로 가져오기?
    switch (this.#type) {
      case MINI_GAME_TYPE.game1:
        return this.#games[0];
      case MINI_GAME_TYPE.game2:
        return this.#games[1];
    }
  }
}
