function solution(n) {
    var answer = 0;
    for(let i = 0; i * i <= n; i++) {
        if(i * i == n){
            answer += i;
        }
        else if(n % i == 0) {
            answer += i;
            answer += n / i;
        }
    }
    return answer;
}