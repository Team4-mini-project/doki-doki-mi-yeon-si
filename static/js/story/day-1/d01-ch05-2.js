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
 * 유진의 부탁에 허리디스크로 거절한다.
 */
export const d01_ch05_2 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch05-2")
  .setNextChapterName("d01-ch06")
  .addTextScene("나", "미안. 나 허리가 안좋아서 무리야")
  .addSceneWithEvents([
    TextEvent.to("유진", [
      "아.. 몸이 안좋구나 ",
      "기사님께 부탁드려야겠다. 그럼",
    ]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.sad),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_2_1_yujin),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", ["괜찮으니까 집에 조심히가~"]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_2_2_yujin),
  ])
  .addTextScene("나", "응. 너도 고생해~")
  .build();
