function solution(my_string, indices) {
    var answer = '';
    let a = my_string.split('');
    for (let i of indices){
        a[i]= ' ';
    }
    console.log(a);
    answer = a.join('').split(' ').join('');
    return answer;
}