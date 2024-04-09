function solution(date1, date2) {
    var answer = 0;
    let a = parseInt(date1.join(''));
    let b = parseInt(date2.join(''));
    answer = a<b ? 1 : 0;
    return answer;
}