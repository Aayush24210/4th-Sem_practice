// recureence relation
// pass the string using recursion and print the string in reverse order
public class strpass {
    static void printrev(String str,int i) {
        if (i == str.length()) {
            return;
        }
        printrev(str, i + 1);
        System.out.print(str.charAt(i));
    }
    public static void main(String[] args) {
        String str = "hello";
        printrev(str, 0);
    }
}