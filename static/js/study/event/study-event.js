import { BaseEvent, EVENT_TYPE } from "../../global/index.js";
import { STUDY_SUBJECT_NAMES } from "../const/study-subject-names.js";

export class StudyEvent extends BaseEvent {
  #subjectName; // 과목 이름

  constructor(subjectName) {
    super(EVENT_TYPE.STUDY);
    this.#subjectName = subjectName;
  }

  /**
   * subjectName에 대한 StudyEvent 생성
   * @param {STUDY_SUBJECT_NAMES} subjectName
   */
  static to(subjectName) {
    return new StudyEvent(subjectName);
  }

  get subjectName() {
    return this.#subjectName;
  }
}
