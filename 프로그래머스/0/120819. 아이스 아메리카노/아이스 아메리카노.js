function solution(money) {
    var answer = [];
    let ice = 5500;
    let coffee = ~~(money/ice);
    let rest = money - ice*coffee;
    answer.push(coffee);
    answer.push(rest);
    return answer;
}