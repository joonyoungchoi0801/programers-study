function solution(hp) {
    var answer = 0;
    answer+=Math.floor(hp/5);
    let remain1=hp%5;
    answer+=Math.floor(remain1/3);
    let remain2=remain1%3;
    answer+=remain2;
    return answer;
}