import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { seulgi } from "../../npc/character/seulgi.js";

/**
 * 유진의 질문게임 성공
 */
export const d01_ch04_2_s = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch04-2-s")
  .setNextChapterName("d01-ch05")
  .addSceneWithEvents([
    SoundEvent.playBgm(BGM_NAMES.MORNING),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", "오 너 엄청 똑똑하다 ㅎㅎ"),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", "알려줘서 고마워! "),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
  ])
  .addTextScene("나", "모르는거 있으면 편하게 물어봐")
  .addSceneWithEvents([TextEvent.to("슬기", "역시 주성이야")])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.SEULGI),
    TextEvent.to("나", "real man 이란 소녀를 도와주는법"),
  ])
  .build();
