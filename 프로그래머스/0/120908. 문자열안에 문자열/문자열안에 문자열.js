function solution(str1, str2) {
    var answer = 2;
    let len = str2.length;
    for(let i =0;i<=str1.length-len;i++){
        if(str1.slice(i,i+len)==str2){
            answer=1;
        }
    }
    return answer;
}