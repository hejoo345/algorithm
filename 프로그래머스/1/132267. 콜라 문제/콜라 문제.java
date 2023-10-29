class Solution {
    public int solution(int a, int b, int n) {
        int answer = 0;
        int result = 0;
        int remain = 0;
        while (n >= a) {
            result = n / a * b;
            remain = n % a;
            answer += result;
            n = result + remain;
        }
        return answer;
    }
}