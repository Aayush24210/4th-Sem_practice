public class twoto5 {
    // replace 2 5 in an array using recursive function
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 2, 7};
        replaceTwoWithFive(arr, 0);
        System.out.print("Array after replacing 2 with 5: ");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    public static void replaceTwoWithFive(int[] arr, int i) {
        if (i >= arr.length) {
            return;
        }
        if (arr[i] == 2) {
            arr[i] = 5;
        }
        replaceTwoWithFive(arr, i + 1);
    }

}
