import { Game } from "../src/js/game.js";


describe('Game', () => {

  let game1;

  beforeEach(() => {
    game1 = new Game();
    
  });

// expect(game1.characters).toEqual({});
    // expect(game1.enemy).toEqual({});

  test('should create game object from game constructor', () => {
    expect(game1.mapPosition).toEqual(0);
  });

  test('to see if move function properly rolls random', () => {
    game1.move("go");
    expect(game1.mapPosition).toBeLessThan(11);
    expect(game1.mapPosition).toBeGreaterThan(-1);
  });

  test('should test to see if currentMove is 3 and call the battle function', () => {
    game1.mapPosition = 3;
    game1.testMode = 1;
    expect(game1.move()).toBe("this.battle()");
  });

  test('should test to see if current move at 6 triggers battle function', () => {
    game1.mapPosition = 6;
    game1.testMode = 1;
    expect(game1.move()).toBe("this.battle()");
  });

  test('should test to see if current move at 9 triggers battle function', () => {
    game1.mapPosition = 9;
    game1.testMode = 1;
    expect(game1.move()).toBe("this.battle()");
  });
  
  test('should test to see if win game with currentMove greater or equal to 10', () => {
    game1.mapPosition = 11;
    game1.testMode = 1;
    expect(game1.move()).toBe("youWin()");
  });

  // test('should calculate character health lost during a battle based on enemy attack and character defense', () => {
  //   game1.characters[0].getStats("warrior");
  //   game1.enemies[0].enemyStats("monster");
  //   game1.battle();
  //   expect(game1.characters[0].health).toEqual(1);
  // });

//   test('should import character class into the game', () => {

//   })

});