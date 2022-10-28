import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d03_ch04_3 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch04-3")
  .setNextChapterName("d03-ch05")
  .addTextScene("나", ["넌... 맨날 물어보냐?", "혼자 공부 좀 해봐"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.dis),
    TextEvent.to("유진", "...알았어 물어볼 수도 있지 참..."),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addTextScene("유진", "나 기분 안좋아졌어. 같이 밥 먹으러가자")
  .build();
