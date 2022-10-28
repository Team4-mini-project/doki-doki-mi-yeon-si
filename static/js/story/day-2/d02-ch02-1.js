import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d02_ch02_1 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch02-1")
  .setNextChapterName("d02-ch03")
  .addTextScene("나", "아 그래? 그럼 우리 같이 가자")
  .addSceneWithEvents([
    TextEvent.to("슬기", [
      "말만해도 고맙다!!",
      "근데 나 알바 끝나려면 한참 남았어…",
    ]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", ["오늘 날씨도 좋은데 재밌게 놀고와!"]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
  ])
  .addTextScene("나", "아쉽네.. 먼저 가볼게 그럼")
  .addTextScene("슬기", "빠잉~")
  .build();
