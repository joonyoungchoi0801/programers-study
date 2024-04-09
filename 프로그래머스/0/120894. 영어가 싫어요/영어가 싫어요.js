let numberobj = {
    'zero' : 0,
    'one' :1,
    'two':2,
    'three':3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8,
    'nine':9
}
function solution(numbers) {
    var answer = numbers;

    for(let i in numberobj){
        let a =  answer.split(i);
        answer = a.join(numberobj[i]);
    }
    
    return ++answer -1;
}