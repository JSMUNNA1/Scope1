function multiplyBy(x){

      function times(y){
        
          return x*y;
      }
    return  times;
}

const times=multiplyBy(3);
console.log(times(5));
