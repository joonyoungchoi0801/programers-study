function solution(number, n, m) {
    var answer = 1;
    if(number%n !== 0)
        answer = 0;
    else if(number%m !== 0)
        answer = 0;
    return answer;
}