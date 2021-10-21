function solution(board, moves) {
    let bucket = [];
    let answer = 0;
    moves.forEach(move => {
        for(let i = 0; i < board.length; i++){
            if(board[i][move-1]!==0){
                bucket.push(board[i][move-1]);
                board[i][move-1] = 0;
                break;
            }
        }
        if(bucket.length !==0 && bucket[bucket.length-1] === bucket[bucket.length-2]){
            bucket.splice(-2, 2);
            answer += 2;
        }
    })
    return answer;
}

solution([[0,0,0,0,0],[0,0,1,0,1],[0,2,5,0,1],[0,2,4,4,2],[0,5,1,3,1]], [1,1]);