function strprint(str){
     
     return function count(x){

             while(x!==0){
              console.log(str);
              x--;
             }
            
     }
}

const printer=strprint("hello");
 printer(3);