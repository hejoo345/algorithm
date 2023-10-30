class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 0;
        for (int n = 1; n <= number; n++) {
            // 약수 개수구하기
            int cnt = 0;
            for (int i = 1; i * i <= n; i++) {
                if (i * i == n) cnt++;
                else if (n % i == 0) cnt += 2;
            }
            answer += cnt > limit ? power : cnt;
        }
        return answer;
    }
}