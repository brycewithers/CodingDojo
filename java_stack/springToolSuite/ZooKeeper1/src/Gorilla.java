
public class Gorilla extends Mammal {
	public Gorilla() {
		energyLevel = 100;
	}
	
	public Gorilla(int energyLevel) {
		super(energyLevel);
	}

	public void throwSomething() {
		System.out.println("just threw something");
		energyLevel -= 5;
	}
	public void eatBanana() {
		System.out.println("snacked on a banana");
		energyLevel += 10;
	}
	public void climb() {
		System.out.println("climbing something");
		energyLevel -= 10;
	}
}

