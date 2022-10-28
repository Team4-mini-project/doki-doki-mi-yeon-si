import { ChapterBuilder } from "../chapter-builder.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { VOICE_NAEMS } from "../../sound/const/voice-names.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { EffectEvent } from "../../effect/event/effect-event.js";

/**
 * 슬기의 질문을 거절한다.
 */
export const d01_ch04_1 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch04-1")
  .setNextChapterName("d01-ch05")
  .addTextScene("나", "야. 나 바빠")
  .addSceneWithEvents([
    TextEvent.to("슬기", "으..응 알겠어"),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_DEACREASE),
    EffectEvent.drawLoveEffect(),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.sad),
    NpcEvent.decreaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch04_1_1_seulgi),
  ])
  .addSceneWithEvents([
    TextEvent.to(null, "슬기는 어깨를 축 늘어트리며 강의실을 나갔다."),
    NpcEvent.hide(NPC_NAMES.SEULGI),
  ])
  .addTextScene("나", [
    "real man이 되는건 어렵군.",
    "이제 슬기가 나를 함부로 대하지 못할거야.",
  ])
  .build();
