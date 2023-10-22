function solution(s, n) {
    let answer = [];
    for(let i=0; i<s.length; i++){
        if(s[i] !== ' '){ 
            let num = s.charCodeAt(i);
            if(num >= 65 && num <=90){
                num += n;
                if(num > 90) num -= 26;
                answer.push(String.fromCharCode(num));
            }
            else if(num >= 97 && num <=122){
                num += n;
                if(num > 122) num -= 26;
                answer.push(String.fromCharCode(num));
            }
        }else{
            answer.push(' ');
        }
    }
    return answer.join('');
}