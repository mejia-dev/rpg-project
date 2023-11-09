import { Character } from '../src/js/character.js';

describe('Character', () => {

  test('should create a new basic character with normal stats', () => {
    let newCharacter = new Character("warrior");
    expect(newCharacter.health).toEqual(8);
    expect(newCharacter.defense).toEqual(8);
    expect(newCharacter.attack).toEqual(8);
  });

  test('should add stats equivalent to warrior character choice', () => {
    let newCharacter = new Character();
    newCharacter.getStats("warrior")
    expect(newCharacter.health).toEqual(8);
    expect(newCharacter.defense).toEqual(9);
    expect(newCharacter.attack).toEqual(10);
  });

  test('should add stats equivalent to archer character choice', () => {
    let newCharacter = new Character();
    newCharacter.getStats("archer")
    expect(newCharacter.health).toEqual(9);
    expect(newCharacter.defense).toEqual(10);
    expect(newCharacter.attack).toEqual(8);
  });

  test('should add stats equivalent to wizard character choice', () => {
    let newCharacter = new Character();
    newCharacter.getStats("wizard")
    expect(newCharacter.health).toEqual(10);
    expect(newCharacter.defense).toEqual(8);
    expect(newCharacter.attack).toEqual(9);
  });
});