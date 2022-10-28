import { BaseLoveNpc } from "../base-love-npc.js";
import { NPC_POSITION } from "../event/detail/draw-npc-event.js";

class Seulgi extends BaseLoveNpc {
  #x;
  #y;
  #faces; // 표정들 일러스트 경로
  #sceneFaces; // 이벤트 장면 일러스트 경로
  #img; // default img size 400 1100
  #sceneImg;
  #isOn;

  constructor() {
    super();
    this.#x = 0;
    this.#y = 120;
    this.#faces = {
      default: "/static/image/npc/seulgi/Seulgi_default.png",
      smile1: "/static/image/npc/seulgi/Seulgi_smile_1.png",
      smile2: "/static/image/npc/seulgi/Seulgi_smile_2.png",
      wrong: "/static/image/npc/seulgi/Seulgi_wrong.png",
      sad: "/static/image/npc/seulgi/Seulgi_sad.png",
      dis: "/static/image/npc/seulgi/Seulgi_dis.png",
      relaxed: "/static/image/npc/seulgi/Seulgi_relaxed.png",
      angry: "/static/image/npc/seulgi/Seulgi_angry.png",
    };
    this.#sceneFaces = {
      inClass: "/static/image/npc/seulgi/seulgi-in-class.png",
      inPark1: "/static/image/npc/seulgi/seulgi-in-park-1.png",
      inPark2: "/static/image/npc/seulgi/seulgi-in-park-2.png",
      inPark3: "/static/image/npc/seulgi/seulgi-in-park-3.png",
      inPark4: "/static/image/npc/seulgi/seulgi-in-park-3-newlec.png", // 시연용
    };
    this.#img = new Image();
    this.#img.src = this.#faces.default;
    this.#sceneImg = new Image();
    this.#isOn = false;
  }

  draw(ctx) {
    if (!this.#isOn) return;
    super.draw(ctx);
    ctx.drawImage(
      this.#img,
      0,
      0,
      this.#img.width,
      this.#img.height,
      this.#x,
      this.#y,
      250,
      687
    );
  }

  show(face, position) {
    switch (position) {
      case NPC_POSITION.CENTER:
        this.#isOn = true;
        this.#x = 270;
        this.#img.src = face;
        break;

      case NPC_POSITION.HIDE:
        this.#isOn = false;
    }
  }

  get faces() {
    return this.#faces;
  }

  get sceneFaces() {
    return this.#sceneFaces;
  }
}

export const seulgi = new Seulgi();
