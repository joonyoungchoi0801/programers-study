function solution(numbers, direction) {

    let len = numbers.length
    if(direction === 'right'){
        let last = numbers[len-1];
        numbers.pop();
        numbers.unshift(last);
    }
    else{
        let first = numbers[0];
        numbers.shift();
        numbers.push(first);
    }
    return numbers;
}