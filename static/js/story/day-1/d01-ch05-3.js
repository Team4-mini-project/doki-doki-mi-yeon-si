import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

/**
 * 유진의 부탁에 약속이 있다고 말한다.
 */
export const d01_ch05_3 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch05-3")
  .setNextChapterName("d01-ch06")
  .addTextScene("나", "미안. 나 저녁 약속이 있어.")
  .addSceneWithEvents([
    TextEvent.to("유진", "그래? 그럼 기사님께 부탁드려야겠다!"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_3_1_yujin),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", "괜찮으니까 집에 조심히가~"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_2_2_yujin),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", "응. 너도 고생해~"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
  ])
  .build();
