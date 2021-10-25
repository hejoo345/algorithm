function solution(a, b) {
    let answer = 0;
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for(let i = 0; i < a - 1; i++){
        answer += month[i]
    }
    answer += b + 4; // 2016.01.01은 금요일
    answer %= 7;
    return day[answer];
}