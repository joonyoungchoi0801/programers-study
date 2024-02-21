function solution(myString, pat) {
    var answer = 0;
    let len = pat.length;
    for(let i = 0;i<=myString.length-len;i++){
        let word1 =myString.slice(i,i+len).toLowerCase();
        let word2 = pat.toLowerCase();
        if(word1==word2){
            answer=1;
        }
    }
    return answer;
}