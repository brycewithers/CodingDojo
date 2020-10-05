import java.util.ArrayList;

public class BasicJava {

    public void print1To255() {
        for (int i = 1; i <= 255; i++) {
            System.out.println(i);
        }
    }

    public void printOdd1To255() {
        for (int i = 1; i <= 255; i++) {
            if (i % 2 != 0) {
                System.out.println(i);
            }
        }
    }

    public void printSum1To255() {
        int sum = 0;
        for (int i = 0; i <= 255; i++) {
            String newNumber = "" + i;
            sum += i;
            String sumString = "" + sum;
            String result = "New number: " + newNumber + " Sum: " + sumString;
            System.out.println(result);
        }
    }

    public void iterateArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }

    public Integer findMax(int[] arr) {
        int max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }

    public Integer averageVal(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        int avg = sum / arr.length;
        return avg;
    }

    public void oddArray() {
        ArrayList<Integer> myNewArr = new ArrayList<Integer>();
        for (int i = 1; i <= 255; i++) {
            if (i % 2 != 0) {
                myNewArr.add(i);
            }
        }
        // return myNewArr; // make the method 'void' and the array will be altered via reference
    }

    public Integer greaterThanY(int[] arr, int y) {
        int num = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > y) {
                num += 1;
            }
        }
        return num;
    }

    public int[] squareVal(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            arr[i] = arr[i] * arr[i];
        }
        return arr;
    }

    public int[] noNegatives(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                arr[i] = 0;
            }
        }
        return arr;
    }

    public int[] maxMinAvg(int[] arr) {
        int avg = 0;
        int sum = 0;
        int max = arr[0];
        int min = arr[0];

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
            sum += arr[i];
        }

        avg = sum / arr.length;
        int[] answer = new int[0];
        answer[0] = max;
        answer[1] = min;
        answer[2] = avg;

        return answer;
    }

    public int[] shiftOne(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            if (i + 1 != arr.length) {
                arr[i] = arr[i + 1];
            }
            arr[i] = 0;
        }
        return arr;
    }
}