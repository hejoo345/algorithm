function solution(s) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for(let i in num){
        const regexAll = new RegExp(num[i], "g");
        s = s.replace(regexAll, i);
    }
    return Number(s);
}

solution('one4seveneight');