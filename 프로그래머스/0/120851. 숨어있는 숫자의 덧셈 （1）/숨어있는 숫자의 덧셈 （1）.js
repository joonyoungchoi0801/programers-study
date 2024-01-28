function solution(my_string) {
    var answer = 0;
    for (let a of my_string){
        if(!isNaN(a)){
            answer += Number(a);
        }
    }
    return answer;
}