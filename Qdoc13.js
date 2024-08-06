function call({value,callback}){
     
    return {
          getValue:()=>{
                return value;
          },
          runCallBack:()=>{
              return callback(value);
          }
           
            
          
    }

}


const get=call({
  value:43,
 callback: function(value){
   console.log("this value is"+value);
  }
}
);
get.runCallBack(33);