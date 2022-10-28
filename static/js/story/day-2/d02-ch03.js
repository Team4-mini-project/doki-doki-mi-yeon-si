import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";
import { StoryEvent } from "../event/story-event.js";

/**
 * 식당으로 도착한 주인공
 */
export const d02_ch03 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch03")
  .setNextChapterName("d02-ch04")
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.SEULGI),
    TextEvent.to("나", "휴. 늦지않게 도착했다. 애들은 어딨지?"),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.BUS),
    SoundEvent.playEffect(EFFECT_NAEMS.BUSSTOP),
  ])
  .addTextScene("친구들", "주성아 여기!!")
  .addTextScene(null, "나는 친구들과 만나 뉴렉랜드로 출발했다.")
  .addSceneWithEvents([
    TextEvent.to("나", "오우.. 이게 뉴렉랜드?! 대기업의 놀이공원은 다르구먼"),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.PARKPLAY1),
  ])

  .addSceneWithEvents([
    TextEvent.to("나", "우효옷~! 뉴렉랜드 최고!!!"),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.PARKPLAY2),
  ])
  .addTextScene(null, "그렇게 시간가는 줄도 모르고 신나게 놀았다.")
  .addSceneWithEvents([
    TextEvent.to("나", ["야 오늘 진짜 재미있었다!!!!", "애들아 잘가~~"]),
    BackgroundEvent.changeTo(BACKGROUND_NAMES.WAYHOME),
    SoundEvent.playBgm(BGM_NAMES.EVENING),
  ])
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.WAYHOME),
    TextEvent.to("나", "후우~ 이제 집에가야지"),
  ])
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.WAYHOMECAR),
    TextEvent.to(null, "그 때, 옆에서 갑자기 차가 튀어 나왔다."),
    SoundEvent.playEffect(EFFECT_NAEMS.NOLSNOISE),
  ])
  .addTextScene("나", ["!!!!!!!!!!!", "아니... 이건 놀스노이스????"])
  .addSceneWithEvents([
    StoryEvent.drawSceneImage(yujin.sceneFaces.onStreet),
    TextEvent.to("유진", "어 주성아??!??"),
  ])
  .addTextScene("나", "어!! 안유진?")
  .addTextScene("나", "(뭐야 이 차.... 유진이 차야??)")
  .addTextScene("유진", "기사님! 차 좀 갓길에 세워주세요~")
  .addSceneWithEvents([
    StoryEvent.hideSceneImage(),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("유진", [
      "나 속이 안 좋아서 좀 걸을라 그러는데",
      "좀 같이 걸을까?",
    ]),
  ])
  .addSelectScene([
    new PopUpFrame("d02-ch04-1", ["그래! 같이 걷자"]),
    new PopUpFrame("d02-ch04-2", [
      "(기사님 표정이 무섭다.",
      "아무래도 거절한다.)",
    ]),
    new PopUpFrame("d02-ch04-3", ["(추워보이는데", "거절한다.)"]),
  ])
  .build();
