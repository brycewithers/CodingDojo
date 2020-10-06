
public class BattleTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Samurai bob = new Samurai();
		Samurai rob = new Samurai();
		rob.displayHealth();
		bob.displayHealth();
		bob.meditate();
		bob.deathBlow(rob);
		rob.displayHealth();
		bob.displayHealth();
//		System.out.println("bob kicked rob's butt!");
	}

}
