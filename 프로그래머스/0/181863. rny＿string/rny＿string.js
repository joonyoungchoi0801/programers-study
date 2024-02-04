function solution(rny_string) {
    var answer = '';
    for(let a of rny_string){
        if(a === 'm'){
            answer += 'rn';
        }
        else
            answer += a;
    }
    return answer;
}