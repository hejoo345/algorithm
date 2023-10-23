import java.util.*;

class Solution {
    public String solution(String[] cards1, String[] cards2, String[] goal) {
        int c1 = 0;
        int c2 = 0;
        int goal_cnt = 0;
        int goal_len = goal.length;
        String answer = "No";
        while (goal_len-- > 0) {
            if (c1 < cards1.length && cards1[c1].equals(goal[goal_cnt])) {
                c1++;
                goal_cnt++;
            } else if (c2 < cards2.length && cards2[c2].equals(goal[goal_cnt])) {
                c2++;
                goal_cnt++;
            }
            if (goal_cnt == goal.length) {
                answer = "Yes";
                break;
            }
        }
        return answer;
    }
}