public class Tester{
    public static void main(String[] args){

        Shape example1 = new Shape(10, 5);
        Shape example2 = new Shape();


        System.out.println(example1.getX());
        System.out.println(example2.getX());

        Rectangle example3 = new Rectangle(10, 20, 99, 2);
        System.out.println(example3.getX());
    }
}