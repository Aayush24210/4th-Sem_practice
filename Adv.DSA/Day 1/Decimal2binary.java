// write a code to convert decimal number to binary number  
import java.util.Scanner;
public class Decimal2binary {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");
        int decimalNumber = sc.nextInt();
        String binaryNumber = decimalToBinary(decimalNumber);
        System.out.println("Binary representation: " + binaryNumber);
        sc.close();
    }
    public static String decimalToBinary(int decimal) {
        StringBuilder binary = new StringBuilder(); 
        while (decimal > 0) {
            int remainder = decimal % 2; 
            binary.append(remainder); 
            decimal /= 2; 
        }
        return binary.reverse().toString();
    }
}