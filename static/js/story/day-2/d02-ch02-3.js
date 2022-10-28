import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d02_ch02_3 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch02-3")
  .setNextChapterName("d02-ch03")
  .addTextScene("나", ["야, 알바 바빠보이는데", "일부터 열심히해~"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.dis),
    TextEvent.to("슬기", "...알았어...."),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addTextScene("나", "(나는 사장님 마음도 생각하는 real man..)")
  .build();
