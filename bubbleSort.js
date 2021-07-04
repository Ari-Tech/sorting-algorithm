const bubbleSort = (ar)=>{
    for(let i=0;i<ar.length-1;i++){
        for(let j=0;j<ar.length-i-1;j++){
            if(ar[j]> ar[j+1]){
                let temp = ar[j];
                ar[j]=ar[j+1];
                ar[j+1]=temp;
            }
        }
    }
    return ar;
}
console.log(bubbleSort([3,6,2,8,3]))
console.log(bubbleSort([7,6,3,1,-20]))
console.log(bubbleSort([]))
console.log(bubbleSort([5]))
console.log(bubbleSort([-20]))
console.log(bubbleSort([-10,-20]))