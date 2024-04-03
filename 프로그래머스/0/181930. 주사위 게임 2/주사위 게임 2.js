function solution(a, b, c) {
    var answer = 0;
    let arr =[];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    arr.sort((a,b)=>{
        return b-a;
    })
    let arr2 = new Array(7).fill(0);
    arr.forEach((i)=>{
        arr2[i]++;
    })
    for(let i in arr2){
        if(arr2[i]===3){
            answer = (i*3) * (Math.pow(i,2)*3)*(Math.pow(i,3)*3);
            break;
        }
        if(arr2[i]===2){
            answer = (a+b+c)*(a**2+b**2+c**2);
            break;
        }
        else{
            answer = (a+b+c);
        }
    }

    return answer;
}