function solution(num, total) {
    var answer = Array(num);
    let a = ~~(num/2);
    let q =  ~~(total/num);
    if(num%2===0){
        let start = q-a+1;
        for(let i =0;i<num;i++){
            answer[i]= start;
            start++;
        }
    }
    else{
        let start= q-a;
        for(let i =0;i<num;i++){
            answer[i]= start;
            start++;
        }
    }
    return answer;
}