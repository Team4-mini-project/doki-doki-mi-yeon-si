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
 * 유진이의 질문에 대한 호감도 하락 선택
 */
export const d01_ch02_3 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch02-3")
  .setNextChapterName("d01-ch03")
  .addTextScene("나", "넌 또 뭐야? 야! 나 바빠 다음에 물어봐 ")
  .addSceneWithEvents([
    TextEvent.to(null, "(유진이 나를 경멸하는 표정으로 쳐다본다.)"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.dis),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", ["...알았어", "서민들이란"]),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_3_1_yujin),
  ])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to("나", ["밥이나 먹어야 겠당"]),
  ])
  .build();
