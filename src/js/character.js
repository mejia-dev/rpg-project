export class Character {
    constructor() {
      this.health = 8;
      this.defense = 8;
      this.attack = 8;
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
      } else if (type === "wizard") {
        this.health += 2;
        this.defense += 0;
        this.attack += 1;
      }
      return Character;
    }


}