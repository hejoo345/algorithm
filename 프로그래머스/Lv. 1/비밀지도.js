function solution(n, arr1, arr2) {
  const result = arr1
  .map((num, i) => num|arr2[i])
  .map(num => num.toString(2).padStart(n, '0'))
  .map(bin => bin.replace(/1/g, '#').replace(/0/g, ' '))
  return result;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);