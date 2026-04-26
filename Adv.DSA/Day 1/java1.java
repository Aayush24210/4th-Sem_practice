// //Here we are using java language to code where we are starting from functions in java 
// import java.util.Scanner;
// public class java1{
//         public static int add(int a,int b)
//         {
//          return a+b;
//         }
// public static void main(String[] args){
//     Scanner sc = new Scanner(System.in);
//     int a = sc.nextInt();
//     int b = sc.nextInt();
//     int sum = add(a,b);
//     System.out.println("The sum of a and b is -: "+sum);

//     sc.close();

// }
// }


class java1{
    public static void main(String[] args) {
        String str1 = "abc";
        int count = 0;
        for (int i = 0; i < str1.length(); i++) {
            for (int j = i; j < str1.length(); j++){
                if(str1.charAt(i) == str1.charAt(j)){
                    count++;
                }
            }
        }
        System.out.println(+count);
    }
}




