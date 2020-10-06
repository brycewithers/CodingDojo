
public class Samurai extends Human {
	private static int samCount = 0;
	private static int samHealth = 200;
	public static int howMany() {
		return Samurai.samCount;
	}
	
	public Samurai() {
		this.health = Samurai.samHealth;
		Samurai.samCount += 1;
	}
	
	public void deathBlow(Human target) {
		target.health = 0;
		this.health = (this.health/2);
	}
	
	public void meditate() {
		this.health = Samurai.samHealth;
	}
}
