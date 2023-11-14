function solution(X, Y) {
    let answer = "";
    X = X.split("");
    Y = Y.split("");
    for(let i = 0; i <= 9; i++) {
        const xlen = X.filter(num => Number(num) == i).length;
        const ylen = Y.filter(num => Number(num) == i).length;
        answer += `${i}`.repeat(Math.min(xlen, ylen));
    }
    
    if(answer == '') return "-1";
    if(Number(answer) == 0) return "0";
    return answer.split("").sort((a, b) => b.localeCompare(a)).join("");
}