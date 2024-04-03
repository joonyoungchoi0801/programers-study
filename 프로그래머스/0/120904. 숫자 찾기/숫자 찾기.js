function solution(num, k) {
    let ans =String(num).indexOf(String(k));
    if(ans == -1){
        return ans;
    }
    else{
        return ans+1;
    }
}