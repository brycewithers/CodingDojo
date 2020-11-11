package com.brendan.shapes;

public class Rectangle extends Dot implements AreaInterface {
	
	protected int x;
	int y;
	
	private int height;
	private int width;
	
	public Rectangle(int x, int y, int h, int w) {
		this.setX(x);
		this.setY(y);
		this.setHeight(h);
		this.setWidth(w);
	}

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return this.getHeight() * this.getWidth();
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
