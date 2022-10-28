import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { EFFECT_NAEMS } from "../../sound/const/effect-names.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { yujin } from "../../npc/character/yujin.js";

export const d04_ch01 = new ChapterBuilder()
  .setDaysNum(4)
  .setChapterName("d04-ch01")
  .setNextChapterName(null)
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.MY_ROOM),
    TextEvent.to(null, "아침이 밝았다."),
    SoundEvent.playEffect(EFFECT_NAEMS.ALARM),
    SoundEvent.stopBgm(),
  ])
  .addTextScene(null, "오늘은 공강이다. 오늘 일정이 그러니까...")
  .addBranch(() => {
    return "d04-ch-seulgi";
    // 둘 다 5일때
    if (seulgi.lovePoint === 5 && yujin.lovePoint === 5) return "d04-ch-all";
    // 슬기만 5일때
    if (seulgi.lovePoint === 5) return "d04-ch-seulgi";
    // 유진만 5일때
    if (yujin.lovePoint === 5) return "d04-ch-yujin";
    // 둘 다 5 미만일 때
    return "d04-ch-bad";
  })
  .build();
