import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";

/**
 *
 */
export const d03_ch05 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch05")
  .setNextChapterName(null)
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to(null, "유진이와 식당에 도착했다."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.HAKSIK),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("유진", [
      "주성아 점심 뭐 먹을래? 내가 살게 오늘 용돈 받았어!",
    ]),
  ])
  .addTextScene("나", "용돈? 얼마나?")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.dis),
    TextEvent.to("유진", ["음.. 2천만원이였나?"]),
  ])
  .addTextScene("나", "?!...")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile3),
    TextEvent.to("유진", ["아무튼, 너가 메뉴 좀 골라봐"]),
  ])
  .addTextScene(null, "무엇을 골라야할까...?")
  .addSelectScene([
    new PopUpFrame("d03-ch06-1", "삭힌 홍어"),
    new PopUpFrame("d03-ch06-2", "소고기"),
    new PopUpFrame("d03-ch06-3", "라면"),
  ])
  .build();
