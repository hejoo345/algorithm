function solution(brown, yellow) {
    const sum = brown + yellow;
    const sqrt = Math.floor(Math.sqrt(sum));
    for(let i = 3; i <= sqrt; i++) {
        if(sum % i == 0) {
            let a = i - 2;
            let b = sum/i - 2;
            if(a * b == yellow) {
                return [sum/i, i];
            }
        }
    }
}