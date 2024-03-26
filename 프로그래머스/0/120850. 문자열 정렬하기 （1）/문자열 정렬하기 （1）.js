function solution(my_string) {
    var answer = [];
    for(let str of my_string){
        if(!isNaN(str)){
            answer.push(++str -1);
        }
    }
    answer.sort((a,b)=>a-b)
    return answer;
}