function fun(arr){
   let i=0;
   let n=arr.length;

   function y() {
       if(i<n){
         
       
        let val= arr[i];
        i++;
        return val;
       }
       else
       
       return "now not object in arr";
       
   }


   return y;
   
}

let arr=["raju",'shyam','gokul','ssss'];
const next=fun(arr);
    console.log(next());
    console.log(next());
    console.log(next());
    console.log(next());
    console.log(next());
    
