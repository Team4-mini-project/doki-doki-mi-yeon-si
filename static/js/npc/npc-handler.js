import { NpcEvent } from "./event/npc-event.js";
import { seulgi } from "./character/seulgi.js";
import { yujin } from "./character/yujin.js";
import { newlec } from "./character/newlec.js";
import { DETAIL_NPC_EVENT } from "./event/detail/base-detail-npc-event.js";

export const NPC_NAMES = {
  SEULGI: "seulgi",
  NEWLEC: "newlec",
  YUJIN: "yujin",
};

class NpcHandler {
  #npcs;
  constructor() {
    this.#npcs = { seulgi, newlec, yujin };
  }

  draw(ctx) {
    for (let name in this.#npcs) this.#npcs[name].draw(ctx);
  }

  /**
   * @param {NpcEvent} event
   */
  updateByEvent(event) {
    const detailNpcEvent = event.detailNpcEvent;
    switch (detailNpcEvent.type) {
      case DETAIL_NPC_EVENT.DRAW:
        this.#npcs[detailNpcEvent.name].show(
          detailNpcEvent.face,
          detailNpcEvent.position
        );
        break;

      case DETAIL_NPC_EVENT.LOVE:
        this.#npcs[detailNpcEvent.name].addLovePoint(detailNpcEvent.point);
        break;
    }
  }
}

export const npcHandler = new NpcHandler();
