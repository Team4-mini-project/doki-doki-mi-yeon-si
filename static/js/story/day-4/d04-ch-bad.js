import { BACKGROUND_NAMES } from "../../background/const/background-names.js";
import { EndEvent } from "../../global/event/end-event.js";
import { BGM_NAMES } from "../../sound/const/bgm-names.js";
import { SoundEvent } from "../../sound/event/sound-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { ChapterBuilder } from "../chapter-builder.js";
import { StoryEvent } from "../event/story-event.js";
/**
 * 배드 엔딩
 */
export const d04_ch_bad = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d04-ch-bad")
  .setNextChapterName(null)
  .addSceneWithEvents([
    TextEvent.to("???", "...일..님.."),
    SoundEvent.stopBgm(),
  ])
  .addSceneWithEvents([
    TextEvent.to("???", "..주성 일병님..!"),
    StoryEvent.drawSceneImage(BACKGROUND_NAMES.LIGHT_DARKNESS),
  ])
  .addTextScene("???", "근무시간이십니다..")
  .addTextScene("나", "으...응?")
  .addTextScene("???", "...02시45분입니다.")
  .addTextScene("나", "...하아")
  .addTextScene(null, "그렇다. 나는 곧 상병진급을 앞둔 군인이다.")
  .addTextScene(null, "그 날 밤에온 카톡은 현역 입영통지 카톡이었다.")
  .addTextScene(null, "방금까지 꾼 꿈은 1년전 대학 입학 당시의 이야기...")
  .addTextScene(null, [
    "여친을 만들지 못한 나는",
    "나를 돌아보기위해 곧 바로 군에 입대했다.",
  ])
  .addTextScene(null, ["오늘도 나는 나라를 지킨다."])
  .addSceneWithEvents([
    StoryEvent.drawSceneImage(BACKGROUND_NAMES.SOlDIER),
    SoundEvent.playBgm(BGM_NAMES.END_COOL),
  ])
  .addSceneWithEvents([EndEvent.doneGame("군인 엔딩")])
  .build();
