import { Game } from "../src/js/game.js";

describe('Game', () => {

  test('should create game object from game constructor', () => {
    let game1 = new Game();
    // expect(game1.move).toEqual(game.move());
    expect(game1.mapPosition).toEqual(0);
    expect(game1.characters).toEqual({});
    expect(game1.enemy).toEqual({});
  });

  test('to see if move function properly rolls random', () => {
    let game1 = new Game();
    expect(game1.move()).toBeLessThan(4);
    expect(game1.move()).toBeGreaterThan(0);
  });
})

// expect(diceRollTotal).toBeLessThan(7);
// expect(diceRollTotal).toBeGreaterThan(0);