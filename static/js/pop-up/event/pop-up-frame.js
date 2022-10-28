export class PopUpFrame {
  #nextChapterName;
  #text;
  constructor(nextChapterName, text) {
    this.#nextChapterName = nextChapterName;
    this.#text = text;
  }

  get nextChapterName() {
    return this.#nextChapterName;
  }

  get text() {
    return this.#text;
  }
}
