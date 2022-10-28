import { BaseEvent, EVENT_TYPE } from "../../global/index.js";
import { BGM_NAMES } from "../const/bgm-names.js";
import { EFFECT_NAEMS } from "../const/effect-names.js";
import { soundType } from "../const/sound-type.js";

export class SoundEvent extends BaseEvent {
  #soundName; // 사운드 이름
  #soundType; // 사운드 종류

  constructor(souondName, soundType) {
    super(EVENT_TYPE.SOUND);
    this.#soundName = souondName;
    this.#soundType = soundType;
  }

  /**
   * 배경음악을 재생하는 SoundEvent 생성
   * @param {BGM_NAMES} name
   */
  static playBgm(name) {
    return new SoundEvent(name, soundType.bgm);
  }

  /**
   * 배경음악 종료 SoundEvent 생성
   */
  static stopBgm() {
    return new SoundEvent(null, soundType.bgm);
  }

  /**
   * 효과음을 재생하는 SoundEvent 생성
   * @param {EFFECT_NAEMS} name
   */
  static playEffect(name) {
    return new SoundEvent(name, soundType.effect);
  }

  /**
   * 대사를 재생하는 SoundEvent 생성
   * @param {VOICE_NAEMS} name
   */
  static playVoice(name) {
    return new SoundEvent(name, soundType.voice);
  }

  get soundName() {
    return this.#soundName;
  }

  get soundType() {
    return this.#soundType;
  }
}
