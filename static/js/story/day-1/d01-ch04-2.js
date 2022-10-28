import { MINI_GAME_QUESTION } from "../../mini-game/const/mini-game-question.js";
import { MINI_GAME_TYPE } from "../../mini-game/const/mini-game-type.js";
import { MiniGameEvent } from "../../mini-game/mini-game-event.js";
import { ChapterBuilder } from "../chapter-builder.js";

export const d01_ch04_2 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch04-2")
  .setNextChapterName("d01-ch05")
  .addGameScene(
    MiniGameEvent.play(
      MINI_GAME_TYPE.game1,
      MINI_GAME_QUESTION.java1,
      [
        "/static/image/game-1/missile/missile-string.png",
        "/static/image/game-1/missile/missile-short.png",
        "/static/image/game-1/missile/missile-int.png",
        "/static/image/game-1/missile/missile-byte.png",
        "/static/image/game-1/missile/missile-long.png",
      ],
      "d01-ch04-2-s",
      "d01-ch04-2-f"
    )
  )
  .build();
