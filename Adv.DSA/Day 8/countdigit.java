// count the numbers of digits in a number in optimal way (memoization approach)

public class countdigit {
    public static int count(int n){
        if(n==0){
            return 0;
        }
        return 1 + count(n/10);
    }
    public static void main(String[] args) {
        int n = 12345;
        System.out.println(count(n));
    }
}

// Explanation: The count function takes an integer n as input and returns the number of digits in that integer.
// It does this by recursively dividing the number by 10 until it reaches 0. Each time it divides by 10,
// it counts one digit. When n becomes 0, it returns 0, which serves as the base case for the recursion.
// The main method initializes an integer n with the value 12345 and prints the result of the count function, 
// which will output 5, since there are 5 digits in the number 12345.