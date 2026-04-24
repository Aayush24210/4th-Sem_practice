// write a code to find the number of ways to climb n stairs, you can either climb 1 or 2 steps at a time

public class optistair {
    public static int count(int n){
        if(n==0 || n==1){
            return 1;
        }
        return count(n-1) + count(n-2);
    }
    
    public static void main(String[] args) {
        int n = 6;
        System.out.println(count(n));
    }
}
