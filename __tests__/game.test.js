import { Game } from "../src/js/game.js";

describe('Game', () => {

  let game1;

  beforeEach(() => {
    game1 = new Game();
  });

  test('should create game object from game constructor', () => {
    expect(game1.mapPosition).toEqual(0);
    expect(game1.characters).toEqual({});
    expect(game1.enemy).toEqual({});
  });

  test('to see if move function properly rolls random', () => {
    game1.move("go");
    expect(game1.mapPosition).toBeLessThan(4);
    expect(game1.mapPosition).toBeGreaterThan(0);
  });

  test('should test to see if currentMove is 3 and call the battle function', () => {
    let game2 = new Game();
    expect(game2.move()).toBe("this.battle()");
  });
})

// expect(diceRollTotal).toBeLessThan(7);
// expect(diceRollTotal).toBeGreaterThan(0);