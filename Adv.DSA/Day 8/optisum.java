// public class fibonacci number using optimal approach
public class optisum{
    public static int sum(int n ,int [] dp)
    {
        if(n<=0){
            return 0;
        }
        if(dp[n] != -1){
            return dp[n];
        }
        dp[n] = n + sum(n-1,dp);
        return dp[n];
    }
    public static void main(String[] args) {
        int n = 10;
        int [] dp = new int[n+1];
        for(int i=0;i<=n;i++){
            dp[i] = -1;
        }
        System.out.println(sum(n, dp)); 
    }

}

// explainn the code:
// The code defines a class `optisum` that contains a method `sum` to calculate the sum of the first `n` 
// natural numbers using a dynamic programming approach. The `sum` method takes an integer `n` and an array
// `dp` as parameters. The method checks if `n` is less than or equal to 0, in which case it returns 0.
// If the value of `dp[n]` is not -1, it means that the sum for `n` has already been calculated and stored in the `dp` array, so it returns that value.
// If the value of `dp[n]` is -1, it means that the sum for `n` has not been calculated yet. The method calculates the sum by adding `n` to the result of a recursive call to `sum` with `n-1`.
// The calculated sum is then stored in `dp[n]` for future reference, and the method returns this value.
// In the `main` method, an integer `n` is defined with a value of 10, and an array `dp` of size `n+1` is created to store
// the calculated sums. The `dp` array is initialized with -1 to indicate that no sums have been calculated yet. Finally, the `sum` method is called with `n` and `dp`, and the result is printed to the console.
