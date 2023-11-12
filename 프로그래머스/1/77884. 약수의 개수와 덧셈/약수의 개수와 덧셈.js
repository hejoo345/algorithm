function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        if(func(i) % 2 == 0) { // 약수의 개수가 짝수라면 더하고
            answer += i;
        } else { // 홀수라면 뺀다
            answer -= i;
        }
    }
    return answer;
}
function func(num) {
    let cnt = 0;
    for(let i = 0; i * i <= num; i++){
        if(i * i == num) cnt++;
        else if(num % i == 0) cnt += 2;
    }
    return cnt;
}