function solution(n)
{
    const arr = n.toString().split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    console.log(arr)

    return arr;
}

solution(123);