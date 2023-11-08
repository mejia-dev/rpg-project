import { Character } from '../src/js/character.js';

describe('Character', () => {

  test('should create a new basic character with normal stats', () => {
    let newCharacter = new Character("warrior");
    expect(newCharacter.health).toEqual(3);
    expect(newCharacter.defense).toEqual(3);
    expect(newCharacter.attack).toEqual(3);
  });
});

// - Warrior
// -- Health: 3
// -- Defense: 4
// -- Attack: 3

// function Character(input)
  
//   if input warrior == 

//   if input archer --