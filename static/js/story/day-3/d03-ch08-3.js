import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d03_ch08_3 = new ChapterBuilder()
  .setDaysNum(3)
  .setChapterName("d03-ch08-3")
  .setNextChapterName("d03-ch09")
  .addTextScene("나", [
    "넌... 맨날 물어볼꺼야?",
    "유튜브에 뉴렉처 검색해서 어쩌구 저쩌구...",
  ])
  .addSceneWithEvents([
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.dis),
    TextEvent.to("슬기", ["알았어.. 이따 공부해볼게..."]),
    EffectEvent.drawLoveEffect(),
    NpcEvent.decreaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
  ])
  .addTextScene("나", "(real man이란 주변인들을 능동적으로 바꿔주는 법.)")
  .build();
