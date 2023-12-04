function solution(s) {
    let answer = [0, 0];
    let cnt = 0;
    while( s != "1" ){
        let zeroCnt = s.replaceAll("1", "").length; // 제거한 0의 개수
        answer[1] += zeroCnt;
        s = s.replaceAll("0", ""); // 0 제거
        let len = s.length; // x의 길이
        s = len.toString(2);
        answer[0] += 1;
    }
    return answer;
}