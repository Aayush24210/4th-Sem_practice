//  heres the n num of frnds are given and we have to find the total no of pairs 
public class Nnumfrnd {
    static int Nnumfrd(int n){
        if (n == 0 || n == 1 || n == 2) return n;
        return Nnumfrd(n-1) + Nnumfrd(n-2) * (n-1);
    }
    public static void main(String[] args) {
        int n = 4;
        System.out.println(Nnumfrd(n));
    }


}
// next question kya h 
// arrange n num of frnds
                                

