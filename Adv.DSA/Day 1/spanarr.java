import java.util.Scanner;
public class spanarr{
    //Spam count
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int [n];
        for(int i = 0;i<n;i++){
            arr[i] = sc.nextInt();
        }
        for (int i = 0; i < n; i++) {
            System.out.println(arr[i] + " ");
        }  
        int max = arr[0];
        int min = arr[0];
        for (int i = 0; i  < n; i ++) {
            max = Math.max(max,arr[i]);
            min = Math.min(min,arr[i]);
        }
        System.out.println();
        System.out.println(max-min);
        }
    }
