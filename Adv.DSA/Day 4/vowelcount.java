public class vowelcount {
    static int countVowels(String str) {
        int count = 0;
        String vowels = "AEIOUaeiou"; // List of vowels (both uppercase and lowercase)
        for (int i = 0; i < str.length(); i++) {
            if (vowels.indexOf(str.charAt(i)) != -1) {
                count++; // Increment count if the character is a vowel
            }
        }
        return count;
    }

    public static void main(String[] args) {
        String str = "Hello World";
        int vowelCount = countVowels(str);
        System.out.println("The number of vowels in \"" + str + "\" is: " + vowelCount);
    }
}
