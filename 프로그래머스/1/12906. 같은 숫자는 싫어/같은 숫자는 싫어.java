import java.util.*;

public class Solution {
    public ArrayList<Integer> solution(int []arr) {
        ArrayList<Integer> answer = new ArrayList<>();
        for (int i = 0; i < arr.length; i++ ) {
            if (i == 0) {
                answer.add(arr[i]);
                continue;                
            }
            if (arr[i] != arr[i - 1]) {
                answer.add(arr[i]);
            }
        }
        return answer;
    }
}