function couter(){
   let count =0;
      
    function y(){
      console.log(count++);
      
    }

    return y;
}

const increment=couter();
  increment();
  increment();
  increment();
  increment();
  increment();