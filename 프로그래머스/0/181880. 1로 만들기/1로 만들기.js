function solution(num_list) {
    var answer = 0;
    for(let num of num_list){
        answer+= cntnum(num);
    }
    return answer;
}
function cntnum(num){
    let cnt = 0;
    while(1){
        if(num===1) break;
        num = Math.floor(num/2);
        cnt++;
    }
    return cnt;
}