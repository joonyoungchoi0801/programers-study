function solution(myString) {
    var answer = '';
    for(let w of myString){
        if(w =='a'|| w=='b'|| w=='c'|| w == 'd'|| w =='e'|| w=='f'||w=='g'|| w=='h'||w=='i'||w=='j'||w=='k'){
            answer+='l';
        }
        else{
            answer+=w;
        }
    }
    return answer;
}