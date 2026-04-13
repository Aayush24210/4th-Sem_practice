public class arrysum {
    static int aryysum(int arr[],int n){
        if (n == 0 ) {
        return 0;

        }
        return arr[n-1]+aryysum(arr,n-1);
    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5};
        int  n = arr.length;
        System.out.println(aryysum(arr, n));
    }
}
