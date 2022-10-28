import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

/**
 * 슬기의 제안에 방구를 껴버리고 만다.
 */
export const d01_ch03_3 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch03-3")
  .setNextChapterName("d01-ch04")
  .addTextScene("나", "(윽, 잠깐..!)")
  .addSceneWithEvents([
    TextEvent.to("슬기", "!!!"),
    SoundEvent.playEffect(EFFECT_NAEMS.CUTE_FART),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.wrong),
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", "배가 많이 아팠나보다.. 하하"),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.dis),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_3_1_seulgi),
  ])
  .addTextScene("나", [
    "미..미안 나 갑자기 갈 곳이 생긴 것 같아",
    "먼저 먹고있어 안녕!!!",
  ])
  .addTextScene(null, "나는 그렇게 황급히 자리를 떴다.")
  .build();
