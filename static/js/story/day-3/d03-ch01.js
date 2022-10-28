import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";

export const d03_ch01 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch01")
  .setNextChapterName(null)
  .addSceneWithEvents([
    TextEvent.to(null, "오늘도 알람이 상큼하게 울린다."),
    SoundEvent.playEffect(EFFECT_NAEMS.ALARM),
  ])

  .addSceneWithEvents([
    TextEvent.to("나", ["아….. ", "아침에 일어나는건 항상 적응이 안 돼……."]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.MY_ROOM),
    SoundEvent.playBgm(BGM_NAMES.MORNING),
  ])
  // .addSceneWithEvents([
  //   TextEvent.to(null, "(샤워를 준비하는 주인공)"),
  //   BackgroundEvent.changeTo(BACKGROUND_NAMES.BATHROOM),
  // ])
  // .addSceneWithEvents([
  //   TextEvent.to(null, "(샤워 중..........)"),
  //   BackgroundEvent.changeTo(BACKGROUND_NAMES.BATHROOMING),
  // ])
  .addSceneWithEvents([
    TextEvent.to("나", ["아!!", "피곤한데 편의점 가서 커피나 마셔야겠다~~."]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.STREET),
  ])
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.SHOP),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", "어서오세요~ 뉴렉 편의점입니다."),
    SoundEvent.playEffect(EFFECT_NAEMS.STORE_BELL),
    SoundEvent.playVoice(VOICE_NAEMS.TEST1),
  ])
  .addTextScene("나", ["안녕~", "오늘도 커피 사러 왔어~"])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", [
      "주성이 안녕~ ",
      "너 어제 놀이동산에는 잘 갔다 왔어?",
    ]),
  ])
  .addTextScene("나", ["응! 잘 다녀왔지", "같이 못가서 아쉽더라..."])
  .addSceneWithEvents([
    TextEvent.to("슬기", ["헤헹. 그래도 재미있었다니까 다행이네"]),
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", ["아, 그리고...", "부탁이 있는데 해도 될까???"]),
  ])
  .addTextScene("나", "무슨 부탁?")
  .addSceneWithEvents([
    TextEvent.to("슬기", [
      "오늘 알바가 늦게 끝나서",
      "수업때 자리 좀 잡아줘라...",
    ]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.sad),
  ])
  .addSelectScene([
    new PopUpFrame("d03-ch02-1", ["뭐야 간단하네", "당근이지 ^_^"]),
    new PopUpFrame("d03-ch02-2", ["(그러면 남한테 피해가", "갈 것 같은데..)"]),
    new PopUpFrame("d03-ch02-3", ["그냥 우리 둘 다", "자체공강 할까?"]),
  ])
  .build();
