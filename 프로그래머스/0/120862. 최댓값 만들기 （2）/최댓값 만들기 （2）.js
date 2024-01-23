function solution(numbers) {
    var answer = 0;
    numbers.sort(function(a,b){
        return b-a;
    })
    let len = numbers.length;
    let max1 = numbers[0]*numbers[1];
    let max2 = numbers[len-1]*numbers[len-2];
    answer = (max1>max2) ? max1 : max2
    return answer;
}