
public class Bat extends Mammal {
	public Bat() {
		energyLevel = 300;
	}
	
	public Bat(int energyLevel) {
		super(300);
	}
	
	public void fly() {
		System.out.println("I'm flying!");
		energyLevel -= 50;
	}
	
	public void eatHuman() {
		System.out.println("I just ate somebody!");
		energyLevel += 25;
	}
	
	public void attackTown() {
		System.out.println("It will give them an opportunity to rebuild...");
		energyLevel -= 100;
	}
}
