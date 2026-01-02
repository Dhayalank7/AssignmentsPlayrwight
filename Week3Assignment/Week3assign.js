let results=[]
let nums1=[2, 4, 7, 8, 11, 14]; 
const target = 18;

for (let i=0;i<nums1.length;i++ )
{
    for (let j=i+1;j<nums1.length;j++)
    {
        
        if(nums1[i]+nums1[j]===target)
        {
            
            console.log(("("+i+","+j+")"))
        }
    }
}

