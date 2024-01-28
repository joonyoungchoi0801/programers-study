function solution(n) {
    var answer = 0;
    for(let num of n.toString()){
        answer +=Number(num);
    }
    return answer;
}