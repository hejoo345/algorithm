function solution(s) {
    let min_length = s.length;
    for(let i = 1; i <= s.length; i++){
        let cnt = 1;
        let arr = [];
        for(let j = 0; j < s.length; j += i){
            let str = s.substr(j,i);
            if(str === s.substr(j+i, i)){
                cnt += 1;
            }else {
                if(cnt !== 1) arr.push(cnt);
                arr.push(str);
                cnt = 1;
            }
        }
        const arr_length = arr.join('').length;
        min_length = arr_length < min_length ? arr_length : min_length;
    }
    return min_length;
}

solution("aabbaccc");