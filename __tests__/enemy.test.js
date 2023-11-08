import { Enemy } from "../src/js/enemy";

describe('Enemy', () => {
  test("should create basic enemy", () => {
    let newEnemy = new Enemy();
    expect(newEnemy.health).toEqual(1);
    expect(newEnemy.defense).toEqual(0);
    expect(newEnemy.attack).toEqual(0);
  });

  test('should add stats equivalent to type of enemy', () => {
    let newEnemy = new Enemy();
    newEnemy.enemyStats("monster")
    expect(newEnemy.health).toEqual(1);
    expect(newEnemy.defense).toEqual(1);
    expect(newEnemy.attack).toEqual(1);
  });

});
