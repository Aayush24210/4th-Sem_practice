//reverse a number using recursion

public class reverse {
    static int revnumber(int n , int rev)
    {
        if(n == 0)
        {
            return rev;
        }
        rev = rev*10 + n%10;        // multiply rev by 10 and add the last digit of n to rev
        return revnumber(n/10,rev); // divide n by 10 to remove the last digit and call the function recursively with the updated rev
    }
    public static void main(String[] args) {
       int n  = 456789;
       int rev = 0;
       rev = revnumber(n,rev);
       System.out.println("Reverse of the number is: " + rev);
    }
}
