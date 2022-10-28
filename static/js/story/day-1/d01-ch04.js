import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { STUDY_SUBJECT_NAMES } from "../../study/const/study-subject-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";
import { StoryEvent } from "../event/story-event.js";

/**
 * 오후 수업
 */
export const d01_ch04 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch04")
  .setNextChapterName(null)
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.LECTURE_ROOM),
    NpcEvent.showCenter(NPC_NAMES.NEWLEC, null),
    NpcEvent.hide(NPC_NAMES.SEULGI),
    TextEvent.to("뉴렉처", "자 여러분 점심은 잘 드시고 오셨나요?"),
  ])
  .addTextScene("뉴렉처", "그럼 3교시 자바 수업 들어갑니다~")
  .addStudyScene(STUDY_SUBJECT_NAMES.JAVA_BASE.Study_java_1)
  .addSceneWithEvents([
    TextEvent.to(
      "뉴렉처",
      "자 여러분 오늘 수업 끝이네요 다들 수요일에 봅시다~"
    ),
    NpcEvent.showCenter(NPC_NAMES.NEWLEC, null),
  ])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.NEWLEC),
    TextEvent.to("???", "오 !"),
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", "너 나랑 같은 수업 듣네?"),
    StoryEvent.drawSceneImage(seulgi.sceneFaces.inClass),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch04_1_seulgi),
  ])
  .addTextScene("나", "어 뭐야!!  너 수업까지 나랑 같은거 듣네???")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to(
      "슬기",
      "그러게 후후.. 근데 나 질문 있는데 뭐 하나만 물어봐도 될까?"
    ),
    StoryEvent.hideSceneImage(),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch04_2_seulgi),
  ])
  .addSelectScene([
    new PopUpFrame("d01-ch04-1", "바쁘다고 말한다."),
    new PopUpFrame("d01-ch04-2", ["응. 알려줄게", "(문제를 맞춰라! 게임)"]),
    new PopUpFrame("d01-ch04-3", "(배가 아파서 급한데..)"),
  ])
  .build();
