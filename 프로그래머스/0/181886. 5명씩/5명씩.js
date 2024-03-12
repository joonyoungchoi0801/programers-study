function solution(names) {
    var answer = [];
    for(let c = 0;c<names.length;c+=5){
        answer.push(names[c])
    }
    
    return answer;
}