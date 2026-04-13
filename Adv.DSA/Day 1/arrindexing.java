// import java.util.Scanner;
// public class arrindexing{
//     //Spam count
//     public static void main (String[] args){
//         try(Scanner sc = new Scanner(System.in)) {
//         int n = sc.nextInt();
//         int[] arr = new int [n];
//         for(int i = 0;i<n;i++){
//             arr[i] = sc.nextInt();
//         }
//         for (int i = 0; i < n; i++) {
//             System.out.println();
//         }  
//         int max = arr[0];
//         int min = arr[0];
//         for (int i = 0; i  < n; i ++) {
//             max = Math.max(max,arr[i]);
//             min = Math.min(min,arr[i]);
//         }
//         System.out.println();
//         System.out.println(max-min);
        
//     }
//   }
// }

// //right rotation in array
// //inverse in array
// //reverse in array


class recursion{
    public static void main(String[] args) {
        String str1 = "abc";
        int count = 0;
        for (int i = 0; i < str1.length(); i++) {
            for (int j = i+1; j < str1.length(); j++){
                if(str1.charAt(i) == str1.charAt(j)){
                    count++;
                }
            }
        }
        System.out.println(count);
    }
}
