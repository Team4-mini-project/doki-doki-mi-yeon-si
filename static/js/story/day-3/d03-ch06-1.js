import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d03_ch06_1 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch06-1")
  .setNextChapterName("d03-ch07")
  .addTextScene("나", ["삭힌 홍어 어때??"])
  .addSceneWithEvents([
    TextEvent.to("유진", [
      "와 그 수리남 홍어?!",
      "나 너무 먹어보고 싶었는데!!!!",
    ]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", ["너 센스좀 있다?"]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    EffectEvent.drawLoveEffect(),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
    NpcEvent.increaseLove(NPC_NAMES.YUJIN),
  ])
  .addTextScene("나", "(역시 독특한 애다.)")
  .build();
