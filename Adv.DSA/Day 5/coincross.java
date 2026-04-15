//print the tosses of a coin using recursion where there are four possible outputs
public class coincross {
    static void toss(int n, String str) {
        if (n == 0) {
            System.out.println(str);
            return;
        }
        toss(n - 1, str + "H");
        toss(n - 1, str + "T");
    }

    public static void main(String[] args) {
        int n = 2;
        toss(n, "");
    }
}
