//Diagonal sum of 2D array
import java.util.Scanner;
public class DIagonal_SUM{
    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);
       System.out.println("Enter the no. of row and column");
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[][] arr = new int [m][n];
        System.out.println("Enter elements");
        for(int i = 0;i<n;i++){
           for (int j = 0; j < m; j++) {
               arr[i][j] = sc.nextInt();
            }
        }
        int sum=0;
        for (int i = 0; i < m; i++) {
            sum += arr[i][i];
        }
        System.out.println("The diagonal sum is "+sum);
    }
}
 //Transpose of array
 
// class  Transpose{
//     public static void main(String[] args) {
//         int d =0;
//         int n =0;
//         boolean flag = false;
//         for (int i = 0; i < 10; i++) {
//         for (int j = 0; j < n; j++) {
//             if (arr[i][j]==0) {
//                 flag=true;
//             }
//         }
//     }
// }
// }

