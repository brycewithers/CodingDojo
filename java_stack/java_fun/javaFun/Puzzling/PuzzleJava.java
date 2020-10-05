import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;
import java.util.Arrays;

public class PuzzleJava {

    // Create an array with the following values: 3, 5, 1, 2, 7, 9, 8, 13, 25, 32. 
    // Print the sum of all numbers in the array. Also have the function 
    // return an array that only includes numbers that are greater than 10 
    // (e.g. when you pass the array above, it should return an array with the values of 13,25,32)
    public static ArrayList<Integer> printSumAndReturnNew() {
        int[] myArr = {3, 5, 1, 2, 7, 9, 8, 13, 25, 32};
        int sum = 0;
        ArrayList<Integer> resultsArr = new ArrayList<Integer>();

        for (int num : myArr) {
            sum += num;
            if (num > 10) {
                resultsArr.add(num);
            }
        }
        System.out.println(sum);
        return resultsArr;
    }

    // Create an array with the following values: Nancy, Jinichi, Fujibayashi, Momochi, Ishikawa. 
    // Shuffle the array and print the name of each person. Have the method also return an array 
    // with names that are longer than 5 characters.
    public static ArrayList<String> shuffleNamesAndReturn() {
        String[] names = {"Nancy", "Jinichi", "Fujibayashi", "Momochi", "Ishikawa"};
        ArrayList<String> newArr = new ArrayList<String>();
        // make for loop to push names into the new array that is empty right now
        for (int index = 0; index < names.length; index++) {
            newArr.add(names[index]);
        }
        Collections.shuffle(newArr);

        for (String name : names) {
            System.out.println(name);
            if (name.length() > 5) {
                newArr.add(name);
            }
        }
        return newArr;
    }

    // Create an array that contains all 26 letters of the alphabet (this array must have 26 values). 
    // Shuffle the array and, after shuffling, display the last letter from the array. Have it also display 
    // the first letter of the array. If the first letter in the array is a vowel, have it display a message.
    public static void alphabetShuffle() {
        char[] alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        Collections.shuffle(Arrays.asList(alphabet));
        System.out.println("Last letter: " + alphabet[25]);
        System.out.println("First letter: " + alphabet[0]);
        if(alphabet[0] == 'a' || alphabet[0] == 'e' || alphabet[0] == 'i' || alphabet[0] == 'o' || alphabet[0] == 'u') {
            System.out.println("First letter is a vowel.");
        }
    }

    // Generate and return an array with 10 random numbers between 55-100.
    public static int[] randomArr() {
        int[] randomArr = new int[10];
        Random r = new Random();
        int low = 55;
        int high = 100;

        for (int i = 0; i < 10; i++) {
            randomArr[i] = r.nextInt(high - low) + low;
        }
        return randomArr;
    }

    // Generate and return an array with 10 random numbers between 55-100 and have it be sorted (showing the smallest number in the beginning). 
    // Display all the numbers in the array. Next, display the minimum value in the array as well as the maximum value.
    public static int[] randomArrSorted() {
        int[] myRandomArr = randomArr();
        ArrayList<Integer> newArr = new ArrayList<Integer>();
        for (Integer num: myRandomArr) {
            newArr.add(num);
        }
        Collections.sort(newArr);
        // System.out.println(Arrays.toString(myRandomArr));
        System.out.println("Min: " + myRandomArr[0]);
        System.out.println("Max: " + myRandomArr[9]);
        return myRandomArr;
    }

    // Create a random string that is 5 characters long.
    public static String randomString() {
        Random r = new Random();
        char[] alphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        String myStr = "";

        for (int i = 0; i < 5; i++) {
            int randomLetter = r.nextInt(26);
            myStr += alphabet[randomLetter];
        }
        return myStr;
    }

    // Generate an array with 10 random strings that are each 5 characters long
    public static String[] randomStringsArr() {
        String[] arrString = new String[10];
        for (int i = 0; i < 10; i++) {
            arrString[i] = randomString();
        }
        return arrString;
    }
}
