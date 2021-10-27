const checkTypeHero = [
  "Bowman",
  "Swordsman",
  "Magician",
  "Daemon",
  "Undead",
  "Zombie",
];

export default class Character {
  constructor(name, type) {
    if (name.lenght < 2 || name.lenght > 10) {
      throw new Error("Имя не должно быть меньше двух символов и больше 10");
    } else {
      this.name = name;
    }

    if (checkTypeHero.includes(type)) {
      this.type = type;
    } else {
      throw new Error("персонаж не существует");
    }
    this.health = 100;
    this.level = 1;
  }
}
