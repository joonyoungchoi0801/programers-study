function solution(num1, num2) {
    var answer = +(num1/num2).toFixed(4)*1000;
    return Math.floor(answer);
}