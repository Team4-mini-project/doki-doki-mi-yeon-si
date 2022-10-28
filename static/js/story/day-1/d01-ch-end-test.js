import { ChapterBuilder } from "../chapter-builder.js";
import { seulgi } from "../../npc/character/seulgi.js";
import { yujin } from "../../npc/character/yujin.js";

export const d01_ch_end_test = new ChapterBuilder()
  .setDaysNum(1)
  .setChapterName("d01chendtest")
  .setNextChapterName("d01ch01")
  .addTextScene(null, "스킵되는 scene")
  .addBranch(() => {
    // 둘 다 5일때
    if (seulgi.lovePoint === 5 && yujin.lovePoint === 5) return "dl-ch-all";
    // 슬기만 5일때
    if (seulgi.lovePoint === 5) return "dl-ch-all";
    // 유진만 5일때
    if (yujin.lovePoint === 5) return "dl-ch-all";
    // 둘 다 5 미만일 때
    return "dl-ch-bad";
  })
  .build();
