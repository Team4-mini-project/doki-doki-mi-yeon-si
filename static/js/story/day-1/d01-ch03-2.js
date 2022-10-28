import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

/**
 * 슬기의 제안에 일행이 있다고 거짓말을 한다.
 */
export const d01_ch03_2 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch03-2")
  .setNextChapterName("d01-ch04")
  .addTextScene("나", "아 미안. 점심 같이 먹을 일행이 있어가지고")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", ["그래? 어쩔 수 없겠다 그럼", "밥 맛있게 먹어!"]),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_2_1_seulgi),
  ])
  .addTextScene("나", "응 너도 맛점해~")
  .addTextScene(null, "친구도 없는 나는 거짓말을하고 자리를 떠버렸다.")
  .build();
