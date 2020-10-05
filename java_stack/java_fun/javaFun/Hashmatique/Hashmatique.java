import java.util.HashMap;
import java.util.Set;

public class Hashmatique {
    public static void main(String[] args) {
        HashMap<String, String> trackList = new HashMap<String, String>();

        trackList.put("Six Feet Apart", "And there will be light after dark Someday when we aren't six feet apart");

        trackList.put("Toes", "I got my toes in the water, ass in the sand Not a worry in the world, a cold beer in my hand Life is good today. Life is good today.");

        trackList.put("This Song", "I'm tired of looking for songs and lyrics");

        trackList.put("That Other Really Good One", "Oh yeah I love that one!");

        String toes = trackList.get("Toes");

        System.out.println(toes);

        Set<String> keys = trackList.keySet();
        for (String key : keys) {
            System.out.println(String.format("%s: %s", key, trackList.get(key)));
        }

    }
}