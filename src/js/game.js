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
    this.battleRound = 0;
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
      this.mapPosition += this.randomNum();
      if (this.mapPosition === 3) {
        return "this.startBattle()";
      } else if (this.mapPosition === 6) {
        return "this.startBattle()";
      } else if (this.mapPosition === 9) {
        return "this.startBattle()"
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

  // warrior v enemy = Wh(-2) && EH (2) 
  // archer v enemy = h4
  // wizard v enemy = h2


  
  // this.character.health - 1;

  // warrior health (3) - (enemy attack (9)- warrior defense(4))
  // en health (6) - (war at 5 - en def 1)



    // if Player lives & Enemy dies
      // you win
    // if Player dies & Enemy lives
      // you lose
    // if Player lives & Enemy lives
      // startBattle
    // if Player dies & Enemy dies
      // oops


  battle() {
    //displayStats()
    this.battleRound += 1;
    if (this.testMode === 2) {console.log(`battleRound: ${this.battleRound}`)};
    if (this.testMode === 2) {console.log(`Character's Health Position A: ${this.characters[0].health}`)};

    this.characters[0].health = this.characters[0].health - (this.enemies[0].attack - this.characters[0].defense);
      
    this.enemies[0].health = this.enemies[0].health - (this.characters[0].attack - this.enemies[0].defense);


    // if Player lives & Enemy dies
    if (this.characters[0].health > 0 && this.enemies[0].health <= 0) {
        // this.move();
            return "you win";
      // if Player dies & Enemy lives
    } else if (this.characters[0].health <= 0 && this.enemies[0].health > 0) {
      return "you lose";
      // if Player lives & Enemy lives
    } else if (this.characters[0].health > 0 && this.enemies[0].health > 0) {
      
      
      this.startBattle();

      // if Player dies & Enemy dies
    } else if (this.characters[0].health <= 0 && this.enemies[0].health <= 0) {
      return "you lose2";
    }

  }

  

  startBattle() {
    if (this.characters[0].health > 0) {
      this.battle();
    } else {
      return "you lose";
    }

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
