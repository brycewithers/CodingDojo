package com.brendan.controllers;

public class Rectangle extends Shape {
	
	private int height;
	private int width;

	public Rectangle(int x, int y, int height, int width) {
		super(x, y);
		this.setHeight(height);
		this.setWidth(width);
		// TODO Auto-generated constructor stub
	}
	
	public void example(String word) {
		
	}
	
	public int area() {
		return (height * 2) * (width * 2);
	}

	public Rectangle() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getHeight() {
		return height;
	}
	public void setHeight(int height) {
		this.height = height;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	
}
