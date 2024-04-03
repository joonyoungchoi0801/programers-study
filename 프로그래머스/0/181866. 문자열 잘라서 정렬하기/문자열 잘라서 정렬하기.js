function solution(myString) {
    var answer = myString.split('x');
    answer.sort();
    let ans = answer.filter((i)=> i !== '')
    
    return ans;
}