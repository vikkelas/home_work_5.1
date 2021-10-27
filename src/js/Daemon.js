import character from "./Character.js";

export default class Daemon extends character {
  constructor(name) {
    super(name, "Deamon");
    this.attack = 25;
    this.defence = 25;
  }
}
