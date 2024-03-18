function solution(n_str) {
    var answer = '';
    let a = 0;
    
    for(let i in n_str){
        if(n_str[i]==0){
            // console.log(i);
            a = Number(i)+1;
        }
        else{
            break;
        }
    }
    console.log(a);
    for(a;a<n_str.length;a++){
        answer+=n_str[a];
    }
    return answer;
}