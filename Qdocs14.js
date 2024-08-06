function arrReverse(arr){
     return function reverse(){
         let arr2=arr.reverse();
          return arr2;

     }

    
}
const arr=['name','age','class'];
    const  rev=arrReverse(arr);
    console.log(rev());
