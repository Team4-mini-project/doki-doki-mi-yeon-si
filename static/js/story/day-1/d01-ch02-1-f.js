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
export const d01_ch02_1_f = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch02-1-f")
  .setNextChapterName("d01-ch03")
  .addSceneWithEvents([
    SoundEvent.playBgm(BGM_NAMES.MORNING),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.sad),
    TextEvent.to("유진", [
      ".... (나보다 멍청한거같은데)",
      "(나피디 한테 도 물어봐야 겠다)",
    ]),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addSceneWithEvents([
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_f_2_yujin),
    TextEvent.to("유진", "알려줘서 고마워 (두번다시 안물어봐야지)"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
  ])
  .addSceneWithEvents([NpcEvent.showRight(NPC_NAMES.YUJIN, yujin.faces.sad)])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to(null, "유진은 강의실을 빠르게 나갔다."),
  ])
  .addTextScene("나", ["내가 뭐 틀렸나?", "근데 그 내용 시간에 졸긴 했지"])
  .addTextScene("나", "밥이나 먹어야겠당")
  .build();
