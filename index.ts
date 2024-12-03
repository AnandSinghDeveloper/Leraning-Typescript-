{



    console.log("hello type")

let Anand:string="anand";
console.log(Anand);
let hi:number= 52;
console.log(hi);
console.log(this);

}

{
    let name:string="Gautam"
    console.log(name);
    
}


console.log("hell i am anand ", typeof("xczvcd"))


// let num=5;

// for(i=0;i<=num;i++){
//     console.log('hello');

    

// }


// number datatype 

let age : number = 19;

// array 

// . this is tuple type array 
// we are also celled tuple datatype 

// ager ham pahla element number aur dosra element string de to typerscript error thow karegi 

let array : [string , number] = ["ananan" , 15];

// enums 

enum ourTask{
    task1= "go to home ",
    task2 = "play football"

    }
    
    console.log(ourTask.task1);
    
// any 
// in case a any type ka hai jab ham koi type set nhi karte to to aoutometic hi any type ka ho jata hai ** caution kabhi bhi any ka use nhi karna hai 99% to nhi  

let a;

// unknown 
// unknow ke veriable ko use karne ke liye  pahle uska type cheak karna hoga then hi ham uska use kar sakte hain 

let value: unknown = "hello";

// Type narrowing
if (typeof value === "string") {
  value.toUpperCase();  // Now it's safe
}

// void 
// jab ham kuch return nhi karte hain to typescript me uska returntype void set karna hotas hai nhi to ts error thow karga 
let returnNumber =() : void =>{

    console.log("i am void");
    
}

returnNumber();


// never 
// vo elemrnt jo kabhi kuch return nhi karge uska type never hota hai ager kisi variable ka type never set kar diya top aage ka code nhi chalega 

function understandNever ():never{
      while(true){}
}
// understandNever()

console.log();


// study about 
// type inference
// type annotations


// # inference :- jab ham kisi variable ko uska type nhi defined karte hain aur typescript khod hi uska type pata lati hai to usse type inference kahte hain 
// ex = 

let inference = "pata lagao"

// annotations :- jab ham : lagake kisi variable ka type deside karte hain usse annotations kahte hain annotation ham function ke perametre me bhi kartr hain aur return type me bhi aur ham multiple annotation bhi klar sakte hain 

let annotations : boolean | string= true ;  














 