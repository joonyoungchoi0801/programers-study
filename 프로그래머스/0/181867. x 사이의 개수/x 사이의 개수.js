function solution(myString) {
    var answer = [];
    var word = myString.split('x');
    for(let l of word){
        answer.push(l.length);
    }
    return answer;
}