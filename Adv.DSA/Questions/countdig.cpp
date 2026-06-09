#include <iostream>

int countDigits(int n) {
    // Edge case: If the number is 0, it has exactly 1 digit.
    if (n == 0) return 1;

    int count = 0;
    while (n > 0) {
        count++;      // Increment the digit count
        n = n / 10;   // Remove the last digit
    }
    return count;
}

int main() {
    int n =233;
    std::cout << "Number of digits in " << n << " is: " << countDigits(n) << std::endl;
    return 0;
}   
