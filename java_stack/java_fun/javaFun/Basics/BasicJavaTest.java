import java.util.ArrayList;

public class BasicJavaTest {

    public static void main(String[] args) {
        BasicJava basicJava = new BasicJava();

        basicJava.print1To255();
        basicJava.printOdd1To255();
        basicJava.printSum1To255();

        int[] arr = {0, 1, 2, 5, 6, -8, 7};

        basicJava.iterateArray(arr);
        basicJava.findMax(arr);
        basicJava.averageVal(arr);
        basicJava.oddArray();
        basicJava.greaterThanY(arr, 3);
        basicJava.squareVal(arr);
        basicJava.noNegatives(arr);
        basicJava.maxMinAvg(arr);
        basicJava.shiftOne(arr);
    }
}