function solution(str1, str2) {
    var answer = 0;
    for(let i =0;i<str2.length-str1.length+1;i++){
        let word = str2.slice(i,i+str1.length);
        if(word === str1)
            answer=1;
    }
    return answer;
}