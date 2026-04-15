//print a binary number using recursion
public class biaryptr {
    static void binary(int n,String str) {
        if (n == 0) {
            System.out.println(str);
            return;
        }
        binary(n / 2, str + (n % 2));
    }

    public static void main(String[] args) {
        int n = 10;
        binary(n, "");
    }
}
