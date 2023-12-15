function solution(n, times) {
    times.sort((a, b) => a - b);
    let left = 1;
    let right = n * times[times.length - 1];
    let answer = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let cnt = 0;
        times.forEach(time => {
            cnt += Math.floor(mid / time);
            if (cnt >= n) {
                answer = Math.min(mid, answer);
                return;
            }
        });
        if (cnt >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}