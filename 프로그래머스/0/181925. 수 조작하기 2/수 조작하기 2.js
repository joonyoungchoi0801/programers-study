function solution(numLog) {
    var answer = '';
    for(let i in numLog){
        let str = numLog[Number(i)+1]-numLog[Number(i)];
        if(str === 1){
            answer+='w'
        }
        else if(str === -1){
            answer+='s'
        }
        else if(str === 10){
            answer+='d'
        }
        else if(str === -10){
            answer+='a'
        }
    }
    return answer;
}