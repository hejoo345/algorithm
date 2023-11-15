function solution(s){
    let stack = [];
    if(s[0] == ')') return false;
    s.split("").forEach(item => {
        if(item == '(') {
            stack.push(item);
        } else {
            if(stack.length == 0) {
                return false;
            }
            stack.pop();
        }
    })
    if(stack.length == 0) return true;
    return false;
}