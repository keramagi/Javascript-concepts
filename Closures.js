 /*closures are the combination of function and environment with which function are decalred
 and inner functions have access to all outer function variables and objects*/
 function outer(){
   var x=20;
   function inner(){
     var y=30;
     console.log(x+y);
     return;
   }
   return inner();
 }
 var a=outer();
console.log(a);
