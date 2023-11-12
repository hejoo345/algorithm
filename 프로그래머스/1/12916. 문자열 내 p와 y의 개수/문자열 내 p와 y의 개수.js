function solution(s){
    const str = s.toLowerCase();
    const answer = [...str].reduce((acc, cur) => {
        if(cur == 'p') return acc + 1;
        else if(cur == 'y') return acc - 1;
        else return acc;
    }, 0) == 0 ? true : false;
    return answer;
}