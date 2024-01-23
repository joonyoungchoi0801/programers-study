function solution(num_list) {
    var answer = [];
    let len = num_list.length
    for(let i =0;i<len;i++){
        answer[i]=num_list[len-i-1]
    }
    
    return answer;
}