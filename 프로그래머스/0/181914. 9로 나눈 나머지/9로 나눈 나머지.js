function solution(number) {
    var answer = 0;
    let numbers = number.split('');
    let sum = numbers.reduce((acc,crr)=>{
        return Number(acc)+Number(crr)    
    })
    return sum%9;
}