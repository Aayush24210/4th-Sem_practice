//climb n no. of stairs 
public class climb {
    static void toss(int n, String str) {
        if (n == 0) {
            System.out.println(str);
            return;
        }
        toss(n - 1, str + "step1");
        toss(n - 1, str + "step2");
    }

    public static void main(String[] args) {
        int n = 2;
        toss(n, "");
    }
}
