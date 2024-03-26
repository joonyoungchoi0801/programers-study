function solution(arr, intervals) {
    var answer = [];
    let a1 = intervals[0][0];
    let a2 = intervals[1][0];
    let b1 = intervals[0][1];
    let b2 = intervals[1][1];
    
    let a = arr.slice(a1,b1+1);
    let b = arr.slice(a2,b2+1);
    let c = a.concat(b);
    for(let d of c){
        console.log(d);
        answer.push(Number(d));
    }
    return answer;
}