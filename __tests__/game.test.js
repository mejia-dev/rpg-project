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
    expect(game1.move()).toBe("this.startBattle()");
  });

  test('should test to see if current move at 6 triggers battle function', () => {
    game1.mapPosition = 6;
    game1.testMode = 1;
    expect(game1.move()).toBe("this.startBattle()");
  });

  test('should test to see if current move at 9 triggers battle function', () => {
    game1.mapPosition = 9;
    game1.testMode = 1;
    expect(game1.move()).toBe("this.startBattle()");
  });
  
  test('should test to see if win game with currentMove greater or equal to 10', () => {
    game1.mapPosition = 11;
    game1.testMode = 1;
    expect(game1.move()).toBe("youWin()");
  });

  test('should calculate character health lost during a battle based on enemy attack and character defense', () => {
    game1.characters[0].getStats("warrior");
    game1.enemies[0].enemyStats("monster");
    game1.startBattle();
    expect(game1.characters[0].health).toEqual(8);
  });

  test('should calculate enemies health lost during a battle based on character attack and health/defense', () => {
    game1.characters[0].getStats("warrior");
    game1.enemies[0].enemyStats("monster");
    game1.startBattle();
    expect(game1.enemies[0].health).toBeLessThan(6);
  });
  
  test('should show that the battleRound variable is increasing by 1', () => {
    game1.characters[0].getStats("warrior");
    game1.enemies[0].enemyStats("monster");
    game1.startBattle();
    expect(game1.battleRound).toBeGreaterThan(0);
  });

  test('should allow send character to move function again afer enemy is killed', () => {
    game1.characters[0].getStats("warrior");
    game1.enemies[0].enemyStats("monster");
    game1.startBattle();
    expect(game1.battle()).toBe('you win')
});

  test('should say you lose if character health less than 0', () => {
    game1.characters[0].getStats("warrior");
    game1.enemies[0].enemyStats("monster");
    game1.characters[0].health = 1;
    game1.characters[0].defense = 0;
    game1.enemies[0].attack = 100;
    game1.enemies[0].health = 100;
    game1.testMode = 2;
    game1.startBattle();
    expect(game1.battle()).toBe('you lose')
  });

  test('should return a unique result if both characters die on the same round', () => {
    game1.characters[0].getStats("warrior");
    game1.enemies[0].enemyStats("monster");
    game1.characters[0].health = 1;
    game1.characters[0].defense = 0;
    game1.enemies[0].health = 1;
    game1.enemies[0].defense = 0;
    game1.testMode = 2;
    game1.startBattle();
    expect(game1.battle()).toBe('you lose2')
  });
});