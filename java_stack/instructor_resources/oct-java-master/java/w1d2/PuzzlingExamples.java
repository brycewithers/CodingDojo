import java.util.Random;
import java.util.ArrayList;
import java.util.Arrays;


public class PuzzlingExamples {
    static public int randomNumber(int n){
        Random myRandom = new Random();
        return myRandom.nextInt(n) + 1;
    }

    static public ArrayList<Object> createRandomArray(int size) {
        ArrayList<Integer> nums = new ArrayList<Integer>();

        for(int i = 1; i <= size; i++){
            nums.add(PuzzlingExamples.randomNumber(100));
        }

        System.out.println(nums);
    }

    static public void createRandomList(int size){
        int[] nums = new int[size];
        for(int i = 0; i < size; i++){
            nums[i] = PuzzlingExamples.randomNumber(100);
        }

        System.out.println(Arrays.toString(nums));
    }
}