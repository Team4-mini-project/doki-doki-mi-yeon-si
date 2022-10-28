import { ChapterBuilder } from "../chapter-builder.js";
import { MINI_GAME_QUESTION } from "../../mini-game/const/mini-game-question.js";
import { MINI_GAME_TYPE } from "../../mini-game/const/mini-game-type.js";
import { MiniGameEvent } from "../../mini-game/mini-game-event.js";

export const d03_ch08_1 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch08-1")
  .setNextChapterName("d03-ch09")
  .addGameScene(
    MiniGameEvent.play(
      MINI_GAME_TYPE.game1,
      MINI_GAME_QUESTION.java2,
      [
        "/static/image/game-1/missile/overroad.png",
        "/static/image/game-1/missile/abstract.png",
        "/static/image/game-1/missile/encapsulation.png",
        "/static/image/game-1/missile/interface.png",
        "/static/image/game-1/missile/override.png",
      ],
      "d03-ch08-1-s",
      "d03-ch08-1-f"
    )
  )
  .build();
