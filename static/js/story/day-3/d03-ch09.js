import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";

/**
 *
 */
export const d03_ch09 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch09")
  .setNextChapterName(null)
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.SEULGI),
    TextEvent.to("나", ["오늘 하루도 힘들었다. 집에 가자.."]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.TRAIN_NIGHT),
  ])
  .addSceneWithEvents([
    TextEvent.to(null, ["나는 집에 도착하자마자 침대에 몸을 던졌다."]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.MY_ROOM_NIGHT),
  ])
  .addSceneWithEvents([
    TextEvent.to(null, ["뉴렉톡!!"]),
    // 카톡 사운드 추가
  ])
  .addTextScene("나", "이 시간에 누구지...?")
  .endOfDays()
  .build();
