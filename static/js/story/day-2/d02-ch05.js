import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";

/**
 * 식당으로 도착한 주인공
 */
export const d02_ch05 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch05")
  .setNextChapterName(null)
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to(null, "나는 어찌어찌 집에 도착했다."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.MY_ROOM_NIGHT),
    ])
    .addSceneWithEvents([
      TextEvent.to("나","오늘도 진짜 힘든 하루였다.....")
    ])
    .addSceneWithEvents([
      TextEvent.to(null,["피곤한 나머지","그대로 잠에 들어버린 주인공","오늘 하루도 이렇게 끝이난다."])
    ])
    .endOfDays()
    .build();
