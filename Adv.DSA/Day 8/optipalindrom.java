//write a code to check if a string is palindrome or not using (memoization approach)

public class optipalindrom {
    static int [] [] dp = new int [100][100];
    public static int isPalindrome(String s, int i, int j) {
        if (i >= j) {
            return 1; // Base case: A single character or empty string is a palindrome
        }
        if (dp[i][j] != -1) {
            return dp[i][j]; // Return the stored result if already computed
        }
        if (s.charAt(i) == s.charAt(j)) {
            dp[i][j] = isPalindrome(s, i + 1, j - 1); // Check the inner substring
        } else {
            dp[i][j] = 0; // Not a palindrome
        }
        return dp[i][j];
    }
    public static void main(String[] args) {
        String s = "madam";
        // Initialize the dp array with -1 to indicate uncomputed states
        for (int i = 0; i < dp.length; i++) {
            for (int j = 0; j < dp[i].length; j++) {
                dp[i][j] = -1;  

        }
        }
        if (isPalindrome(s, 0, s.length() - 1) == 1) {
            System.out.println(s + " is a palindrome.");
        } else {
            System.out.println(s + " is not a palindrome.");
        }
    }
}