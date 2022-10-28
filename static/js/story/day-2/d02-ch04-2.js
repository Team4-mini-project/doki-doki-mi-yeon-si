import { ChapterBuilder } from "../chapter-builder.js";
import { BackgroundEvent } from "../../background/event/background-event.js";
import { TextEvent } from "../../text/event/text-event.js";
import { NpcEvent } from "../../npc/event/npc-event.js";
import { yujin } from "../../npc/character/yujin.js";
import { NPC_NAMES } from "../../npc/npc-handler.js";
import { BACKGROUND_NAMES } from "../../background/const/background-names.js";

export const d02_ch04_2 = new ChapterBuilder()
  .setDaysNum(2)
  .setChapterName("d02-ch04-2")
  .setNextChapterName("d02-ch05")
  .addTextScene("나", "(아무래도 부잣집 기사님 표정이 안좋아 보여.)")
  .addTextScene("나", "미안. 급한 일이 있어서 바로 버스탈 것 같아")
  .addSceneWithEvents([
    TextEvent.to("유진", "내가 같이 걸어준다는데 거절을..?"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.dis),
  ])
  .addSceneWithEvents([
    TextEvent.to("유진", "하하항 장난이야! 다음에 보자~"),
    NpcEvent.showCenter(NPC_NAMES.YUJIN, yujin.faces.smile2),
  ])
  .addSceneWithEvents([
    BackgroundEvent.changeTo(BACKGROUND_NAMES.WAYHOME),
    TextEvent.to(null, "유진이는 다시 차를타고 사라져버렸다."),
    NpcEvent.hide(NPC_NAMES.YUJIN),
  ])
  .addTextScene("나", "... 정말 알 수 없는 애네")
  .build();
