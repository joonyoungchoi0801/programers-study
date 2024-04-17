function solution(arr) {
    var answer = [];
    let len = arr.length;
    if(powertwo.includes(len)) return arr;
    else{
        let x = poweroftwo(len)+1;
        let y = 2**x;
        let array = Array(y-len).fill(0);
        let ans = arr.concat(array);
        return ans;
    }

}
const powertwo = [1,2,4,8,16,32,64,128,256,512,1024];
function poweroftwo(num){
    let cnt = 0;
    while(1){
        if(num===1) break;
        num = Math.floor(num/2);
        cnt++;
    }
    return cnt;
}