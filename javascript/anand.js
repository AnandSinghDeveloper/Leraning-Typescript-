// console.log(0.1+0.2===0.3);




// (function(){
//   var a = b = 5
// })();
// console.log(b);



// function data(){
//   let secret = "i am anand "
//   return function(){
//     return secret;
//   }
// }
// let sd = data()
// console.log(sd());


// var arr = [2,3,4]
// arr[100] = 5;
// console.log(arr.length);


// console.log(1<2<3);

// console.log(3>2>1);

// # prototype inheritance 

var  human ={
  cantalk  :true,
  canwolk :true,
  canfly : false
}

var Anand = {
  canmakewebsite :true,
  canyoga : true
}

Anand.__proto__ =human;


