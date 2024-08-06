//Create a function named printX() that logs the value of x to the console.
let x=10;
function printX(){
  console.log(x);
  
}

{
  
  let y=20;
  printX();
  console.log(y);
  console.log(x);
}
console.log(y);//give the Error because y is block-scope

