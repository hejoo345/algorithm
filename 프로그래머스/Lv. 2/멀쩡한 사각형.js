function solution(w, h) {
    return (w * h) - (w + h - agcd(w, h));
}

const gcd = (w, h) => {
    if(h === 0) return w;
    return gcd(h, w % h);
}