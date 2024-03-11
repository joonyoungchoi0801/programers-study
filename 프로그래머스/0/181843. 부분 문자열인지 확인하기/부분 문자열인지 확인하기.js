function solution(my_string, target) {
    var answer = 0;
    let len =target.length;
    for(let i =0;i<=my_string.length-len;i++){
        if(my_string.slice(i,i+len) === target){
            answer = 1;
        }
    }
    return answer;
}