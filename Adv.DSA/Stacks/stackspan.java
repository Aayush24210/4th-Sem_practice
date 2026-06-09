import java.util.Stack;
import java.util.Arrays;

/* [100,80,60,75,85]
Output: [1,1,1,2,4] */

public class stackspan {
    public static void main(String[] args) {
        int[] prices = {100, 80, 60, 75, 85};
        int[] span = calculateSpan(prices);
        System.out.println(Arrays.toString(span));
    }
    
    public static int[] calculateSpan(int[] prices) {
        int n = prices.length;
        int[] ans = new int[n];
        Stack<Integer> st = new Stack<>();
        
        for (int i = 0; i < n; i++) {
            // Pop elements while current price is greater than or equal to stack top
            while (!st.isEmpty() && prices[st.peek()] <= prices[i]) {
                st.pop();
            }
            
            // If stack is empty, all previous prices were smaller, so span = i + 1
            // Otherwise, span is the distance between current index and top element
            ans[i] = st.isEmpty() ? i + 1 : i - st.peek();
            
            // Push current index to stack
            st.push(i);
        }
        
        return ans;
    }
}









