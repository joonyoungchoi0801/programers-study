function solution(a, d, included) {
    var answer = 0;
    let arr = [];
    for(let i in included){
        if(included[i]===true){
            arr.push(++i);
        }
    }
  
    
    let sum = arr.reduce((acc,crr)=>{
        return acc+crr;
    })
    let len = arr.length;
    console.log(len);
    console.log( sum);
    return a * len + d*(sum-len);
}