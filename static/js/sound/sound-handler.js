import { BGM_NAMES } from "./const/bgm-names.js";
import { EFFECT_NAEMS } from "./const/effect-names.js";
import { VOICE_NAEMS } from "./const/voice-names.js";
import { soundType } from "./const/sound-type.js";
import { SoundEvent } from "./event/sound-event.js";

class SoundHandler {
  #bgm; // 배경음악
  #effect; // 효과음
  #voice; // 대사
  constructor() {
    this.#bgm = new Audio();
    this.#effect = new Audio();
    this.#voice = new Audio();
  }

  /**
   * @param {SoundEvent} event
   */
  updateByEvent(event) {
    switch (event.soundType) {
      case soundType.bgm:
        this.#playBgm(event.soundName);

        break;
      case soundType.effect:
        this.#playEffect(event.soundName);

        break;
      case soundType.voice:
        this.#playVoice(event.soundName);

        break;
    }
  }

  /**
   * @param {BGM_NAMES} name
   */
  #playBgm(name) {
    if (!name) {
      this.#bgm.pause();
      return;
    } // name null이면 배경음악 종료
    this.#bgm.src = name;
    this.#bgm.volume = 0.3;
    this.#bgm.play();
  }

  /**
   * @param {EFFECT_NAEMS} name
   */
  #playEffect(name) {
    this.#effect.src = name;
    this.#effect.volume = 0.3;
    this.#effect.play();
  }

  /**
   * @param {VOICE_NAEMS} name
   */
  #playVoice(name) {
    this.#voice.src = name;
    this.#voice.volume = 0.7;
    this.#voice.play();
  }
}

export const soundHanlder = new SoundHandler();
