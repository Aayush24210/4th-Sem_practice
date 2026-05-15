import java.util.Stack;
public class Main{
public static void main(String[] args) {
    Stack<String> stack =new Stack<String>();
    stack.push("Minecraft");
    stack.push("ROBLOX");
    stack.push("Free Fire");
    stack.push("God of War");
    System.out.println(stack);
    System.out.println("POP: " + stack.pop());
    System.out.println(stack);
    System.out.println("Peek: " + stack.peek());
    System.out.println(stack.search("Minecraft"));
    System.out.println(stack.search("fallout76"));
    // Stack uses LIFO 
    // uses of stack:
    // 1. undo\redo features in text editor
    // 2. move backward\forward 

    // push() to add in top
    // pop() to remove

}
}