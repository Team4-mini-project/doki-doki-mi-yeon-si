import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { STUDY_SUBJECT_NAMES } from "../../study/const/study-subject-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";

/**
 *
 */
export const d03_ch07 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch07")
  .setNextChapterName(null)
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.YUJIN),
    TextEvent.to(null, ["유진이와 나는 점심을 먹고 각자 수업 강의실로 갔다."]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.LECTURE_ROOM),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", ["주성아 맛점 했어?", "내가 좀 늦었지 흐으-"]),
  ])
  .addTextScene(null, ["맛있게 먹었지! 자리도 여기 맡아놨어"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", ["오 고마워! 수업 열심히 들어보자"]),
  ])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.SEULGI),
    NpcEvent.showCenter(NPC_NAMES.NEWLEC, null),
    TextEvent.to("뉴렉처", ["자, 여러분, 30분이니까 수업할까요?"]),
  ])
  .addStudyScene(STUDY_SUBJECT_NAMES.JAVA_BASE.Study_java_2)
  .addSceneWithEvents([
    TextEvent.to(
      null,
      "막내 학생이 손을 들었다. 수업이 끝나는 시간이 되었나보다."
    ),
    TextEvent.to("뉴렉처", [
      "오늘도 고생 많았습니다",
      "HTML 강의 올렸으니까 꼭 보세요~",
      "안보면 슬퍼 힝!",
    ]),
  ])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.NEWLEC),
    TextEvent.to(null, "주성아~~"),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", "나 자바 문제 물어봐도 돼??"),
  ])
  .addSelectScene([
    new PopUpFrame("d03-ch08-1", ["당근 이지 ^_^", "문제를 받아라! 게임"]),
    new PopUpFrame("d03-ch08-2", ["음.. 나도 잘...", "못들어서..ㅠ"]),
    new PopUpFrame("d03-ch08-3", ["(혼자 공부하는 ", "방법을 알려준다.)"]),
  ])
  .build();
