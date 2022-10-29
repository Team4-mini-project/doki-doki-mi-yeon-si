import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

/**
 * 유진의 질문게임 성공
 */
export const d03_ch04_1_s = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch04-1-s")
  .setNextChapterName("d03-ch05")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    TextEvent.to("유진", "오~ 이해됐어 이해됐어"),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("유진", "알려줘서 고마워! 점심 같이 먹으러 가자~"),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
  ])
  .addTextScene("나", "그래 점심 너무 좋지 뭐 먹을까?")
  .addSceneWithEvents([TextEvent.to("유진", "근처에 케비아 파는곳 있냐?")])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to("나", "케비아??? (뭐지.... 금수저라 그런가....)"),
  ])
  .addTextScene("나", "그...래...가자...")
  .build();
