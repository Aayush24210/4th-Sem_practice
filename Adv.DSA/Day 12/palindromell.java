// public class palindromell {
//     //Given a linked list find is given ll is palindrome or not
//     // [1,1,2,1,1]      

//     class Node {
//         int data;
//         Node next;
        
//         Node(int data) {
//             this.data = data;
//             this.next = null;
//         }
//     }
    
//     Node head;
    
//     // Add node to the end of linked list
//     public void add(int data) {
//         Node newNode = new Node(data);
//         if (head == null) {
//             head = newNode;
//             return;
//         }
//         Node current = head;
//         while (current.next != null) {
//             current = current.next;
//         }
//         current.next = newNode;
//     }
    
    
//     private Node findMiddle(Node head) {
//         Node slow = head, fast = head;
//         while (fast != null && fast.next != null) {
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow;
//     }
    
   
//     private Node reverseLL(Node head) {
//         Node prev = null;
//         Node current = head;
//         while (current != null) {
//             Node next = current.next;
//             current.next = prev;
//             prev = current;
//             current = next;
//         }
//         return prev;
//     }
//     //two pointer approach
//     Boolean isPaliLL() {
//         if (head == null || head.next == null) {
//             return true;
//         }
        
//         // Find middle
//         Node middle = findMiddle(head);
        
//         // Reverse second half
//         Node secondHalf = reverseLL(middle);
        
//         // Compare first half with reversed second half
//         Node first = head;
//         Node second = secondHalf;
        
//         while (second != null) {  // second half can be shorter or equal
//             if (first.data != second.data) {
//                 return false;
//             }
//             first = first.next;
//             second = second.next;
//         }
//         return true;
//     }
    
   
//     public void display() {
//         Node current = head;
//         System.out.print("List: ");
//         while (current != null) {
//             System.out.print(current.data + " -> ");
//             current = current.next;
//         }
//         System.out.println("null");
//     }

//     public static void main(String[] args) {
//         palindromell ll = new palindromell();
        
//         // Test case 1: [1,1,2,1,1]
//         int arr1[] = {1, 1, 2, 1, 1};
//         for (int num : arr1) {
//             ll.add(num);
//         }
//         ll.display();
//         System.out.println("Is Palindrome: " + ll.isPaliLL());
//     }
// }


// LL i  sgiven reverse ot and add the both LL .
L1=2,4,4
L2=5,6,3










