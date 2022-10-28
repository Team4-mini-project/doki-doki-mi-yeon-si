import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

/**
 * 슬기의 질문에 회피한다.
 */
export const d01_ch04_3 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch04-3")
  .setNextChapterName("d01-ch05")
  .addTextScene("나", ["지금은 안될 것 같아", "가족 약속이 있어서 빨리 가야돼"])
  .addSceneWithEvents([
    TextEvent.to("슬기", [
      "그래? 어쩔 수 없네 그럼",
      "가족들이랑 좋은 시간 보내~",
    ]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch04_3_1_seulgi),
  ])
  .addSceneWithEvents([
    TextEvent.to(null, "슬기는 교수님께 질문을 하러 슬다닥 쫓아 나갔다."),
    NpcEvent.hide(NPC_NAMES.SEULGI),
  ])
  .addTextScene("나", "휴우.. 화장실 가야겠다.")
  .build();
