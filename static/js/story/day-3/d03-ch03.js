import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { STUDY_SUBJECT_NAMES } from "../../study/const/study-subject-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";

/**
 *
 */
export const d03_ch03 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch03")
  .setNextChapterName(null)
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.SEULGI),
    TextEvent.to(
      null,
      "학교가는 지하철에서 듣는 나훈아의 테스형은 날 감성 돋게한다."
    ),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.GOUNIVERCITY),
  ])
  .addSceneWithEvents([
    TextEvent.to(null, "그 증거로 벌써 강의실에 도착했다."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.LECTURE_ROOM),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", "야~! 주성!!"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", [
      "오늘도 수업 열심히듣고",
      "나 좀 알려줘~ 알겠지? 흐흐",
    ]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile2),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", " 그으래 일단은 열심히 들을께….."),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
  ])
  .addTextScene("유진", "역시 주성이.. 믿는다 그럼?")
  .addSceneWithEvents([
    NpcEvent.showRight(NPC_NAMES.YUJIN, yujin.faces.default),
    NpcEvent.showLeft(NPC_NAMES.NEWLEC, null),
    TextEvent.to("뉴렉처", [
      "자, 여러분 반갑습니다. ",
      "그럼 또 수업 시작 할까요?",
    ]),
  ])
  .addStudyScene(STUDY_SUBJECT_NAMES.JAVA_OOP.Study_2)
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to(
      null,
      "역시나 막내 학생이 손을 들었다. 수업이 끝나는 시간이 되었나보다."
    ),
    NpcEvent.hide(NPC_NAMES.NEWLEC),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    TextEvent.to("유진", "잘 들었지?! 그럼 질문을 시작하지..."),
  ])
  .addSelectScene([
    new PopUpFrame("d03-ch04-1", [
      "그래 질문이 뭐야.",
      "(문제를 맞춰라! 게임)",
    ]),
    new PopUpFrame("d03-ch04-2", ["(오늘 수업이", "어려웠다고 말한다.)"]),
    new PopUpFrame("d03-ch04-3", ["(공부는 스스로한다고", "일갈한다.)"]),
  ])
  .build();
