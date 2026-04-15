// arraycounter 
import java.util.*; 
public class arraycounter {
    static int count(int arr[],int i, int key){
         if ( i == arr. length) return 0;
         int count = 0;
         if (arr[i] == key ) count++;
         return count + count (arr, i+1, key);


    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,23,23,22,21};
        int key = 2;
        System.out.println(count(arr, 0,key));
    }
}
