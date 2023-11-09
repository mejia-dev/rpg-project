export class Enemy {
    constructor () {
      this.health = 1;
      this.defense = 0;
      this.attack = 0;  
    }

    enemyStats(type) {
      if (type === "monster") {
        this.health += 0;
        this.defense += 1;
        this.attack += 6;
      }
    }
    
}