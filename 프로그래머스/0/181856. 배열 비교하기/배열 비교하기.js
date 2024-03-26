function solution(arr1, arr2) {
    var answer = 0;
    let len1 =arr1.length;
    let len2 = arr2.length;
    if(len1===len2){
        let sum1 =arr1.reduce((acc,crr)=>{
            return acc+crr;
        })
        let sum2 =arr2.reduce((acc,crr)=>{
            return acc+crr;
        })
        if(sum1 === sum2){
            answer= 0;
        }
        else if(sum1>sum2)
            answer = 1;
        else
            answer = -1;
    }
    else if(len1>len2){
        answer=1;
    }
    else{
        answer=-1;
    }
    return answer;
}