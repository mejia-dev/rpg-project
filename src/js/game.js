import { Character } from "./character.js";
import { Enemy } from "./enemy.js";

export class Game {
  constructor() {
    // this.startGame = startGame;
    this.mapPosition = 0;
    this.characters = {};
    this.enemies = {};
    this.currentMove = 0;
    this.testMode = 0;

    let newCharacter = new Character();
    this.characters[0] = newCharacter;
    let newEnemy = new Enemy();
    this.enemies[0] = newEnemy;
    }

  // startGame() {
  //   player = gameCharacter(type.value)
  //   //initiates game, pull down/submit in UI will choose "style" of character and create char obj{},
  //   //Roll or play button (eventlistener) activates move()
  //   }
  



// AddressBook.prototype.addContact = function(c[ontact]) {
//   contact.id = this.assignId();
//   this.contacts[contact.id] = contact;
// };
// Math.floor(Math.random(1) * 3)

// addCharacter(character) {
//   this.characters[0] = character;
// }
//this,character needs to be added wi

// doSomething(){
//   this.gameCharacter.health - this.enemy[0].attack
// }

// largeFunction(){
//   const num = randomNum()
// }

// logic(number){
//   if(number ==3){
    
//   }
// }

  move() {
    // let status = "";
    let clicked = "go";
    if (clicked === "go") {
      // this.currentMove = randomNum();
      // this.currentMove += 3;
      // console.log(`that ${this.currentMove}`)
      this.mapPosition += this.randomNum();
      // console.log(` this ${this.mapPosition}`)
      if (this.mapPosition === 3) {
        return "this.battle()";
      } else if (this.mapPosition === 6) {
        return "this.battle()";
      } else if (this.mapPosition === 9) {
        return "this.battle()"
      } else if (this.mapPosition >= 10) {
          return "youWin()";
      }    
      return this.currentMove += this.mapPosition;
    } else { 
      return this.currentMove 
    }
  }  

  randomNum() {
    if (this.testMode === 0) {
      let currentMove = Math.floor(Math.random() * 3) + 1;
      return currentMove;
    } else {
      return 0;
    }
  }
  
  
  //stats:
  //warrior: h3,d4,a5
  //archer: h4, d5, a3
  //wizard: h5, d3, a4
  //enemy: h5, a6

  // warrior v enemy = Wh1 && EH 1 
  // archer v enemy = h4
  // wizard v enemy = h2


  
  // this.character.health - 1;

  // warrior health (3) - (enemy attack (6)- warrior defense(4))
  // en health (6) - (war at 5 - en def 1)

  battle() {
    let currentHealth = this.characters[0].health - (this.enemies[0].attack - this.characters[0].defense);
    let currentEnHealth = this.enemies[0].health - (this.characters[0].attack - this.enemies[0].defense);
    this.characters[0].health = currentHealth;
    this.enemies[0].health = currentEnHealth;
   if (this.enemies[0].health > 0) { 
        
      }

  }

  startBattle() {
    this.battle();
  }
  //       displayStats()
  //       battle()
  //   } else if (character.health <= 0) {
  //     youLose()
  //   } else (displayStats() )
  // }

      

  // displayStats() {
  //   currentHealth;
  //   mapPosition;
  // }

//youWin() {
//display winning screen and restart button
// }

//youLose() {
  //display message; "you have lost, would you like to play again (if yes, startGame())"
  //displayStats();

//}


// }
//Game Play constructor
//map variable
// if mapPostition var = map @ diff spots triggers events
//class mapPostionstarts at 0,
// going yo have function() that increases map position 
//based on Math.random roll
// }

}
