// using memoziation 


public class subset {
    static int countsubset(int [] arr , int sum , int n , int [][] dp){
        if (sum == 0) return 1;
        if (n == 0) return 0;
        if (dp[n][sum] != -1) return dp[n][sum];
        if (arr[n-1] <= sum){
            dp[n][sum] = countsubset(arr, sum-arr[n-1], n-1, dp) + countsubset(arr, sum, n-1, dp);
            return dp[n][sum];
        }
        else {
            dp[n][sum] = countsubset(arr, sum, n-1, dp);
            return dp[n][sum];
        }
    }

    public static void main(String[] args) {
        int [] arr = {2,3,5,6,8,10};
        int sum = 10;
        int n = arr.length;
        int [][] dp = new int [n+1][sum+1];
        for (int i=0; i<=n; i++){
            for (int j=0; j<=sum; j++){
                dp[i][j] = -1;
            }
        }
        System.out.println(countsubset(arr, sum, n, dp));
    }
}