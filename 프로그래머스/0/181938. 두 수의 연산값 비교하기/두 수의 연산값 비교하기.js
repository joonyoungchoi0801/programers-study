function solution(a, b) {
    var answer = 0;
    let ans1 = Number(a.toString()+b.toString());
    let ans2 = 2 * a *b;
    answer = ans1>=ans2 ? ans1: ans2
    return answer;
}