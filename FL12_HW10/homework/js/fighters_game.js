class Fighter {
    constructor(fighterCHaracteristics) {
        this._wins = 0;
        this._losses = 0;
        this._name = fighterCHaracteristics.name;
        this._strength = fighterCHaracteristics.strength;
        this._agility = fighterCHaracteristics.agility;
        this._health = fighterCHaracteristics.hp;
        this._damage = fighterCHaracteristics.damage;
    }
    getName() {
        return this._name;
    }
    getDamage() {
        return this._damage;
    }
    getStrength() {
        return this._strength;
    }
    getAgility() {
        return this._agility;
    }
    getHealth() {
        return this._health;
    }
    dealDamage(amount) {
        this._health -= amount;
        if (this._health < 0) {
            this._health = 0;
        }
    }
    attack(defendingFigther) {
        if ((defendingFigther.getAgility() + defendingFigther.getStrength()) / 100 < Math.random()) {
            defendingFigther.dealDamage(this._damage);
            console.log(this.getName() + "makes " + this.getDamage() + " to " + defendingFigther.getName());
        } else {

            console.log(this.getName() + " attack missed");
        }
    }
    heal(amount) {
        this._health += amount;
    }
    addWin() {
        this._wins += 1;
    }
    addLoss() {
        this._losses += 1;
    }
    logCombatHistory() {
        console.log("Name: " + this.getName() + ", Wins: " + this._wins + ", Losses: " + this._losses);
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