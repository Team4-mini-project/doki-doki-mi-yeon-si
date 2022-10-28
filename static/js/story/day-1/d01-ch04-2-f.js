import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { seulgi } from "../../npc/character/seulgi.js";

/**
 * 유진의 질문게임 실패
 */
export const d01_ch04_2_f = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch04-2-f")
  .setNextChapterName("d01-ch05")
  .addSceneWithEvents([
    SoundEvent.playBgm(BGM_NAMES.MORNING),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.sad),
    TextEvent.to("슬기", "아하... 수업 때 들은거랑 좀 다른 것 같은데.."),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addSceneWithEvents([
    TextEvent.to("슬기", "아무튼 알려줘서 고마워"),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.default),
  ])
  .addSceneWithEvents([
    NpcEvent.showRight(NPC_NAMES.SEULGI, seulgi.faces.sad),
    TextEvent.to("슬기", "(교수님께 물어봐야겠다)"),
  ])
  .addSceneWithEvents([
    NpcEvent.hide(NPC_NAMES.SEULGI),
    TextEvent.to(null, "슬기는 강의실을 빠르게 나갔다."),
  ])

  .build();
