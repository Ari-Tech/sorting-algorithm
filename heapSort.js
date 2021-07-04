// first create map heap

const heapify = (ar, n, index)=>{
let largest = index;
let left = (2*index)+1;
let right = (2*index)+2;
if(left<n && ar[left]>ar[largest]){
    largest = left;
}
if(right<n && ar[right]>ar[largest]){
    right = largest;
}
if(largest !== index){
    let temp = ar[index];
    ar[index] = ar[largest];
    ar[largest] = temp;
    heapify(ar, n , largest);
}

}
const heapSort= (ar, n)=>{
    for(let i=0;i<Math.floor(n/2);i++){
        heapify(ar, n,i);
    } 
    console.log(ar) // this is max heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        let temp = ar[0];
        ar[0] = ar[i];
        ar[i] = temp;

        // call max heapify on the reduced heap
        heapify(ar, i, 0);
    }
    console.log(ar)
}

console.log(heapSort([7,4,1,6,2],5));