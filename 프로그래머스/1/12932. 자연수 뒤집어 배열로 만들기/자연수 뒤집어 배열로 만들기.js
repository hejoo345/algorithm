function solution(n) {
    var answer = [];
    const str = n.toString();
    for(let i = 0; i < str.length; i++) {
        answer.push(n % 10);
        n = Math.floor(n / 10);
    }
    return answer;
}