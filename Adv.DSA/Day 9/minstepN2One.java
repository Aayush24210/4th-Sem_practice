// //  write a code to find the minimum steps to reduce a number n to 1, you can perform any of the following operations:
// n==1
// n/2
// n/3 (with mimoization approach)


public class minstepN2One {
static int minstep(int n, int [] dp) {
    if (n == 1)return 0;
    if (dp[n] != 0) return dp[n];

    int min = minstep(n-1, dp);

    if (n%2 == 0){
        min = Math.min(min, minstep(n/2, dp));
    }
    if (n%3 == 0){
        min = Math.min(min, minstep(n/3, dp));
    }

    dp[n] = min + 1;
    return dp[n];
   
}   
    public static void main(String[] args) {
        int n = 18;
        int [] dp = new int[n+1];
        System.out.println(minstep(n, dp));
    }

}
// Explanation : 
// The function minstep takes an integer n as input and returns the minimum number of steps required to reduce n to 1.
// If n is 1, it returns 0.
// Otherwise, it recursively calculates the minimum steps for n-1, n/2 (if n is even), and n/3 (if n is divisible by 3),
//  and returns the minimum of these values plus 1.