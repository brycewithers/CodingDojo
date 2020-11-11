public class Rectangle extends Shape {

    private int height;
    private int length;

    public Rectangle(int height, int length, int x, int y){
        super(x, y);
        this.setHeight(height);
        this.setLength(length);
        System.out.println(this.x);
    }


    public int getHeight(){
        return this.height;
    }

    public int getLength(){
        return this.length;
    }

    public void setHeight(int h){
        this.height = h;
    }

    public void setLength(int l){
        this.length = l;
    }
}