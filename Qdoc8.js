function fun(){
   
   
  const obj={
       setValue(x){
         this.x=x;
       },
       getValue(){
        return this.x;
       }
   }
   return obj;
}

const obj=fun();
obj.setValue(10);
console.log(obj.getValue());
