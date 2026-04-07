import java.util.Scanner;

public class frequencycounter{
        public static int frequencycount(int n,int d){
            int count=0;
            while(n>0){
                int rem = n%10;
                if(rem==d)
                count++;
                n = n/10;
            }
            return count;
        }
}
public static void main(String[] args){
     Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int d = sc.nextInt();
    int count = frequencycount(n,d);
    System.out.println(count);

    sc.close();

}
