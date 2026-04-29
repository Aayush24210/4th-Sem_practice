// write a program to find the steps possible (like there are 5 types of steps possible to reach 4 by addidition of 1111,121,22,212,112)
// n=4
// possible types to find 4 like 1111, 121, 22,212, 112 give me code to find the number of possible sum to reach n by addition of 1,2(like there are there are 5 types of steps possible to reach 4 by addidition  of  1111 , 121, 22,212, 112)

public class numofstep {
    static int countSteps(int n,int [] dp){
        if (n == 0) return 1;
        if (n < 0) return 0;
        if (dp[n] != 0) return dp[n];

        
        int count = countSteps(n-1, dp) + countSteps(n-2, dp);
        dp[n] = count;
        return dp[n];

    }
    public static void main(String[] args) {
        int n = 4;
        int [] dp = new int[n+1];
        System.out.println(countSteps(n, dp));
    
}
}

// Explanation :
// The function countSteps takes an integer n as input and returns the number of ways to reach n by adding 1 or 2.
// If n is 0, it returns 1 (there's one way to reach 0, which is to do nothing).
// If n is negative, it returns 0 (there's no way to reach a negative number).
// If the value for n is already computed and stored in dp[n], it returns that value to avoid redundant calculations.
// Otherwise, it recursively calculates the count of steps by adding the results of countSteps(n-1, dp) and countSteps(n-2, dp), stores the result
