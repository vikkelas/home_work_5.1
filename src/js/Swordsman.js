import character from "./Character.js";

export default class Swordsman extends character {
  constructor(name) {
    super(name, "Swordsman");
    this.attack = 25;
    this.defence = 25;
  }
}
