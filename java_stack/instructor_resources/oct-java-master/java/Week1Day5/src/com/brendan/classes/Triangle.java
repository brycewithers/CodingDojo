package com.brendan.classes;

import com.brendan.shapes.AreaInterface;
import com.brendan.shapes.Dot;

public class Triangle extends Dot implements AreaInterface {
	
	private int width;
	private int height;
	
	public Triangle(int w, int h) {
		this.setHeight(h);
		this.setWidth(w);
	}
	

	@Override
	public double getArea() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public String getLocation() {
		// TODO Auto-generated method stub
		return null;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}
	
	
	

}
