// count the numbers of digits in a number in optimal way (memoization approach)

public class countdigit {
    public static int count(int n, int[] dp){
        if(n==0){
            return 0;
        }
        if(dp[n] != -1){
            return dp[n];
        }
        if (dp[n] != -1) {
            return dp[n];
        }

        dp[n] = 1 + count(n/10, dp);
        return dp[n];
    }
    public static void main(String[] args) {
        int n = 12345;
        int[] dp = new int[n + 1];
        for(int i = 0; i <= n; i++) {
            dp[i] = -1;
        }
        System.out.println(count(n, dp));
    }
}

// Explanation: The count function takes an integer n as input and returns the number of digits in that integer.
// It does this by recursively dividing the number by 10 until it reaches 0. Each time it divides by 10,
// it counts one digit. When n becomes 0, it returns 0, which serves as the base case for the recursion.
// The main method initializes an integer n with the value 12345 and prints the result of the count function, 
// which will output 5, since there are 5 digits in the number 12345.