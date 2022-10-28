import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";
import { seulgi } from "../../npc/character/seulgi.js";

/**
 * 유진의 질문게임 실패
 */
export const d03_ch08_1_f = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch08-1-f")
  .setNextChapterName("d03-ch09")
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.sad),
    TextEvent.to("슬기", "하하... 수업 때 들은거랑 좀 다른 것 같은데.."),
    // SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_f_1_yujin),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addSceneWithEvents([
    //SoundEvent.playVoice(VOICE_NAEMS.d01_ch02_1_f_2_yujin),
    TextEvent.to("슬기", "아무튼 알려줘서 고마워"),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
  ])
  .addSceneWithEvents([
    NpcEvent.showRight(NPC_NAMES.SEULGI, seulgi.faces.sad),
    TextEvent.to("슬기", "(교수님께 물어봐야겠다)"),
  ])
  // .addSceneWithEvents([
  //   NpcEvent.hide(NPC_NAMES.SEULGI),
  //   TextEvent.to("슬기", "점심이나 먹으러 가자 주성아...."),
  // ])
  // .addTextScene("나", ["내가 뭐 틀렸나?", "근데 그 내용 시간에 졸긴 했지"])
  // .addTextScene("나", "그래 밥이나 먹으러 가자~")
  .build();
