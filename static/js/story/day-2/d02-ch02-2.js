import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

export const d02_ch02_2 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch02-2")
  .setNextChapterName("d02-ch03")
  .addTextScene("나", "오늘은 힘든데..", "다음에 같이 갈래?")
  .addTextScene("슬기", ["아니야. 나 어차피", "알바 끝날라면 한참 남았어.."])
  .addTextScene("나", "그래? 다음에 기회되면 같이 가보자 그럼")
  .addSceneWithEvents([
    TextEvent.to("슬기", ["그러자! 오늘 날씨도 좋은데 재밌게 놀고와!"]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
  ])
  .build();
