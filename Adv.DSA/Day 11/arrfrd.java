import java.util.Arrays;

public class arrfrd {
    static int arngfrnd(int n , int [] dp){
         if (n == 1)return 0;
    if (dp[n] !=-1) return dp[n];
         if (n <= 1) {
            return n;
        }
       dp[n] = arngfrnd(n - 1,dp) + arngfrnd(n - 2,dp);
        return dp[n];

    }

    public static void main(String[] args) {
        int n =3;
        int [] dp  = new (n+1);
        Arrays.fill(dp, -1);
        System.out.println(arngfrnd(n, dp));
    }
}

