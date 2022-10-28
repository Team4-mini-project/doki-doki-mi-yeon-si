import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { STUDY_SUBJECT_NAMES } from "../../study/const/study-subject-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";

export const d01_ch01 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch01")
  .setNextChapterName(null)
  .addTextScene(null, "음악 재생을 위한 skip scene입니다")
  .addSceneWithEvents([
    TextEvent.to(null, "...삐삐..삐삐삐..."),
    SoundEvent.playEffect(EFFECT_NAEMS.ALARM),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", [
      "으아아앙!!! 오늘이 드디어 대학생활 첫 날인가",
      "얼른 준비하고 나가야지",
    ]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.MY_ROOM),
    SoundEvent.playBgm(BGM_NAMES.MORNING),
  ])
  .addSceneWithEvents([
    TextEvent.to(null, "준비를 다 한 나는 설레는 마음으로 집을 나섰다."),
    SoundEvent.playEffect(EFFECT_NAEMS.COMEBACK_HOME),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", "가는길에 편의점에서 커피나 사가야겠다."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.STREET),
    SoundEvent.playEffect(EFFECT_NAEMS.HODADADAK),
  ])
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.SHOP),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", "어서오세요~ 뉴렉 편의점입니다."),
    SoundEvent.playEffect(EFFECT_NAEMS.STORE_BELL),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch01_1_seulgi),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", "(오.. 알바 이쁘다)"),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
  ])
  .addTextScene(null, "나는 커피를 들고 계산대로 왔다.")
  // .addTextScene("슬기", "1700원 입니다.")
  .addSceneWithEvents([
    TextEvent.to("슬기", "1700원 입니다."),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch01_2_seulgi),
  ])
  .addSceneWithEvents([
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch01_3_seulgi),
    TextEvent.to("슬기", "1 + 1 행사 상품이신데 하나 더 안가져가시나요?"),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.wrong),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", "아 넵 감사합니다. 이따 가져갈게요."),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
  ])

  .addSceneWithEvents([
    TextEvent.to(null, "나는 커피를 쪽쪽빨며 강의실에 들어왔다."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.LECTURE_ROOM),
    NpcEvent.hide(NPC_NAMES.SEULGI),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.NEWLEC, null),
    SoundEvent.playEffect(EFFECT_NAEMS.CLAP),
    TextEvent.to("뉴렉처", [
      "자, 여러분 반갑습니다. ",
      "여러분들의 첫 강의를 맡게된 뉴렉 교수라고 해요.",
    ]),
  ])
  .addTextScene("뉴렉처", "저희 수업에 막내분이 누구시죠?")
  .addSceneWithEvents([
    TextEvent.to(null, "학생 중 누군가 대충 손을 든다."),
    SoundEvent.playEffect(EFFECT_NAEMS.THATSME),
  ])
  .addTextScene("뉴렉처", [
    "저희 수업이 뭐 배우는 수업인지 아시죠?",
    "네 맞습니다. 바로 자바 수업입니다.",
  ])
  .addTextScene("뉴렉처", [
    "첫 날이지만 바로 수업 시작하겠습니다.",
    "막내 학생. 수업이 끝나는 시간이 되면 알려주세요.",
  ])
  .addStudyScene(STUDY_SUBJECT_NAMES.JAVA_OOP.Study_1)
  .addSceneWithEvents([
    TextEvent.to(
      null,
      "막내 학생이 손을 들었다. 수업이 끝나는 시간이 되었나보다."
    ),
    NpcEvent.hide(NPC_NAMES.NEWLEC),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.NEWLEC, null),
    TextEvent.to("뉴렉처", ["네 막내님 질문있나요?"]),
    SoundEvent.playEffect(EFFECT_NAEMS.RESTTIME),
  ])
  .addTextScene("뉴렉처", "아 수업 끝났구나. 밥 맛있게들 드세용~")
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.NEWLEC),
    TextEvent.to("나", "(첫 날부터 수업이라니.. 이게 대학교?)"),
  ])
  .addTextScene(null, "자리에서 일어나려는 순간, 누군가 내 앞에 왔다.")
  .addSceneWithEvents([
    TextEvent.to("???", "야, 너"),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch01_1_yujin),
  ])
  .addSceneWithEvents([
    // 또잉 효과음
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("유진", [
      "옆에서 보니까 수업 열심히 듣는 것 같던데",
      "뭐 하나만 물어봐도 돼?",
    ]),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch01_2_yujin),
  ])
  .addTextScene("나", "아.. 네??")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    TextEvent.to("나", "( 뭐야 죄다 비싼 명품 투성이잖아!!! 부자인가?! )"),
  ])
  .addSelectScene([
    new PopUpFrame("d01-ch02-1", ["알려준다.", "(문제를 받아라! 게임)"]),
    new PopUpFrame("d01-ch02-2", ["미안, 나도", "수업 이해를 못 했어.."]),
    new PopUpFrame("d01-ch02-3", ["배가 고프니까", "오늘은 넘어간다."]),
  ])
  .build();
