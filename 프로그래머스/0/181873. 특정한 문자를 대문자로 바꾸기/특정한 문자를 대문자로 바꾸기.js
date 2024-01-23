function solution(my_string, alp) {
    var answer = '';
    for(let a of my_string){
        if(a == alp){
            answer+= a.toUpperCase();
        }
        else{
            answer += a;
        }
    }

    return answer;
}