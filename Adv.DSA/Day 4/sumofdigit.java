//  sum the digits
public class sumofdigit {
    static int sumofdig(int n){
        if (n==0) {
            return 0;
            return  n%10 + sumofdig(n/10);
        }
    }
    public static void main(String[] args){
        int n = 123 ;
        System.out.println(sumofdig(n));
    }
}