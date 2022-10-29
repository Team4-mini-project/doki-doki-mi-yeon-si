import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { StoryEvent } from "../event/story-event.js";
import { EndEvent } from "../../global/event/end-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";

/**
 * 슬기 엔딩
 */
export const d04_ch_seulgi = new ChapterBuilder()
  .setDaysNum(4)
  .setChapterName("d04-ch-seulgi")
  .setNextChapterName(null)
  .addSceneWithEvents([
    SoundEvent.playBgm(BGM_NAMES.ENDING),
    TextEvent.to("나", "슬기랑 데이트 하는날! 으흐흐"),
  ])
  .addTextScene(null, "어제 자기전에 슬기에게 뉴렉톡이 왔었다!!")
  .addTextScene(null, "바로 저번에 얘기한 뉴렉월드를 같이 가자는 것!")
  .addTextScene("나", "여자랑 첫 뉴렉월드라니.. 멋있게 하고 가야딩")
  .addTextScene(null, "나는 후다닥 준비를하고 뉴렉 월드로 출발했다.")
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.PARKPLAY1),
    TextEvent.to("나", "와.. 평일인데 사람 많네.. 슬기는 어딨지?"),
  ])
  .addTextScene("슬기", "주성아!!")
  .addSceneWithEvents([
    StoryEvent.drawSceneImage(seulgi.sceneFaces.inPark1),
    TextEvent.to("슬기", "먼저 와있었구나!! 내가 늦었지?"),
  ])
  .addTextScene("나", ["아니 나도 방금왔어", "real man은 늦지 않는 법이지"])
  .addTextScene("슬기", "진짜? 다행이다. 나 뉴렉코스터 타보고싶어 빨리 가자!!")
  .addSceneWithEvents([
    StoryEvent.hideSceneImage(),
    TextEvent.to(
      null,
      "그렇게 슬기와 나는 5시간동안 뉴렉코스터만 10번을 탔다."
    ),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile2),
    TextEvent.to("슬기", "주성아 한번 더 타자!!!"),
  ])
  .addTextScene("나", "스... 슬기야 나 죽을 것 같아.. 이제 얌전한거 타자 우리")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", "그..그래? 좀 걷을까?"),
  ])
  .addTextScene("나", "응 제발.")
  .addSceneWithEvents([
    StoryEvent.drawSceneImage(seulgi.sceneFaces.inPark2),
    TextEvent.to("슬기", "고마워 주말에 귀찮을텐데 나랑 놀아주고..."),
  ])
  .addTextScene("나", "무슨 소리야? real man에게 이 정도는 기본이지")
  .addTextScene("슬기", "하하항!! 맞아 너 뤼얼맨이지?! 우리 저것도 타보자!!")
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.PARKPLAY3),
    StoryEvent.hideSceneImage(),
    TextEvent.to(null, "나와 슬기는 저녁까지 뉴렉월드에서 시간을 보냈다."),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    TextEvent.to("슬기", "시간 빠르다.. 벌써 저녁이야"),
  ])
  .addTextScene("나", "그러게. 오늘 슬기쿤이랑 같이해서 더 재밌었어")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    TextEvent.to("슬기", "와아 정말? "),
  ])
  .addTextScene("슬기", "있잖아 주성아")
  .addTextScene("나", "응?")
  .addSceneWithEvents([
    StoryEvent.drawSceneImage(seulgi.sceneFaces.inPark3),
    TextEvent.hide(),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
    StoryEvent.hideSceneImage(),
    TextEvent.to("나", "으으읾닝릉ㄹㄴ밀아느??!"),
  ])
  .addTextScene("슬기", "우리 한번 만날래...?")
  .addTextScene("나", "....")
  .addTextScene("나", "좋아..!")
  .addTextScene(null, "그렇게 나는 슬기와 연애를 시작하게 되었고")
  .addTextScene(null, "8년의 연애 끝에 결혼까지 성공하였다는 이야기였다.")
  .addSceneWithEvents([EndEvent.doneGame("슬기 엔딩")])
  .build();
