package com.brendan.shapes;


public class Circle extends Dot implements AreaInterface {
	
	private int x;
	private int y;
	private int radius;
	
	public Circle(int x, int y, int r) {
		this.setX(x);
		this.setY(y);
		this.setRadius(r);
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return (radius * radius) * Math.PI;
	}

	@Override
	public String getLocation() {
		// TODO Auto-generated method stub
		return null;
	}

	public int getX() {
		return x;
	}

	public void setX(int x) {
		this.x = x;
	}

	public int getY() {
		return y;
	}

	public void setY(int y) {
		this.y = y;
	}

	public int getRadius() {
		return radius;
	}

	public void setRadius(int radius) {
		this.radius = radius;
	}

	

}
