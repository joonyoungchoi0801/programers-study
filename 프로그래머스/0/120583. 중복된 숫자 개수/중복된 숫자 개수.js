function solution(array, n) {
    var answer = 0;
    let cnt=0;
    for(let i of array){
        if(i == n)
            cnt++;
    }
    answer=cnt;
    return answer;
}