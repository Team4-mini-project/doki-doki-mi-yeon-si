import { MINI_GAME_QUESTION } from "../../mini-game/const/mini-game-question.js";
import { MINI_GAME_TYPE } from "../../mini-game/const/mini-game-type.js";
import { MiniGameEvent } from "../../mini-game/mini-game-event.js";
import { ChapterBuilder } from "../chapter-builder.js";

export const d01_ch02_1 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch02-1")
  .setNextChapterName("d01-ch03")
  .addGameScene(
    MiniGameEvent.play(
      MINI_GAME_TYPE.game2,
      MINI_GAME_QUESTION.oop1,
      [
        "/static/image/game-2/asdf.png",
        "/static/image/game-2/capsoulhwa.png",
        "/static/image/game-2/dahyoun.png",
        "/static/image/game-2/sangsock.png",
      ],
      "d01-ch02-1-s",
      "d01-ch02-1-f"
    )
  )
  .build();
