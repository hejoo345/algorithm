function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let answer = 0;
    babbling.forEach(word => {
        for (let i = 0; i < 4; i++) {
            while(word.includes(words[i])) {
                // 연속해서 같은 발음을 하는지 확인
                const idx = word.indexOf(words[i]);
                const ck = word.slice(idx + words[i].length, idx + (words[i].length * 2));
                if (words[i] == ck) break;
                else {
                    word = word.replace(words[i], " ");
                }
            }
        }
        if (word.replaceAll(" ","") == "") answer++;
    })
    return answer;
}