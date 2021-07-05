
// recursive sort

const recursiveBubbleSort= (arr, n)=>{
    for(let i=0;i<n;i++){
        if(n===1){
            return arr;
        }
        for(let j=0;j<n-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }

        }
        return recursiveBubbleSort(arr, n-1);
    }
}

console.log(recursiveBubbleSort([4,8,1,3,9,2], 6));