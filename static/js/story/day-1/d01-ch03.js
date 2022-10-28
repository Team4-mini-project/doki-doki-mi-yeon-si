import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";

/**
 * 식당으로 도착한 주인공
 */
export const d01_ch03 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch03")
  .setNextChapterName(null)
  .addSceneWithEvents([
    TextEvent.to(null, "나는 점심을 먹으러 학교 식당에 왔다."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.HAKSIK),
    NpcEvent.hide(NPC_NAMES.YUJIN),
  ])
  .addTextScene("나", "응애 나 배고파. 응?")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to(null, [
      "창가 쪽 테이블에 오늘 아침에 봤던",
      "편의점 알바생이 혼자 밥을 먹고 있었다.",
    ]),
  ])
  .addTextScene("나", "혹시 아침에 편의점 알바 그 분 맞죠?")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.wrong),
    TextEvent.to("슬기", "어 그 아침에 커피 사가신분?"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_1_seulgi),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("나", "이 학교 다니시는 학생이시구나~"),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", "네!! 맞아요. 저랑 같은 학교네요. ㅎㅎ"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_2_seulgi),
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", "03년생이시죠? 말 편하게 해요!"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_3_seulgi),
  ])
  .addTextScene("나", ["구랭. 나도 그게 편해", "난 주성이라고해 너는?"])
  .addSceneWithEvents([
    TextEvent.to("슬기", "난 슬기야! 헤헤"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_4_seulgi),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.wrong),
    TextEvent.to("슬기", [
      "어! 혹시 밥 나랑 같이 먹을래?",
      "혼밥은 아직 부끄러워서..",
    ]),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_5_seulgi),
  ])
  .addSelectScene([
    new PopUpFrame("d01-ch03-1", ["응 그러자!"]),
    new PopUpFrame("d01-ch03-2", ["아 미안, 점심은", "선약이 있어서.."]),
    new PopUpFrame("d01-ch03-3", ["(살짝 배가 아픈데?", "방구를 몰래 뀐다.)"]),
  ])
  .build();
