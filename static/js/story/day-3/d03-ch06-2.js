import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

export const d03_ch06_2 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch06-2")
  .setNextChapterName("d03-ch07")
  .addTextScene("나", ["무난하게 소고기 어때??", "(아니 무난하지않아.)"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    TextEvent.to("유진", [
      "소고기 너무 자주 먹었는데...",
      "그래도 소고기 먹어줄만 하지 가자!!",
    ]),
  ])
  .build();
