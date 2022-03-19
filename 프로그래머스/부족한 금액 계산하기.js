function solution(price, money, count) {
    const result = price * count * (count+1) / 2 - money;
    return result > 0 ? result : 0;
}

solution(3, 20, 4);