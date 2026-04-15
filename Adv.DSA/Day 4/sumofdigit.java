//  sum the digits
public class sumofdigit {
    public static void main(String[] args) {
        int number = 12345; // Example number
        int sum = sumOfDigits(number);
        System.out.println("The sum of the digits in " + number + " is: " + sum);
    }

    public static int sumOfDigits(int num) {
        int sum = 0;
        while (num > 0) {
            sum += num % 10; // Add the last digit to the sum
            num /= 10; // Remove the last digit
        }
        return sum;
    }
}