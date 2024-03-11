function solution(myString) {
    var answer = '';
    for (let str of myString){
        if(str === 'a' || str === 'A'){
            answer += 'A';
        }
        else if (str === str.toUpperCase()){
            answer+=str.toLowerCase();
        }
        else{
            answer+=str;
        }
    }
    return answer;
}