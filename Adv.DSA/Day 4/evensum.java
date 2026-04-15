public class evensum {
    static int evenSum(int arr[], int i){
        if(i==arr . length) return 0;
        int val = arr [i]%2==0 ? arr[i] : 0;
        return val + evenSum(arr, i+1);
    }
    public static void main(String[] args) {
        int arr[]={1,2,3,4,5,6,7,8,9,10};
        System.out.println(evenSum(arr , 0));
    }
}
