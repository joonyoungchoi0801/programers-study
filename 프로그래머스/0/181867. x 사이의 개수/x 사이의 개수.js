function solution(myString) {
    var answer = [];
    var word = myString.split('x');
    answer = word.map(l=>l.length);
    
    return answer;
}