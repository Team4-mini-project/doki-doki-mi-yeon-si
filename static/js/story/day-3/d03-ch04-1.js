import { ChapterBuilder } from "../chapter-builder.js";
import { MINI_GAME_QUESTION } from "../../mini-game/const/mini-game-question.js";
import { MINI_GAME_TYPE } from "../../mini-game/const/mini-game-type.js";
import { MiniGameEvent } from "../../mini-game/mini-game-event.js";

export const d03_ch04_1 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch04-1")
  .setNextChapterName("d03-ch05")
  .addGameScene(
    MiniGameEvent.play(
      MINI_GAME_TYPE.game2,
      MINI_GAME_QUESTION.oop2,
      [
        "/static/image/game-2/wrapper.png",
        "/static/image/game-2/inner.png",
        "/static/image/game-2/abstract.png",
        "/static/image/game-2/anonymous.png",
      ],
      "d03-ch04-1-s",
      "d03-ch04-1-f"
    )
  )
  .build();
