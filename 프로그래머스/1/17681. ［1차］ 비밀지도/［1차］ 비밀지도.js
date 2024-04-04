function solution(n, arr1, arr2) {
    var answer =  Array.from(Array(n), () => Array(n).fill(' '));
    let ans = [];
    let array1 = [];
    let array2 = [];
    for(let num of arr1){
        let x = '';
        let binary = num.toString(2).split('');
        const short = n-binary.length;
        for(let i =1;i<=short;i++){
            binary.unshift('0');
        }
        array1.push(binary);
    }
    for(let num of arr2){
        let x = '';
        let binary = num.toString(2).split('');
        const short = n-binary.length;
        for(let i =1;i<=short;i++){
            binary.unshift('0');
        }
       array2.push(binary);
    }
    for(let i =0;i<n;i++){
        for(let j = 0 ;j<n;j++){
            if(array1[i][j]=='1'|| array2[i][j]=='1'){
                answer[i][j]='#';
            }
            else{
                answer[i][j]=' ';
            }
        }
    }
    for(let a of answer){
       ans.push(a.join(''))
    }

    return ans;
}