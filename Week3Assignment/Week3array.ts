let intersection =(arr1:number[],arr2:number[]):number[]=>{

for(let i=0;i<arr1.length;i++){
    for(let j=0;j<=arr2.length;j++)
    {
        if (arr1[i]==arr2[j])
            {
              //console.log(arr1[i])
              //console.log(arr1[j])
              arr2.splice(j,1)
              //console.log(arr2)
            }
        
    }
}
let newarray=arr1.concat(arr2)
return newarray
}

console.log(intersection([1,2,3,4],[2,3,10,20]))