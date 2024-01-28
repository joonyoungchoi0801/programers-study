function solution(n) {
    var answer = [];
    for (let row = 0; row < n; row++) {
        answer.push(new Array(n).fill(1));
    }

    let i = 0;
    let j = 0;
    let k = 1;
    let len1 = n-1;
    let cnt = 0;
    while(len1>=-1){
        
        for(let len = len1;len > 0;len--){
            answer[i][j] = k;
            j++;
            k++;
        }
        for(let len = len1;len > 0;len--){
            answer[i][j] = k;
            i++;
            k++;
        }
        for(let len = len1;len > 0;len--){
            answer[i][j] =k;
            j--;
            k++;
        }
        for(let len = len1;len > 0;len--){
            answer[i][j] =k;
            i--;
            k++;
        }
        if (i === j){
            i++;
            j++;
            
        }
        len1 -=2;
        if(len1 == 0){
            answer[(n-1)/2][(n-1)/2] = n*n;
            break;
        }
    }
    console.log(answer)
    return answer;
}