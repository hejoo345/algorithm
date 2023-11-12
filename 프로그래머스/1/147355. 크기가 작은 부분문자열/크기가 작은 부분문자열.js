function solution(t, p) {
    var answer = 0;
    for(let i = 0; i + p.length <= t.length; i++) {
        if(t.slice(i, i + p.length) <= p) answer++;
    }
    return answer;
}