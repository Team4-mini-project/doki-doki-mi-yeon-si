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
 * 슬기의 제안에 수락하여 밥을 같이 먹는다.
 */
export const d01_ch03_1 = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01-ch03-1")
  .setNextChapterName("d01-ch04")
  .addTextScene("나", "응 그러자!")
  .addSceneWithEvents([
    TextEvent.to("슬기", "여기 앉아. 넌 뭐 먹어?"),
    NpcEvent.showCenter(NPC_NAMES.SEULGI, seulgi.faces.smile1),
    EffectEvent.drawLoveEffect(),
    NpcEvent.increaseLove(NPC_NAMES.SEULGI),
    SoundEvent.playEffect(EFFECT_NAEMS.LOVE_UPDATE),
    SoundEvent.playVoice(VOICE_NAEMS.d01_ch03_1_1_seulgi),
  ])
  .addTextScene("나", "나는 게살버거. 너는?")
  .addTextScene(null, "그렇게 슬기랑 야무지게 점심을 먹었다.")
  .build();
