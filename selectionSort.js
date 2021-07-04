
const selectionSort= (ar)=>{


    for(let i=0;i<ar.length;i++){
        let pos = i;
        for(j=i+1;j<ar.length;j++){
            if(ar[j]<ar[pos]){ // this has to be pos not i. For every iteration we keep finding the lowest
                pos=j;
            }
        }
        const temp = ar[i];
        ar[i]= ar[pos];
        ar[pos]=temp;
    }
    return ar;
}

console.log(selectionSort([2,6,1,0,0,7]));
console.log(selectionSort([2,3,4,5]));
console.log(selectionSort([-2,-17,-1,89,-56]));
console.log(selectionSort([0,1,0,3,0,7]));
var arr=[];
for(let i=1;i<100000;i++){
arr.push(Math.random())
}
console.log(selectionSort(arr));
console.log("Done");
