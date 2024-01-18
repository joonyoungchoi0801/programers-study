function solution(n, k) {
    let s =12000;
    let d = 2000;
    let service = Math.floor(n/10);
    let ans = n*s+(k-service)*d;
    return ans;
}