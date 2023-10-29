import java.util.*;

class Solution {
    public int[] solution(int k, int[] score) {
        int[] answer = new int[score.length];
        PriorityQueue<Integer> queue = new PriorityQueue<>();

        for (int i = 0; i < score.length; i++) {
            queue.add(score[i]);
            if (i > k - 1) {
                queue.poll();
            }
            answer[i] = queue.peek();
        }
        return answer;
    }
}