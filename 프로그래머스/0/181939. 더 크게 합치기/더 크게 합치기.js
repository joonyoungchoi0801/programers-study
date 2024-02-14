function solution(a, b) {
    var answer = 0;
    let num1 = a.toString()+b.toString();
    let num2 = b.toString()+a.toString();
    if(num1>num2){
        answer =num1;
    }
    else
        answer = num2;
    return Number(answer);
}