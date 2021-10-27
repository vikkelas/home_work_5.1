import Bowman from "../Bowerman.js";
import Daemon from "../Daemon.js";
import Magician from "../Magician.js";
import Zombie from "../Zombie.js";
import Undead from "../Undead.js";
import Swordsman from "../Swordsman.js";
import Character from "../Character.js";

test.each([
  [
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: "Bugaga",
      type: "Bowman",
    },
    new Bowman("Bugaga"),
  ],
  [
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: "Rudi",
      type: "Daemon",
    },
    new Daemon("Rudi"),
  ],
  [
    {
      attack: 10,
      defence: 40,
      health: 100,
      level: 1,
      name: "Alex",
      type: "Magician",
    },
    new Magician("Alex"),
  ],
  [
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: "Peter",
      type: "Swordsman",
    },
    new Swordsman("Peter"),
  ],
  [
    {
      attack: 40,
      defence: 10,
      health: 100,
      level: 1,
      name: "Zina",
      type: "Zombie",
    },
    new Zombie("Zina"),
  ],
  [
    {
      attack: 25,
      defence: 25,
      health: 100,
      level: 1,
      name: "Dan",
      type: "Undead",
    },
    new Undead("Dan"),
  ],
])("check hero", (hero, heroModule) => {
  const result = heroModule;
  expect(result).toEqual(hero);
});

test("check error name", () => {
  expect(() => new Character("D")).toThrowError();
});

test("check error type", () => {
  expect(() => new Character("Dan")).toThrowError();
});
