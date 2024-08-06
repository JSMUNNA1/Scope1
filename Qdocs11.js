function sumArrays(arr){
      let start=0;
      let end =arr.length;
      let sum=0;

      return {
          next(){
             if(start<end){
               sum+=arr[start];
               start++;
               return {done:false}
             }else{
               return  {done:true,value:sum};
                
             }
          }
      }
}
  const arr=[1,2,3,4,5]
let add=sumArrays(arr);
let addSum=add.next();
        while(!addSum.done){
            addSum=add.next();
        }
        console.log(addSum.value);
