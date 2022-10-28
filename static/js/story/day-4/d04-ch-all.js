import { PopUpFrame } from "../../pop-up/event/pop-up-frame.js";
import { ChapterBuilder } from "../chapter-builder.js";

/**
 * 선택 엔딩
 */
export const d04_ch_all = new ChapterBuilder()
  .setDaysNum(4)
  .setChapterName("d04-ch-all")
  .setNextChapterName(null)
  .addTextScene("나", "어제 슬기랑 유진이한테 뉴렉톡이 왔단말이지...")
  .addTextScene(null, "어젯밤 자기 전. 슬기랑 유진이에게 동시에 연락이 왔다.")
  .addTextScene("나", "아직 답을 안했는데 누구랑 약속을 잡지?")
  .addSelectScene([
    new PopUpFrame("d04-ch-seulgi", "슬기에게 답장한다."),
    new PopUpFrame("d04-ch-bad", ["집에서 게임이나 하자"]),
    new PopUpFrame("d04-ch-yujin", ["유진이에게 답장한다."]),
  ])
  .build();
