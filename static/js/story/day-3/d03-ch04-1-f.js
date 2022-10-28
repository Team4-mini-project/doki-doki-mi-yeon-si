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
 * 유진의 질문게임 실패
 */
export const d03_ch04_1_f = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch04-1-f")
  .setNextChapterName("d03-ch05")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.sad),
    TextEvent.to("유진", "아하... 수업 때 들은거랑 좀 다른 것 같은데.."),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_f_1_yujin),
    SoundEvent.playBgm(BGM_NAMES.MORNING),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addSceneWithEvents([
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_f_2_yujin),
    TextEvent.to("유진", "아무튼 알려줘서 고마워"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
  ])
  .addSceneWithEvents([
    NpcEvent.showRight(NPC_NAMES.YUJIN, yujin.faces.sad),
    TextEvent.to("유진", "(교수님께 물어봐야겠다)"),
  ])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to("유진", "점심이나 먹으러 가자 주성아...."),
  ])
  .addTextScene("나", ["내가 뭐 틀렸나?", "근데 그 내용 시간에 졸긴 했지"])
  .addTextScene("나", "그래 밥이나 먹으러 가자~")
  .build();
