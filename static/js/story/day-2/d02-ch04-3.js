import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d02_ch04_3 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch04-3")
  .setNextChapterName("d02-ch05")
  .addTextScene("나", "(날도 추운데 거절해야겠다.)")
  .addTextScene("나", [
    "야 오늘은 기분이 영이다",
    "그냥 나 혼자 갈란다 bye~~!! ",
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.dis),
    TextEvent.to("유진", "...알았어...."),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addTextScene("나", "(세심한 real man이란 힘든 길이군.)")
  .build();
