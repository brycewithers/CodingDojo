package com.brendan.shapes;

import com.brendan.classes.SuperRectangle;

public class ShapeTester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Line myLine = new Line(99, 255, 5, 5);
		String output = myLine.getLocation();
		System.out.println(output);
		
		
		Rectangle myRect = new Rectangle(1, 1, 10, 5);
		System.out.println(myRect.getArea());
		
		Circle myCirc = new Circle(1, 2, 5);
		System.out.println(myCirc.getArea());
	
		
		SuperRectangle superRect = new SuperRectangle(1, 2, 4,5);
	}

}
