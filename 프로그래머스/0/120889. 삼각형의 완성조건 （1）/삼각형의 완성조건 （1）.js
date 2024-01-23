function solution(sides) {
    var answer = 0;
    sides.sort(function(a,b){
        return a-b;
    })
    let a = sides[2];
    let b = sides[0]+sides[1];
    answer = a>=b ? 2:1;
    return answer;
}