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