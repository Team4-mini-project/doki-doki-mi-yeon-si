import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d03_ch02_1 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch02-1")
  .setNextChapterName("d03-ch03")
  .addTextScene("나", "뉴렉 교수님한테 말하고 자리도 잡아볼게~")
  .addSceneWithEvents([
    TextEvent.to("슬기", [
      "아 진짜?! 고마워!",
      "내가 살테니까 커피라도 하나 가져가!",
    ]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", [
      "realman은 받지 않는법.",
      "자리는 맡겨두고 알바 고생해~",
    ]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", ["응! 이따보자"]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
  ])
  .build();
