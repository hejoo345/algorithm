function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((num, idx) => {
        if(signs[idx]) {
            answer += num;
        } else {
            answer += num * -1;
        }
    })
    return answer;
}