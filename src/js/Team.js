export default class Team {
  constructor() {
    this.list = [];
  }

  * [Symbol.iterator]() {
    for (let index = 0; index < this.list.length; index += 1) {
      yield this.list[index];
    }
  }
}
