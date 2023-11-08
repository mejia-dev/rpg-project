import { Character } from '../src/js/character.js';

describe('Character', () => {

  test('should create a new basic character with normal stats', () => {
    let newCharacter = new Character("warrior");
    expect(newCharacter.health).toEqual(3);
    expect(newCharacter.defense).toEqual(3);
    expect(newCharacter.attack).toEqual(3);
  });

  test('should add stats equivalent to warrior character choice', () => {
    let newCharacter = new Character();
    newCharacter.getStats("warrior")
    expect(newCharacter.health).toEqual(3);
    expect(newCharacter.defense).toEqual(4);
    expect(newCharacter.attack).toEqual(5);
  });

  test('should add stats equivalent to archer character choice', () => {
    let newCharacter = new Character();
    newCharacter.getStats("archer")
    expect(newCharacter.health).toEqual(4);
    expect(newCharacter.defense).toEqual(5);
    expect(newCharacter.attack).toEqual(3);
  });

  test('should add stats equivalent to wizard character choice', () => {
    let newCharacter = new Character();
    newCharacter.getStats("wizard")
    expect(newCharacter.health).toEqual(5);
    expect(newCharacter.defense).toEqual(3);
    expect(newCharacter.attack).toEqual(4);
  });
});