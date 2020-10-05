class Ninja {
    constructor(name, health = 1, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`${ this.name }'s stats: health = ${ this.health }, 
        speed = ${ this.speed }, strength = ${ this.strength }`);
    }
    drinkSake() {
        this.health += 10;
        console.log('mmm, drink up!');
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();