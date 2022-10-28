import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

export const d03_ch04_2 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch04-2")
  .setNextChapterName("d03-ch05")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("나", "아.. 오늘 수업은 미안 나도 잘 모르겠어"),
  ])
  .addTextScene("유진", ["그래? 아쉽네. 다음에는 잘 듣고 알려줘"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    TextEvent.to("유진", "그럼 밥이나 같이 먹으러가자"),
  ])
  .build();
