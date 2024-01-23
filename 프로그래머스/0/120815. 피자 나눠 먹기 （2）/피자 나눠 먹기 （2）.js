function solution(n) {
    var answer = 0;
    let gcdn = gcd(n,6);
    answer = n / gcdn;
    return answer;
}
function gcd (a,b){
    if(b==0){
        return a;
    }
    else{
        return gcd(b, a%b);
    }
    
}