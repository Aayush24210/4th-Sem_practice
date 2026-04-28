// n to one minimum steps n-1 n/2 n/3 recursion memoriation 
import java.util.Arrays;
public class ntOne {

    public static int minSteps(int n, int[] dp) {
        if (n == 1) return 0;
        if (dp[n] != -1) return dp[n];
        int steps = minSteps(n - 1, dp);
        if (n % 2 == 0) {
            steps = Math.min(steps, minSteps(n / 2, dp));
        }
        if (n % 3 == 0) {
            steps = Math.min(steps, minSteps(n / 3, dp));
        }
        dp[n] = steps + 1;
        return dp[n];
    }
    public static void main(String[] args) {
        int n = 10;
        int[] dp = new int[n + 1];
        Arrays.fill(dp, -1);
        System.out.println(minSteps(n, dp));
    }
}
