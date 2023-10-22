function solution(N, stages) {
    let answer = [];
    for(let i = 1; i <= N; i++){
        const a = stages.filter(num => num === i).length;
        const b = stages.filter(num => num >= i).length;
        const fail = parseFloat(a / b);
        answer.push([i, fail]);
    }
    answer.sort((a, b) => b[1] - a[1]);
    return answer.map(x => x[0]);
}