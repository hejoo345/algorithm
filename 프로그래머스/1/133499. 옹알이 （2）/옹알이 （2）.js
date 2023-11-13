function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    babbling.forEach(word => {
        let cnt = 0;
        for (let i = 0; i < 4; i++) {
            while(word.includes(words[i])) {
                // 연속해서 같은 발음을 하는지 확인
                const idx = word.indexOf(words[i]);
                const ck = word.slice(idx + words[i].length, idx + (words[i].length * 2));
                if (words[i] == ck) break;
                else {
                    cnt++;
                    word = word.replace(words[i], "_");
                }
            }
        }
        if (word == "_".repeat(cnt)) answer++;
    })
    return answer;
}