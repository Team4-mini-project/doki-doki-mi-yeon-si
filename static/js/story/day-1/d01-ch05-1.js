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
 * 유진의 부탁에 응한다.
 */
export const d01_ch05_1 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch05-1")
  .setNextChapterName("d01-ch06")
  .addTextScene("나", "그러면 도와줘야지!! 뭐부터 도와줄까?")
  .addSceneWithEvents([
    TextEvent.to("유진", "고마워. 저기 스프링 책부터 옮기면 돼!"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_1_1_yujin),
  ])
  .addTextScene(null, "그렇게 전공책 4천개를 옮겼다.")
  .build();
