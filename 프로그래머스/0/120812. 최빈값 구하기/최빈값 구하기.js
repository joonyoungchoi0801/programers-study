function solution(array) {
    let arr = new Array(Math.max.apply(null,array)+1).fill(0);

    for(let i =0;i<array.length;i++){
        arr[array[i]]++;
    }
    console.log(arr);
    let max = 0;
    let multi = false;
    let maxans = 0;
    for(let i =0;i<arr.length;i++){
        if(max == arr[i]){
            multi=true;
        }
        if(max<arr[i]){
            max =arr[i];
            multi =false;
            maxans=i;
        }
        
    }
    let answer = multi ? -1:maxans
    return answer;
}