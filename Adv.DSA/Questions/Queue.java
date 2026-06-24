// public class Queue {
//     public static void main(String[] args) {
//         Queue<String>q1 = new Queue<>();
//         q1.add(10);
//         q1.add(20);
//         q1.add(30);

//         System.out.println();
//         System.out.println(q1.size());
//         System.out.println(q1.peak());
//         System.out.println(q1.remove());
//         System.out.println(q1);
//         for (int x : q1) {
//             System.out.println(x+" ");
//         }
//         while (!q1.isEmpty()) {
//             System.out.println(q1.poll());
//         }
//     }
// }


// n = 10
/*
1
10
11
100
101
110
111
1000
1001
1010
 */
import java.util.*;
import java.util.LinkedList;

class InnerQueue {
public static void printBinary(int n )
{
 Queue<String> q1 = new Linkedlist<>(){
    q1.offer("1");
    for(int i = 1 ; i<=n;i++)
        {
        String curr = q1.poll();
        System.out.println(curr);
        q1.offer(curr + "0");
        q1.offer(curr + "1");
        }
 
     
}
        public static void main(String[] args){
            int n = 10;
            
        }
}
}






