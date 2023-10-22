function solution(new_id) {
    let answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g,'')
    .replace(/\.{2,}/g,'.')
    .replace(/^\.|\.$/g,'')
    .replace(/^$/,'a')
    .slice(0,15).replace(/\.$/,'');
    while(answer.length <= 2){
        answer += answer.substring(answer.length-1)
    }
    return answer;
}

solution("...!@BaT#*..y.abcdefghijklm");