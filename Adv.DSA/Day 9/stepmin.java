import java.util.Arrays;

public class stepmin {
    static int minstep(String s , int i , int [] dp){
        if (i == s.length()) return 1;
        if (s.charAt(i) == '0') return 0;
        if (dp[i] != -1) return dp[i];




        int one = minstep(s, i+1, dp);
        int two = 0;
        if (i < s.length()){
         int num = (s.charAt(i) - '0')*10 + (s.charAt(i+1) - '0');
         if (num <= 26){
             two = minstep(s, i+2, dp); 
        }
       
        }
    return dp[i]+ one + two;
    }

    public static void main(String[] args) {
        String s = "123";
        int [] dp = new int[s.length()];
        Arrays.fill(dp, -1);   
        System.out.println(minstep(s, 0, dp));
    }

}