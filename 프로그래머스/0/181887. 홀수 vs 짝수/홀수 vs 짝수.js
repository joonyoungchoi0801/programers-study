function solution(num_list) {
    var answer = 0;
    let even = num_list.reduce((acc,curr,i)=>{
        if(i%2==0){
            return acc+curr;
        }
        return acc;
    },0)
    let odd = num_list.reduce((acc,curr,i)=>{
        if(i%2!=0){
            return acc+curr;
        }
        return acc;
    },0)
    
    return even>=odd ? even: odd;
}