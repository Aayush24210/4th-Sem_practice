// decode the string how many types of strings can be decoded from the given string(memzational approach)

public class Decstr {
 
    static int Decodestr(int [] arr,int [] dp ){
   if (arr.length == 0) return 0;
        if (arr.length == 1) return arr[0];
        if (dp[arr.length-1] != 0) return dp[arr.length-1];  //prev
     
        int count = Decodestr(arr, dp);
        if (arr.length >= 2 && (arr[0] == 1 || (arr[0] == 2 && arr[1] <= 6))){

            count =  count + Decodestr(arr, dp);

        }
        return dp[arr.length-1];
    }
        

    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        int[] dp = new int[arr.length];
        System.out.println(Decodestr(arr, dp));
    }
}