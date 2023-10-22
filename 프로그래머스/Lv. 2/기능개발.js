function solution(progresses, speeds) {
    let answer = [];
    for(;;){
        progresses = progresses.map((num, idx) => num + speeds[idx]);
        let cnt = 0;
        for(let i = 0; i < progresses.length;){
            if(progresses[i] >= 100){
                cnt++;
                progresses.shift();
                speeds.shift();
            }
            else break;
        }
        if(cnt > 0) answer.push(cnt);
        if(progresses.length === 0) break;
    }
    return answer;
}
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
