export class Game {
  constructor() {
    // this.move = move;
    this.mapPosition = 0;
    this.characters = {};
    this.enemy = {};
    this.currentMove = 0;
    }



// AddressBook.prototype.addContact = function(c[ontact]) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };
// Math.floor(Math.random(1) * 3)

// addCharacter(character) {
//   this.characters[1] = character;
// }

  move() {
    // let status = "";
    let clicked = "go";
    if (clicked = "go") {
      // currentMove = Math.floor(Math.random() * 3) + 1;
      this.currentMove += 10;
      console.log(`that ${this.currentMove}`)
      this.mapPosition += this.currentMove;
      console.log(` this ${this.mapPosition}`)
      if (this.mapPosition === 3) {
        return "this.battle()";
      } else if (this.mapPosition === 6) {
        return "this.battle()";
      } else if (this.mapPosition === 9) {
        return "this.battle()"
      } else if (this.mapPosition >= 10) {
          return "youWin()";
      }    
      return this.currentMove;
    } else { 
      return this.currentMove 
    }
  }  
  
    
  // } if (mapPosition = 3) {
  //   this.battle()
  // } else if (mapPosition = 6) {
  //   this.battle()
  // } else if (mapPosition = 9) {
  //   this.battle()
  // } else if (mapPosition >= 10) {
  //   youWin()
  // } else {
  //   return this.mapPosition;
  // }
  // return this.mapPosition;
  // }
  
  
  // battle() {
    //battle
//     returns character.health
//   }
// }
//Game Play constructor
//map variable
// if mapPostition var = map @ diff spots triggers events
//class mapPostionstarts at 0,
// going yo have function() that increases map position 
//based on Math.random roll

//addcharacter()
}