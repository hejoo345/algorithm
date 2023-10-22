function isPalin(str, idx){
    const half = (str.length - idx) / 2;
    for(let i = 0; i < half; i++){
        if(str[idx + i] !== str[str.length - i - 1]) return false;
    }
    return true;
}
function solution(plain) {
    for(let i = 0; i < plain.length; i++){
        if(isPalin(plain, i)){
            return plain.length + i;
        }
    }
}