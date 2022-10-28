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

export const d02_ch01 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch01")
  .setNextChapterName(null)
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.MY_ROOM),
    TextEvent.to(null, "아침이 밝았다."),
    SoundEvent.playEffect(EFFECT_NAEMS.ALARM),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", [
      "아… 아침은 항상 힘들어",
      "지금 몇시지……",
      "아 맞다 오늘 애들이랑 놀러 가기로 했구나!!",
    ]),
    SoundEvent.playBgm(BGM_NAMES.MORNING),
    SoundEvent.playEffect(EFFECT_NAEMS.HAPOOM),
  ])
  .addSceneWithEvents([TextEvent.to("나", "빨리 준비하고 나가야겠다."), ,])
  .addSceneWithEvents([
    SoundEvent.playEffect(EFFECT_NAEMS.FOOTSOUND),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.STREET),
    TextEvent.to("나", [
      "오늘은 고등학교 친구들이랑 뉴렉랜드 가는날!",
      "공기도 산뜻하니 좋구먼",
    ]),
  ])
  .addSceneWithEvents([
    TextEvent.to("나", "아 맞다 슬기 편의점에 들러서 먹을 것 좀 사가야겠다."),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.STREET),
  ])
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.SHOP),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", "어서오세요~ 뉴렉 편의점입니다."),
    SoundEvent.playEffect(EFFECT_NAEMS.STORE_BELL),
    SoundEvent.playVoice(VOICE_NAEMS.TEST1),
  ])
  .addTextScene("나", [
    "안녕~",
    "뭐 좀 사갈게 있어서 들렀어",
    "일 잘하고 있지?",
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", ["그럼 잘하고 있다마다~~", "뭐야 너 어디 놀러가???"]),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
  ])
  .addTextScene("나", ["응!!", "나 친구들 이랑 뉴렉랜드가서 놀다가 오려고"])
  .addTextScene("슬기", ["부럽다….. ", "나도 뉴렉랜드 가보고 싶었는데…"])
  .addSelectScene([
    new PopUpFrame("d02-ch02-1", ["너도 같이 갈래? 훗"]),
    new PopUpFrame("d02-ch02-2", ["오늘은 힘든데..", "다음에 같이 갈래?"]),
    new PopUpFrame("d02-ch02-3", ["(오늘 알바", "바쁘지않나..?)"]),
  ])
  .build();
