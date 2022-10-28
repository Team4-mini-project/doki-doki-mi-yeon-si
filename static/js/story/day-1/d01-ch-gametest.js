import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { STUDY_SUBJECT_NAMES } from "../../study/const/study-subject-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";
import { EffectEvent } from "../../effect/event/effect-event.js";
import { StoryEvent } from "../event/story-event.js";
import { MiniGameEvent } from "../../mini-game/mini-game-event.js";
import { MINI_GAME_TYPE } from "../../mini-game/const/mini-game-type.js";

export const d01chtest = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01chtest")
  .setNextChapterName("d01ch01")
  .addTextScene(null, "스킵되는 scene")
  .addGameScene(
    MiniGameEvent.play(
      MINI_GAME_TYPE.game2,
      MINI_GAME_QUESTION.JAVA_PRIMITIVE,
      [
        "/static/image/game-2/one.png",
        "/static/image/game-2/doublequotation.png",
        "/static/image/game-2/nan.png",
        "/static/image/game-2/number.png",
      ],
      "d01-ch02-2",
      "d01-ch02-3"
    )
  )
  .build();
