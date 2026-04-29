// print the maximum sum of arry by adding , no adjesence value are to be added (using memozialation)
import java.util.Arrays;//simple code to find the maximum sum of an array by adding non-adjacent values using memoization
public class sumarr {

    static int maxsum(int [] arr, int [] dp){
     
        if (arr.length == 0) return 0;
        if (arr.length == 1) return arr[0];
        if (dp[arr.length-1] != 0) return dp[arr.length-1];

        
        int include = arr[0] + maxsum(Arrays.copyOfRange(arr, 2, arr.length), dp);
        int exclude = maxsum(Arrays.copyOfRange(arr, 1, arr.length), dp);
        dp[arr.length-1] = Math.max(include, exclude);
        return dp[arr.length-1];
    }
    public static void main(String[] args) {
        int [] arr = {1,2,3,4,5};
        int [] dp = new int[arr.length];
        System.out.println(maxsum(arr, dp));

    }
}

// Explanation :
// The function maxsum takes an array of integers and a dp array for memoization.
// It checks for base cases: if the array is empty, it returns 0; if it has one element, it returns that element.
// If the maximum sum for the current array length is already computed aif (dp[n] != 0) return dp[n];nd stored in dp, it returns that value.
// Otherwise, it calculates the maximum sum by including the first element and recursively calling maxsum on the subarray starting from the third element (to avoid adjacent elements).