import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";

/**
 * 강의실에서 슬기와 만난 후 유진과 만나는 주인공
 */
export const d01_ch05 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch05")
  .setNextChapterName(null)
  .addSceneWithEvents([
    TextEvent.to("나", ["휴.. 대학생활 스타트가 나쁘지 않은 거 같은데?"]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.UNI_ENTRANCE),
    SoundEvent.playBgm(BGM_NAMES.EVENING),
  ])
  .addTextScene("나", "첫 날부터 좋은 친구도 만든 거 같고. 하핫")
  .addSceneWithEvents([
    TextEvent.to("???", "안녕?"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_1_yujin),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", ["이제 집에 가는거야?"]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    SoundEvent.playBgm(BGM_NAMES.EVENING),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_2_yujin),
  ])
  .addTextScene("나", "아 너구나?")
  .addSceneWithEvents([
    TextEvent.to("유진", ["너라니.. 유진이라고 불러"]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.dis),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_3_yujin),
  ])
  .addTextScene("나", "반갑습니다. 유진양. 난 주성이야.")
  .addSceneWithEvents([
    TextEvent.to("유진", ["주성? 이름 멋있네"]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile2),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_4_yujin),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", ["나 교수님한테 뭐 부탁받았는데 너 시간 돼?"]),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_5_yujin),
  ])
  .addTextScene("나", "응? 무슨 부탁?")
  .addSceneWithEvents([
    TextEvent.to("유진", "수업 때 필요한 책 나르는거야. 괜찮아?"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch05_6_yujin),
  ])
  .addSelectScene([
    new PopUpFrame("d01-ch05-1", ["그러면 도와줘야지!!"]),
    new PopUpFrame("d01-ch05-2", ["생각해보니", "난 허리가 안좋다."]),
    new PopUpFrame("d01-ch05-3", ["나 약속이 있어서", "미안."]),
  ])
  .build();
