function solution(numer1, denom1, numer2, denom2) {
    let up = numer1*denom2 + numer2*denom1;
    let down = denom1*denom2;
    let common = gcd(up,down);
    let upans = up/common;
    let downans=down/common;
    var answer = [];
    answer.push(upans);
    answer.push(downans);
    return answer;
}
function gcd(num1,num2){
    if(num2==0)
        return num1;
    else 
        return gcd(num2, num1%num2);
}