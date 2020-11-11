package com.brendan.controllers;

public class Tester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Ninja example1 = new Ninja("Donatello", 150, "Pizza!");
		Ninja example2 = new Ninja("Rapheal", 150, "More pizza!");
		Ninja example3 = new Ninja("Michealangelo", 150, "also skateboards!!");
		Shinobi example4 = new Shinobi("Jeff", 150, "Hyah!");
		
		
		int area = AreaCalculator.getArea(10, 10);
		
		System.out.println(example1.getSaying());
		System.out.println(example3.getName());
		
		System.out.println(Ninja.getNumberOfNinjas());
		
		example1.strike(example2);
		example1.strike(example4);
		
		example4.strike(example4);
		
		example4.
	}

}
