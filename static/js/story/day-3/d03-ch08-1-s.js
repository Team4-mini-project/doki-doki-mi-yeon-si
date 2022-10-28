import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";
import { seulgi } from "../../npc/character/seulgi.js";

/**
 * 유진의 질문게임 성공
 */
export const d03_ch08_1_s = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch08-1-s")
  .setNextChapterName("d03-ch09")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", "오~ 이해됐어 이해됐어"),
    //SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_s_1_yujin),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", "알려줘서 고마워!"),
    // SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_s_2_yujin),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
  ])
  // .addTextScene("나", "그래 점심 너무 좋지 뭐 먹을까?")
  // .addSceneWithEvents([
  //   TextEvent.to("슬기", "근처에 케비아 파는곳 있냐?"),
  //   SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_s_3_yujin),
  // ])
  // .addSceneWithEvents([
  //   NpcEvent.hide(NPC_NAMES.YUJIN),
  //   TextEvent.to("나", "케비아??? (뭐지.... 금수저라 그런가....)"),
  // ])
  // .addTextScene("나", "그...래...가자...")
  .build();
