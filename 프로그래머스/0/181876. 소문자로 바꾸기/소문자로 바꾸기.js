function solution(myString) {
    var answer = '';
    for (let a of myString){
        if(a === a.toUpperCase()){
            answer+= a.toLowerCase();
        }
        else
            answer+=a;
    }
    return answer;
}