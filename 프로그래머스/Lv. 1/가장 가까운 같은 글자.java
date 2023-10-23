import java.util.*;

class Solution {
    public int[] solution(String s) {
        int[] answer = new int[s.length()];
        Map<Character, Integer> hashMap = new HashMap<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i); // 현재 글자
            answer[i] = i - hashMap.getOrDefault(c, i + 1);
            hashMap.put(c, i);
        }
        return answer;
    }
}