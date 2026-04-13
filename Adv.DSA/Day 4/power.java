// recursive function for calculating power n of x 
import java.util.*;

public class power {
    public static int findPower(int x, int n) {  //x = 4 n = 3  
        if (n == 0) {
            return 1;
        }
        return x * findPower(x, n - 1);
    }

    public static void main(String[] args) {
        Scanner Scanner = new Scanner(System.in);
        System.out.print("Enter the value of x: ");
        int x = Scanner.nextInt();
        System.out.print("Enter the value of n: ");
        int n = Scanner.nextInt();
        int result = findPower(x, n);
        System.out.println(x + " raised to the power of " + n + " is: " + result);
    }
}