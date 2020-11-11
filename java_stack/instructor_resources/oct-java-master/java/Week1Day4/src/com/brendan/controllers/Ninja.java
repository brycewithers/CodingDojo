package com.brendan.controllers;


public class Ninja {

	static int numberOfNinjas = 0;
	
	private String name;
	private int health;
	private String saying;
	
	public Ninja(String name, int health, String saying) {
		this.setName(name);
		this.setHealth(health);
		this.setSaying(saying);
		Ninja.numberOfNinjas++;
	}
	
	public void strike(Ninja ninja) {
		System.out.println(this.getName() + " punches " + ninja.getName());
		int updatedHealth = ninja.getHealth() - 30;
		ninja.setHealth(updatedHealth);
		System.out.println(ninja.getName() + " only has " + ninja.getHealth() + " health left!");
	}
	
	
	
	public static int getNumberOfNinjas() {
		return numberOfNinjas;
	}

	public static void setNumberOfNinjas(int numberOfNinjas) {
		Ninja.numberOfNinjas = numberOfNinjas;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getHealth() {
		return health;
	}
	public void setHealth(int health) {
		this.health = health;
	}
	public String getSaying() {
		return saying;
	}
	public void setSaying(String saying) {
		this.saying = saying;
	}
}
