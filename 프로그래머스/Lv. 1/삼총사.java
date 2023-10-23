class Solution {
    static int answer;

    public int solution(int[] number) {
        boolean[] visit = new boolean[number.length];
        combination(number, visit, 0, 3);
        return answer;
    }

    public void combination(int[] number, boolean[] visited, int start, int r) {
        if (r == 0) {
            int sum = 0;
            for (int i = 0; i < number.length; i++) {
                if (visited[i]) {
                    sum += number[i];
                    // System.out.println(number[i]);
                }
            }
            // System.out.println();
            if (sum == 0) answer++;
        }

        for (int i = start; i < number.length; i++) {
            visited[i] = true;
            combination(number, visited, i + 1, r - 1);
            visited[i] = false;
        }
    }
}