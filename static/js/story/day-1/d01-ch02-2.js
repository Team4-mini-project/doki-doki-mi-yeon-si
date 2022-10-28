import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

/**
 * 유진이의 질문에 대한 호감도 유지 선택
 */
export const d01_ch02_2 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch02-2")
  .setNextChapterName("d01-ch03")
  .addTextScene("나", "미안, 나도 이해를 못 해서 지금은 안될 거 같은데..")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("유진", [
      "아 그래? 상우한테 물어봐야겠다.",
      "déjeuner 맛있게 먹어~",
    ]),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_2_1_yujin),
  ])
  .addTextScene("나", "므.. 뭐라고?")
  .addSceneWithEvents([
    TextEvent.to("유진", "서민들이란.. 점심 맛있게 먹으라구"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_2_2_yujin),
  ])
  .addTextScene("나", "(뭐지...?)")
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to("나", ["밥이나 먹어야 겠당"]),
  ])
  .build();
