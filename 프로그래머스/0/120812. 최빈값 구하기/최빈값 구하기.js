function solution(array) {
    let arr = new Array(Math.max.apply(null,array)+1).fill(0);

    for(let i =0;i<array.length;i++){
        arr[array[i]]++;
    }
    console.log(arr);
    let max = Math.max.apply(null,arr);
    let multi = 0;
    let maxans = 0;
    for(let i =0;i<arr.length;i++){
        if(max == arr[i]){
            multi++;
            maxans=i;
        }
    }
    let answer = (multi>=2) ? -1:maxans
    return answer;
}