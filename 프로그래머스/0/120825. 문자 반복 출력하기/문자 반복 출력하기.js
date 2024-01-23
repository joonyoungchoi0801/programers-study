function solution(my_string, n) {
    var answer = '';
    for(let a of my_string ){
        for(let i =1;i<=n;i++){
            answer+=a;
        }
    }
    return answer;
}