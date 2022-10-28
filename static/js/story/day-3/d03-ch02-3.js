import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d03_ch02_3 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch02-3")
  .setNextChapterName("d03-ch03")
  .addTextScene("나", "(real man이란 소녀의 어려움을 같이 공감하는 법.)")
  .addTextScene("나", ["자체 공강하자!", "같이해야 제맛이지"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.dis),
    TextEvent.to("슬기", "으..응? 그런건 나쁜 애들이 하는거잖아. 안돼."),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addTextScene("나", "아앗.. 그..그러네 자리는 잡아둘게")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", "오 고마워! 이따보자"),
  ])
  .build();
