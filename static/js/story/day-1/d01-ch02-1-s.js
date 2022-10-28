import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";

/**
 * 유진의 질문게임 성공
 */
export const d01_ch02_1_s = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch02-1-s")
  .setNextChapterName("d01-ch03")
  .addSceneWithEvents([
    SoundEvent.playBgm(BGM_NAMES.MORNING),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    TextEvent.to("유진", "오~ 이해됐어 이해됐어"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_s_1_yujin),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("유진", "알려줘서 고마워! 다음에 오마카세 한번 사줄게"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_s_2_yujin),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
  ])
  .addTextScene("나", "헉, 오마카세?! 아니 괜찮아")
  .addSceneWithEvents([
    TextEvent.to("유진", "먹고싶을 때 언제든지 말해! 그럼 안녕~"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_s_3_yujin),
  ])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to("나", "오마카세..? 역시 금수저 클라스..."),
  ])
  .addTextScene("나", "학식이나 먹어야겠당")
  .build();
