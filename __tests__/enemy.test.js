import { Enemy } from "../src/js/enemy";

describe('Enemy', () => {
    test("should create basic enemy", () => {
    let enemy = new Enemy()
    expect(enemy.health).toEqual(3);
    expect(enemy.defense).toEqual(5);
    expect(enemy.attack).toEqual(4);
  });
});
