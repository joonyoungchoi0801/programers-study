function solution(arr, queries) {
    var answer = arr;
    for (let l of queries){
        answer = swap(l[0],l[1],answer);
    }
    return answer;
}
function swap (a,b,arr){
    let x = arr[a];
    let y = arr[b];
    arr[a]=y;
    arr[b]=x;
    return arr;
}