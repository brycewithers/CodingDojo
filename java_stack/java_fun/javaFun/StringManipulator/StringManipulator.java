public class StringManipulator {
    
    public String trimAndConcat(String s1, String s2) {
        String newString = s1.trim() + s2.trim();
        return newString;
    }

    public Integer getIndexOrNull(String s, char c) {
        if (s.indexOf(c) >= 0) {
            return s.indexOf(c);
        } else {
            return null;
        }
    }

    public Integer getIndexOrNull(String s1, String s2) {
        if (s1.indexOf(s2) >= 0) {
            return s1.indexOf(s2);
        } else {
            return null;
        }
    }

    public String concatSubstring(String s1, int a, int b, String s2) {
        return s1.substring(a, b).concat(s2);
    }
}