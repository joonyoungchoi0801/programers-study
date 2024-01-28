function solution(babbling) {
    var answer = 0;
    let a ='aya';
    let b = 'ye';
    let c = 'woo';
    let d = 'ma';
    for (let word of babbling){
        for(let i = 1 ; i<=5;i++){
            console.log(word);
            if(a === word.slice(0,3)){
                word = word.slice(3);   
            }
            else if(b === word.slice(0,2)){
                word = word.slice(2);
            }
            else if(c === word.slice(0,3)){
                word = word.slice(3);
            }
            else if(d === word.slice(0,2)){
                word = word.slice(2);
            }
            else if(word.length === 0){
                answer++;
                break;
            }
            else{
                break;
            }
        }
    }
    
    
    return answer;
}