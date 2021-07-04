// Divide and conquer

const mergeSort = (unsortedArray)=>{
    // This is mandatory to avoid infinite loop
    if(unsortedArray.length <2){
        return unsortedArray;
    }
    const mid = Math.floor(unsortedArray.length/2);
    const leftArray = unsortedArray.slice(0, mid);
    const rightArray = unsortedArray.slice(mid);
    return _mergeOperation(mergeSort(leftArray), mergeSort(rightArray)); // dont forget the recursion here for leftArray and rightArray
}



 // underscore here means do no call the function directly.
const _mergeOperation = (leftArray, rightArray)=>{
    //here we merge both array making sure they are sorted
    let leftIndex=0, rightIndex=0;
    const finalMergedArray=[];
    while(leftIndex<leftArray.length && rightIndex< rightArray.length){
        if(leftArray[leftIndex]<rightArray[rightIndex]){
            finalMergedArray.push(leftArray[leftIndex])
            leftIndex++;
        } else{
            finalMergedArray.push(rightArray[rightIndex])
            rightIndex++;
        }

    }
    // one of the array is still not fully exhausted
    return finalMergedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

console.log(mergeSort([1,8,2,4,0,5]));
console.log(mergeSort([0,1,0]));
console.log(mergeSort([-3,-50,0,27,-77]));
console.log(mergeSort([-3,0,27,-77]));
