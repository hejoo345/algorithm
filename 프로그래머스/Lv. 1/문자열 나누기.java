class Solution {
    public int solution(String s) {
        int answer = 1;
        int cnt1 = 1;
        int cnt2 = 0;
        char c = s.charAt(0);

        for (int i = 1; i < s.length(); i++) {
            if (cnt1 == cnt2) {
                c = s.charAt(i);
                cnt1 = 1;
                cnt2 = 0;
                answer++;
                continue;
            }
            if (c == s.charAt(i)) {
                cnt1++;
            } else {
                cnt2++;
            }
        }
        return answer;
    }
}