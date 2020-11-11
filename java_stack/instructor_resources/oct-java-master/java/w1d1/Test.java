import java.util.ArrayList;

public class Test {
    public static void main(String[] args){



        System.out.println("Hello world!");


        int age = 40;
        double pi = 3.14; // 314, 1
        // float

        char singleCharacter = 'a';
        String stringOfCharacters = "ABC";

        int[] numbers = {1, 2, 3, 4 ,5};

        ArrayList<Integer> betterNumbers = new ArrayList<Integer>();

        // Twenty twenty = new Twenty();
        // int number = twenty.get() + twenty.get();

        int number = Twenty.get(10) + Twenty.get(5);
        System.out.println(number);

        String[] words = {"Apple", "Pineapple", "Pear", "Pinecone"};

        for(int i = 0; i < words.length; i++ ){
            System.out.println(words[i]);
        }

        // ArrayList<String> betterWords

        for(String word: words){
            System.out.println(word);
        }
    }
}


