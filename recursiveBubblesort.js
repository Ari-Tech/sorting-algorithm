
// recursive sort

const recursiveBubbleSort= (arr, n)=>{
    for(let i=0;i<n;i++){
        if(n===1){
            return arr;
        }
        for(let i=0;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }

        }
        return recursiveBubbleSort(arr, n-1);
    }
}

console.log(recursiveBubbleSort([4,8,1,3,9,2], 6));