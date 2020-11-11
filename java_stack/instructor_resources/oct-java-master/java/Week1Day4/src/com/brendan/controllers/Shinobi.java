package com.brendan.controllers;

public class Shinobi extends Ninja {

	public Shinobi(String name, int health, String saying) {
		super(name, health + 100, saying);
		// TODO Auto-generated constructor stub
	}
	
	public void strike(Ninja ninja) {
		System.out.println("I am overwritten!");
	}

}
