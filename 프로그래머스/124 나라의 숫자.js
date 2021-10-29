const rule = { 1: '1', 2: '2', 0: '4'};
function solution(n) {
    let q = parseInt(n / 3);
    const r = n % 3;
    if(r === 0) q--;
    if(q > 0) return solution(q) + rule[r];
    else return rule[r];
}

solution(13);