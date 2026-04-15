public class stringmove {
    public static void main(String[] args) {
        String str = "Hello World";
        int n = 5; // Number of characters to move
        String result = moveCharacters(str, n);
        System.out.println("Original String: " + str);
        System.out.println("String after moving characters: " + result);
    }

    public static String moveCharacters(String str, int n) {
        if (n <= 0 || n >= str.length()) {
            return str; // No change if n is out of bounds
        }
        String movedPart = str.substring(0, n); // Get the part to move
        String remainingPart = str.substring(n); // Get the remaining part
        return remainingPart + movedPart; // Concatenate remaining part with moved part
    }
}
