function solution(sizes) {
    const sorted = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    let minW = 0;
    let minH = 0;
    sorted.forEach(([w, h]) => {
        minW = w > minW ? w : minW;
        minH = h > minH ? h : minH;    
    })
    return minW * minH;
}