function solution(numlist, n) {
    var answer = [];
    // let arr = numlist.map((i)=>Math.abs(i-n))
    numlist.sort((a,b)=>{
        let x = Math.abs(a-n);
        let y = Math.abs(b-n);
        if(x==y){
            return b-a;
        }
        return x-y;
    })
    return numlist;
}