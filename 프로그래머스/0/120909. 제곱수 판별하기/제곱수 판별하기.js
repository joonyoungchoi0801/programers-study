function solution(n) {
    let num = Math.sqrt(n);
    var answer = Number.isInteger(num) ? 1 : 2;
    return answer;
}