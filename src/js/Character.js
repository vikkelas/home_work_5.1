export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Имя не должно быть меньше двух символов и больше 10");
    } else {
      this.name = name;
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
