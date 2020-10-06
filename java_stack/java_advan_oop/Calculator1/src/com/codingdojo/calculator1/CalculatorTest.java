package com.codingdojo.calculator1;

public class CalculatorTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Calculator test = new Calculator();
		test.setOperandOne(10.5);
		test.setOperation("+");
		test.setOperandTwo(5.2);
		test.performOperation();
		System.out.println(test.getResult());
	}

}
