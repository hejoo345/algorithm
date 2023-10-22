function solution(encrypted_text, key, rotation) {
    // 회전
    const len = key.length;
    const rot = rotation > 0 ? rotation % len : len - (Math.abs(rotation) % len);
    const str = encrypted_text.slice(0, rot);
    let arr = (encrypted_text.slice(rot) + str).split('');

    // 암호화
    const answer = arr.map((_, i) => {
        let num = arr.join('').charCodeAt(i) - key.charCodeAt(i) + 96;
        if(num < 97) num += 26;
        return String.fromCharCode(num);
    })
    return answer.join('');
}

solution('qyyigoptvfb', 'abcdefghijk', 3);
