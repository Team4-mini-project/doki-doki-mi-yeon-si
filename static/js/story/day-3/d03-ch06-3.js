import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d03_ch06_3 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch06-3")
  .setNextChapterName("d03-ch07")
  .addTextScene("나", ["라면은 어때?", "(라면 좋아하려나?....)"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.dis),
    TextEvent.to("유진", ["그 서민들이 좋아하는... 라멘도 아니고 라면??"]),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addTextScene(null, "결국 구박받고 초밥을 먹었다.")
  .build();
