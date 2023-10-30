class Solution {
    public String solution(int[] food) {
        String answer = "";
        StringBuilder sb = new StringBuilder();
        for (int i = 1; i < food.length; i++) {
            for (int j = 0; j < food[i] / 2; j++) {
                sb.append(i);
            }
        }
        StringBuilder rv = new StringBuilder(sb);
        StringBuilder reverseStr = rv.reverse();
        sb.append(0);
        sb.append(reverseStr);
        return sb.toString();
    }
}