
function printNumber(n:number):void{
   let sum:number=0;
   for(let i:number=0;i<n;i++){
      if(i%2===0) {
         sum+=sum;
         console.log(sum);
      }  
   }
}
printNumber(10);