function solution(dartResult) {
    let sum = 0;
    let point = 0;
    const numChk = /\d+/;
    for(let i = 0; i < dartResult.length; i++){
        if(numChk.test(dartResult[i])){     
            if(numChk.test(dartResult[i+1])) continue;
            let num = parseInt(dartResult[i]);
            if(numChk.test(dartResult[i-1])) num = 10;
        
            if(dartResult[i+2] === '*'){
                sum -= point;
                sum += point * 2;
            }
            
            if(dartResult[i+1] === 'S') point = num;
            else if(dartResult[i+1] === 'D') point = Math.pow(num, 2);
            else if(dartResult[i+1] === 'T') point = Math.pow(num, 3);
            
            if(dartResult[i+2] === '*') point *= 2;
            else if(dartResult[i+2] === '#') point *= -1;
            sum += point;
        }
    }
    return sum;
}

solution("1D2S0T");