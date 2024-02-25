function solution(strArr) {
    var answer = [];
    for(let i in strArr){
        if(i%2==1){
            strArr[i]=strArr[i].toUpperCase();
        }
        else{
             strArr[i]=strArr[i].toLowerCase();
        }
    }
    return strArr;
}