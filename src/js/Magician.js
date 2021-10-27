import character from "./Character.js";

export default class Magician extends character {
  constructor(name) {
    super(name, "Magician");
    this.attack = 25;
    this.defence = 25;
  }
}
