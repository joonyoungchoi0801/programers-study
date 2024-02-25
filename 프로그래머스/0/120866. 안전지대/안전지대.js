function solution(board) {
    var answer = makearr(board);
    return answer;
}

function makearr(arr){
    let len = arr.length;
    let safe = 0;
    for(let i =0;i<len;i++){
        for(let j =0;j<len;j++){
            if(arr[i][j]==1){
            if (i - 1 >= 0 && arr[i - 1][j] == 0) arr[i - 1][j] = 2;
            if (i + 1 < len && arr[i + 1][j] == 0) arr[i + 1][j] = 2;
            if (j - 1 >= 0 && arr[i][j - 1] == 0) arr[i][j - 1] = 2;
            if (j + 1 < len && arr[i][j + 1] == 0) arr[i][j + 1] = 2;
            if (i - 1 >= 0 && j - 1 >= 0 && arr[i - 1][j - 1] == 0) arr[i - 1][j - 1] = 2;
            if (i - 1 >= 0 && j + 1 < len && arr[i - 1][j + 1] == 0) arr[i - 1][j + 1] = 2;
            if (i + 1 < len && j - 1 >= 0 && arr[i + 1][j - 1] == 0) arr[i + 1][j - 1] = 2;
            if (i + 1 < len && j + 1 < len && arr[i + 1][j + 1] == 0) arr[i + 1][j + 1] = 2;
            }
        }
    }
    for(let i =0;i<len;i++){
        for(let j =0;j<len;j++){
            if(arr[i][j]==0){
                safe++;
            }
        }
    }
    return safe;
}