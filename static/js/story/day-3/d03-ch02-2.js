import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";

export const d03_ch02_2 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch02-2")
  .setNextChapterName("d03-ch03")
  .addTextScene("나", "근데 그러면 다른 애들한테 피해가 가지않을까?")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.wrong),
    TextEvent.to("슬기", "앗 그러네?! 그럼 그냥 앉아야겠다"),
  ])
  .addTextScene("나", "그래도 자리는 한번 맡아볼게. 이따보자")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", "응! 고마워 잘가~"),
  ])
  .build();
