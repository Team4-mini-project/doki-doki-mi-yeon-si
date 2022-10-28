import { BaseLoveNpc } from "../base-love-npc.js";
import { NPC_POSITION } from "../event/detail/draw-npc-event.js";

class Yujin extends BaseLoveNpc {
  #x;
  #y;
  #faces; // 표정들 일러스트 경로
  #img; // default img size 400 1100
  #sceneImg;
  #sceneFaces;
  #isOn;

  constructor() {
    super();
    this.#x = 0;
    this.#y = 100;
    this.#faces = {
      default: "/static/image/npc/yujin/yujin-default.png",
      smile1: "/static/image/npc/yujin/yujin-smile-1.png",
      smile2: "/static/image/npc/yujin/yujin-smile-2.png",
      smile3: "/static/image/npc/yujin/yujin-smile-3.png",
      sad: "/static/image/npc/yujin/yujin-sad.png",
      dis: "/static/image/npc/yujin/yujin-dis.png",
      dis2: "/static/image/npc/yujin/yujin-dis-2.png",
      angry: "/static/image/npc/yujin/yujin-angry.png",
      shy: "/static/image/npc/yujin/yujin-shy.png",
    };
    this.#sceneFaces = {
      onStreet: "/static/image/npc/yujin/yujin-on-street.png",
      inRestaurant: "/static/image/npc/yujin/yujin-in-restaurant.png",
      inRestaurant2: "/static/image/npc/yujin/yujin-in-restaurant-2.png",
      inRestaurant3: "/static/image/npc/yujin/yujin-in-restaurant-2-new.png", // 시연용
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
      330,
      700
    );
  }

  show(face, position) {
    switch (position) {
      case NPC_POSITION.CENTER:
        this.#isOn = true;
        this.#x = 230;
        this.#img.src = face;
        break;
      case NPC_POSITION.RIGHT:
        this.#isOn = true;
        this.#x = 460;
        this.#img.src = face;
        break;
      case NPC_POSITION.LEFT:
        this.#isOn = true;
        this.#x = 0;
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

export const yujin = new Yujin();
