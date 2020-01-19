/* Your code goes here */
class Fighter {
    
    constructor(fighterCHaracteristics) {
        this.wins = 0;
        this.losses = 0;
        this.name = fighterCHaracteristics.name;
        this.strength = fighterCHaracteristics.strength;
        this.agility = fighterCHaracteristics.agility;
        this.health = fighterCHaracteristics.hp;
        this.damage = fighterCHaracteristics.damage;

    }
    wins() {
        return undefined;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getStrength() {
        return this.strength;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        return this.health;
    }
    dealDamage(amount) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }
    attack(defendingFigther) {

        if ((defendingFigther.getAgility() + defendingFigther.getStrength()) / 100 < Math.random()) {
            defendingFigther.dealDamage(this.damage);
            console.log(this.getName() + "makes " + this.getDamage() + " to " + defendingFigther.getName());
        } else {

            console.log(this.getName() + " attack missed");
        }
    }
    heal(amount) {
        this.health += amount;
    }
    addWin() {
        this.wins += 1;
    }

    addLoss() {
        this.losses += 1;
    }
    logCombatHistory() {
        console.log("Name: " + this.getName() + ", Wins: " + this.wins + ", Losses: " + this.losses);
    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0) {
        console.log(firstFighter.getName() + " is dead and can't figth.");
        return;
    } else if (secondFighter.getHealth() === 0) {
        console.log(secondFighter.getName() + " is dead and can't figth.");
        return;
    }
    while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        firstFighter.attack(secondFighter);
        secondFighter.attack(firstFighter);
    }
    if (firstFighter.getHealth() !== 0) {
        console.log(firstFighter.getName() + " has won!");
        firstFighter.addWin();
        secondFighter.addLoss();
        return;
    }
    console.log(secondFighter.getName() + " has won!");
    secondFighter.addWin();
    firstFighter.addLoss();
    return;
}