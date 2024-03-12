function solution(myString, pat) {
    var answer = 0;
    let patc = '';
    let len = pat.length;
    for(let a of pat){
        if(a==='A'){
            patc+='B';
        }
        else{
            patc+='A';
        }
    }
    for(let i = 0 ;i<=myString.length-len;i++){
        if(myString.slice(i,i+len)===patc){
            answer = 1;
        }
    }
    return answer;
}