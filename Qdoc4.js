// 4 Write a program that uses nested functions to demonstrate how scope chain works. Declare a variable in the outer function and try to access it from the inner function. Then, 
// declare a variable in the inner function and try to access it from the outer function. Explain your observations.



let b=20
function fun(){
   let a=10;
   function fun2(){
      let a=100
    function fun3(){
        let c=11
      console.log(a,b,c);
    }
   
      fun3()
   }
      fun2();
}
fun()

  Output:
  100 20 11

 //  In  this use the concept of Scope chain, means inner function can access the property of Outer function, when  in console we want to print the  a,b,c. First we  
 // search the a,b,and c in the fun3 in this only founded the c the using the concept ho  scope chain we going the parentscoping the we find the a after we gone next upper
 //  parents then find b then execute all a,b,c if not found the a,b,c then we going the  GCE. In global Execution Context we going deep down until not found null.
