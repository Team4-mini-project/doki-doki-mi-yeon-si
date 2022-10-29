import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { EndEvent } from "../../global/event/end-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { ChapterBuilder } from "../chapter-builder.js";
import { StoryEvent } from "../event/story-event.js";

/**
 * 유진 엔딩
 */
export const d04_ch_yujin = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d04-ch-yujin")
  .setNextChapterName(null)
  .addSceneWithEvents([
    SoundEvent.playBgm(BGM_NAMES.ENDING),
    TextEvent.to("나", "유진이랑 데이트 하는날! 으흐흐"),
  ])
  .addTextScene(null, "어제 자기전에 유진이한테서 뉴렉톡이 왔었다!!")
  .addTextScene(null, "뉴렉 타워에서 저녁을 먹자는 것!!")
  .addTextScene("나", "여자랑 첫 뉴렉 타워라니.. 멋있게 하고 가야딩")
  .addTextScene(null, "나는 후다닥 준비를하고 뉴렉 타워로 출발했다.")
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.NIGHT_RESTAURANT),
    TextEvent.to("나", "우오.. 여기가 뉴렉타워의 메종드뉴렉.."),
  ])
  .addTextScene("나", "와 약호동... 화이트블루까지!! 연예인도 엄청 많다..")
  .addTextScene("웨이터", "손님. 이쪽으로 와주시면 됩니다.")
  .addTextScene("나", "네...넵!")
  .addSceneWithEvents([
    StoryEvent.drawSceneImage(yujin.sceneFaces.inRestaurant),
    TextEvent.to("유진", "안녕?"),
  ])
  .addTextScene("나", "안녕하세요.")
  .addTextScene("유진", "왜 갑자기 존댓말이야..?")
  .addTextScene("나", "으응. 장소가 익숙치가 않네...")
  .addTextScene("유진", "아~ 편하게 있어도 돼. 여기 앉아.")
  .addTextScene("유진", "그동안 고마워서 내가 사주는거니까 많이 먹자구!")
  .addTextScene(
    null,
    "테이블 위에는 비싸보이는 술부터 호화로운 온갖 요리가 있었다."
  )
  .addTextScene("나", "그럼 어디 한입..")
  .addSceneWithEvents([
    StoryEvent.hideSceneImage(),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile2),
    TextEvent.to("나", "응?"),
  ])
  .addTextScene(null, "정신을 차려보니 테이블이 깨끗해져 있었다.")
  .addTextScene("나", "꺼억.")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile1),
    TextEvent.to("유진", "잘 먹었어? 나 하나도 못먹었어..."),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("나", "엥러민ㅇㄹ릉 진짜?!! 미안해 더 시킬까?"),
  ])
  .addTextScene("유진", "돈은?")
  .addTextScene("나", "얼만데?!")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.angry),
    TextEvent.to("유진", "음..제일 저렴한게 200만원?"),
  ])
  .addTextScene("나", "죄송합니다.")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile3),
    TextEvent.to("유진", "하하핫! 대신 선물하나만 주면 용서해줄게"),
  ])
  .addTextScene("나", "선물??")
  .addTextScene("유진", "...알잖아?")
  .addTextScene("나", "...")
  .addSceneWithEvents([
    StoryEvent.drawSceneImage(yujin.sceneFaces.inRestaurant2),
    TextEvent.hide(),
  ])

  .addSceneWithEvents([
    StoryEvent.hideSceneImage(),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.angry),
    TextEvent.to("유진", "내가 얼마나 기다렸는지 알아??"),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to(null, "생각해보니 그동안 유진의 눈빛이 예사롭지 않았었다."),
  ])
  .addTextScene(
    null,
    "그리고 내 가슴도 유진이를 만날 때마다 두근두근.. 아마도 이건.."
  )
  .addTextScene("나", "유진아.")
  .addTextScene("유진", "응?")
  .addTextScene("나", "나 너 좋아하는데 넌 어때?")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.angry),
    TextEvent.to("유진", "...!"),
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    TextEvent.to("유진", "..해"),
  ])
  .addTextScene("나", "으응?")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.shy),
    TextEvent.to("유진", "나도 좋아해!!!"),
  ])
  .addTextScene("나", "그럼 우리 오늘부터 사귀는거다?")
  .addTextScene(
    "유진",
    "그..그래! 앞으로도 자바 많이 물어볼꺼니까 사귀어주는거야!!"
  )
  .addTextScene("나", "하하하! 그래그래!")
  .addTextScene(null, "그렇게 나는 유진이와 연애를 시작하게 되었고")
  .addTextScene(null, "8년의 연애 끝에 결혼까지 성공하였다는 이야기였다.")
  .addSceneWithEvents([EndEvent.doneGame("유진 엔딩")])
  .build();
