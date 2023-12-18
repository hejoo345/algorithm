function solution(s) {
    let stack = [];
    let sp = 0;
    for(let i = 0; i < s.length; i++){
        if(stack[sp - 1] !== s[i]) {
            stack.push(s[i]);
            sp++;
        } else {
            stack.pop();
            sp--;
        }
    }
    return stack.length === 0 ? 1 : 0;
}