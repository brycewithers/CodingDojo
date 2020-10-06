
public class Human {
	protected int strength = 3;
	protected int stealth = 3;
	protected int intelligence = 3;
	protected int health = 100;
	
	public void attacked(Human target) {
		target.health -= this.strength;
	}
	
	public void displayHealth() {
		System.out.println("health is currently: " + this.health);
	}
}
