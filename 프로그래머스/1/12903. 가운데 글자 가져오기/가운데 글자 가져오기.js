function solution(s) {
    var answer = '';
    if(s.length % 2 == 0) { // s 길이가 짝수
        return `${s[(s.length / 2) - 1]}${s[s.length / 2]}`;
    } else {
        return `${s[Math.floor(s.length / 2)]}`
    }
}