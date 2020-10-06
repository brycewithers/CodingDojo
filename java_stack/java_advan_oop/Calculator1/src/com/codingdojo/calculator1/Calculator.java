package com.codingdojo.calculator1;

public class Calculator {
	private double operandOne;
	private double operandTwo;
	private String operation;
	private double result;
	
	public void setOperandOne(double input1) {
		operandOne = input1;
	}
	
	public void setOperandTwo(double input2) {
		operandTwo = input2;
	}
	
	public void setOperation(String operation) {
		this.operation = operation;
	}
	
	public void performOperation() {
		if (operation == "+") {
			result = operandOne + operandTwo;
		}
		if (operation == "-") {
			result = operandOne - operandTwo;
		}
	}
	
	public double getResult() {
		return result;
	}
}
