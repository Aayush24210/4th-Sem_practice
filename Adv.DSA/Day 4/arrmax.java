public class arrmax {
    static int maxnumarr(int[] arr,int i) {
        int n = arr.length;
        if (i == arr.length - 1) {
            return arr[i];
        }
        int smallans = maxnumarr(arr, i + 1);
        return Math.max(arr[i], smallans);
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5  };
        System.out.println(maxnumarr(arr, 0));
    }
}

        
