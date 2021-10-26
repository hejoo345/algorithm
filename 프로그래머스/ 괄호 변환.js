function solution(p) {
    if(p === '') return '';
    const bal = balancedStr(p); // 균형잡인 문자열 u, 나머지 v
    let u = bal[0];
    let v = bal[1];
    
    let cnt = 0;   
    for(let i = 0; i < u.length; i++){
        cnt = u[i] === '(' ? cnt + 1 : cnt - 1;
        if(cnt < 0){
            let string = "(" + solution(v) + ")";
            for(let j = 1; j < u.length - 1; j++){
                u[j] === '(' ? (string += ')') : ((string += '('));
            }
            return string;
        }
    }
    
    return u + solution(v);
}

const balancedStr = (s) => {
    let cnt = 0;
    for(let i = 0; i < s.length; i++){
        s[i] === '(' ? cnt++ : cnt--;
        if(cnt === 0) return [s.substr(0, i+1), s.substr(i+1)];
    }
}