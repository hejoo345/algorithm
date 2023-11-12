function solution(s) {
    let arr = [];
    let answer = "";
    for(let i = 0; i < s.length; i++) {
        arr.push(s.charCodeAt(i));
    }
    arr.sort((a, b) => b - a);
    arr.forEach(i => answer += String.fromCharCode(i));
    return answer;
}