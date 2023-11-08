export class Character {
    constructor() {
      this.health = 3;
      this.defense = 3;
      this.attack = 3;
    }

    getStats(type) {
      if (type === "warrior") {
        this.health += 0;
        this.defense += 1;
        this.attack += 2;
      } else if (type === "archer") {
        this.health += 1;
        this.defense += 2;
        this.attack += 0;
      } else {
        this.health += 2;
        this.defense += 0;
        this.attack += 1;
      }
      return Character;
    }


}