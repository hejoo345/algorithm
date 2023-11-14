function solution(lottos, win_nums) {
    let answer = [];
    let match = 0;
    let notMatch = 0;
    lottos.forEach(num => {
        if(win_nums.includes(num)) {
            match++;
        } else if(num != 0 && !win_nums.includes(num)) {
            notMatch++;
        }
    })
    // 최고 순위
    let max = 6 - notMatch; // 최대로 일치할 수 있는 개수
    if(max == 6) {
        answer.push(1);
    } else if(max == 0) {
        answer.push(6);
    } else {
        answer.push(7 - max);
    }
    // 최저 순위
    if(match == 6) {
        answer.push(1);
    } else if(match == 0) {
        answer.push(6);
    } else {
        answer.push(7 - match);
    }
    return answer;
}