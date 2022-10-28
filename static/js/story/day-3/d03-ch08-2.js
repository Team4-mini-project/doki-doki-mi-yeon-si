import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

export const d03_ch08_2 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch08-2")
  .setNextChapterName("d03-ch09")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("나", "아.. 오늘 수업은 미안 나도잘 모르겠더라...."),
  ])
  .addTextScene("슬기", [
    "아.. 또 그래? 아쉽네.",
    "다음에는 잘 듣고 알려줘 ㅎㅎ",
  ])
  .build();
