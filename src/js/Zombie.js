import character from "./Character.js";

export default class Zombie extends character {
  constructor(name) {
    super(name, "Zombie");
    this.attack = 25;
    this.defence = 25;
  }
}
