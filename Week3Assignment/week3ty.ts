let factorial = (a:number):number|String|undefined=>{
    let k:number=1
    if(a<0)
    {
       return("The number is negative")
    }
    else{
       for(let i=2;i<=a;i++)
       {
        k=k*i;

       }
       return(k)

    }
}
console.log(factorial(3))
console.log(factorial(9))
console.log(factorial(-3))