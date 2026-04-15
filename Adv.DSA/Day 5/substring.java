//string is given create sub string 
public class substring {
    static void Subset(String p,String up) {
        if (up.isEmpty()) {
            System.out.println(p);
            return;
        }
        char ch = up.charAt(0);
        //include
        Subset(p+ ch, up.substring(1));
        //exclude
        Subset(p, up.substring(1));
    }
    public static void main(String[] args) {
    String str = "abc";
    Subset(" ", str);
    }
}