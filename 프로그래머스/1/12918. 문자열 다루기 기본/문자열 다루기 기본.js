function solution(s) {
    for(const i of s){
        if(!Number.isInteger(Number(i))) return false;
    }
    if(s.length == 4 ||s.length == 6) return true;
    return false;
}