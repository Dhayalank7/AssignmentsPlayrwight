var nums = [2,4,5,2,1,2]

let count=0
let countnumber=(k)=>{
for (let i=0;i<=nums.length;i++)
{
    if(nums[i]===k)
    {
        count=count+1
    }
}
return count
}
console.log(countnumber(2))