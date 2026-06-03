public class palindromell {
    //Given a linked list find is given ll is palindrome or not
    // [1,1,2,1,1]      

    class Node {
        int data;
        Node next;
        
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }
    
    Node head;
    
    // Add node to the end of linked list
    public void add(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node current = head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
    
    
    private Node findMiddle(Node head) {
        Node slow = head, fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    
   
    private Node reverseLL(Node head) {
        Node prev = null;
        Node current = head;
        while (current != null) {
            Node next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
    //two pointer approach
    Boolean isPaliLL() {
        if (head == null || head.next == null) {
            return true;
        }
        
        // Find middle
        Node middle = findMiddle(head);
        
        // Reverse second half
        Node secondHalf = reverseLL(middle);
        
        // Compare first half with reversed second half
        Node first = head;
        Node second = secondHalf;
        
        while (second != null) {  // second half can be shorter or equal
            if (first.data != second.data) {
                return false;
            }
            first = first.next;
            second = second.next;
        }
        return true;
    }
    
   
    public void display() {
        Node current = head;
        System.out.print("List: ");
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

    public static void main(String[] args) {
        palindromell ll = new palindromell();
        
        // Test case 1: [1,1,2,1,1]
        int arr1[] = {1, 1, 2, 1, 1};
        for (int num : arr1) {
            ll.add(num);
        }
        ll.display();
        System.out.println("Is Palindrome: " + ll.isPaliLL());
    }
}


// LL i  sgiven reverse ot and add the both LL .
L1=2,4,4
L2=5,6,3

//reorder the linked list




// LL is given reverse to number and add the both LL .
// L1=2,4,4
// L2=5,6,3

class listll {
	static class ListNode {
		int val;
		ListNode next;
		ListNode(int val) { this.val = val; }
	}

	static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
		ListNode dummy = new ListNode(0);
		ListNode p = dummy;
		int carry = 0;
		while (l1 != null || l2 != null || carry != 0) {
			int sum = carry;
			if (l1 != null) { sum += l1.val; l1 = l1.next; }
			if (l2 != null) { sum += l2.val; l2 = l2.next; }
			p.next = new ListNode(sum % 10);
			carry = sum / 10;
			p = p.next;
		}
		return dummy.next;
	}

	static ListNode fromArray(int[] a) {
		ListNode dummy = new ListNode(0);
		ListNode p = dummy;
		for (int v : a) {
			p.next = new ListNode(v);
			p = p.next;
		}
		return dummy.next;
	}

	static void printList(ListNode l) {
		if (l == null) { System.out.println("[]"); return; }
		StringBuilder sb = new StringBuilder();
		while (l != null) {
			sb.append(l.val);
			if (l.next != null) sb.append(" -> ");
			l = l.next;
		}
		System.out.println(sb.toString());
	}

	static String listNumberString(ListNode l) {
		StringBuilder sb = new StringBuilder();
		while (l != null) {
			sb.append(l.val);
			l = l.next;
		}
		return sb.reverse().toString();
	}

	public static void main(String[] args) {
		int[] a1 = {2, 4, 4};
		int[] a2 = {5, 6, 3};

		ListNode l1 = fromArray(a1);
		ListNode l2 = fromArray(a2);

		System.out.print("L1: "); printList(l1);
		System.out.print("L2: "); printList(l2);

		ListNode sum = addTwoNumbers(l1, l2);
		System.out.print("Sum (digits, reverse order): "); printList(sum);
		System.out.println("Sum (number): " + listNumberString(sum));
	}
}






// partition

class partition {
    


    
}





