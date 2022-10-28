import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";

export const d01_ch06 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch06")
  .setNextChapterName(null)
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to("나", "아.. 힘든 하루였다..."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.MY_ROOM_NIGHT),
  ])
  .addTextScene(null, "나는 기절하듯 자버렸다.")
  .endOfDays()
  .build();
