public class Shape {
    protected int x;
    protected int y;

    public Shape(int x, int y){
        this.setX(x);
        this.setY(y);
    }

    public Shape(){

    }

    public int getX() {
        return this.x;
    }

    public void setX(int x){
        this.x = x;
    }

    public int getY() {
        return this.y;
    }

    public void setY(int y){
        this.y = y;
    }
}