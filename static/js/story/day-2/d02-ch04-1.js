import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

export const d02_ch04_1 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch04-1")
  .setNextChapterName("d02-ch05")
  .addTextScene("나", "그럴까? 그래 같이 걸으면 심심하지는 않겠다.")
  .addSceneWithEvents([
    TextEvent.to("유진", "그래! 기사님 저 걸어서 들어갈께요~~"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.default),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.YUJIN),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
  ])
  .addTextScene(null, "그렇게 유진이와 가볍게 산책을 했다.")
  .build();
