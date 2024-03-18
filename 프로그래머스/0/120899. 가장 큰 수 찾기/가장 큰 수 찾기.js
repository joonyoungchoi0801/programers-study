function solution(array) {
    var answer = [];
    let max = 0;
    for(let i in array){
        if(array[i]>max){
            max = array[i];
            answer[0] = array[i];
            answer[1] = Number(i);
        }
    }
    return answer;
}