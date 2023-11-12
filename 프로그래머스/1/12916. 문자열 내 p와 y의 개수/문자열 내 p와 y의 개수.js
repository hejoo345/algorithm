function solution(s){
    let pcnt = 0;
    let ycnt = 0;
    for(const i of s) {
        if(i == 'p' || i == 'P') pcnt++;
        else if(i == 'y' || i == 'Y') ycnt++;
    }
    const answer = pcnt == ycnt ? true : false;
    return answer;
}