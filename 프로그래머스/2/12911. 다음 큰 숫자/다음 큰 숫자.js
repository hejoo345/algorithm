function solution(n) {
    var answer = 0;
    let next = n + 1;
    while(true) {
        let a = n.toString(2); // n을 2진수로
        let b = next.toString(2); // next를 2진수로
        if(a.replaceAll("0","").length == b.replaceAll("0","").length) {
            break;
        }
        next++;
    }
    return next;
}