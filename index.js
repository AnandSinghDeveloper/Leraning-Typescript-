"use strict";
{
    console.log("hello type");
    let Anand = "anand";
    console.log(Anand);
    let hi = 52;
    console.log(hi);
    console.log(this);
}
{
    let name = "Gautam";
    console.log(name);
}
console.log("hell i am anand ", typeof ("xczvcd"));
// let num=5;
// for(i=0;i<=num;i++){
//     console.log('hello');
// }
// number datatype 
let age = 19;
// array 
// . this is tuple type array 
// we are also celled tuple datatype 
// ager ham pahla element number aur dosra element string de to typerscript error thow karegi 
let array = ["ananan", 15];
// enums 
var ourTask;
(function (ourTask) {
    ourTask["task1"] = "go to home ";
    ourTask["task2"] = "play football";
})(ourTask || (ourTask = {}));
console.log(ourTask.task1);
// any 
// in case a any type ka hai jab ham koi type set nhi karte to to aoutometic hi any type ka ho jata hai ** caution kabhi bhi any ka use nhi karna hai 99% to nhi  
let a;
// unknown 
// unknow ke veriable ko use karne ke liye  pahle uska type cheak karna hoga then hi ham uska use kar sakte hain 
let value = "hello";
// Type narrowing
if (typeof value === "string") {
    value.toUpperCase(); // Now it's safe
}
// void 
// jab ham kuch return nhi karte hain to typescript me uska returntype void set karna hotas hai nhi to ts error thow karga 
let returnNumber = () => {
    console.log("i am void");
};
returnNumber();
// never 
// vo elemrnt jo kabhi kuch return nhi karge uska type never hota hai ager kisi variable ka type never set kar diya top aage ka code nhi chalega 
function understandNever() {
    while (true) { }
}
// understandNever()
console.log();
// study about 
// type inference
// type annotations
// # inference :- jab ham kisi variable ko uska type nhi defined karte hain aur typescript khod hi uska type pata lati hai to usse type inference kahte hain 
// ex = 
let inference = "pata lagao";
// annotations :- jab ham : lagake kisi variable ka type deside karte hain usse annotations kahte hain annotation ham function ke perametre me bhi kartr hain aur return type me bhi aur ham multiple annotation bhi klar sakte hain 
let annotations = true;
function getUser(obj) {
}
getUser({ name: "anand", age: 19, ismairred: false });
function getAdmin(object) {
    console.log(object.gender, object.ismairried, object.name);
}
getAdmin({ gender: "male", ismairried: true, name: "anand", age: 19 });
let naam = "anand";
let horror = true;
// classes 
class Music {
    constructor(name, singer, duration, paid) {
        this.name = name;
        this.singer = singer;
        this.duration = duration;
        this.paid = paid;
    }
}
let song1 = new Music("kallo", "ajay hudda", 2000, true);
song1.name = "matak matak";
console.log(song1);
// this keyword :- classes ke scope me kisi methorid ke ander kisi ke ander (jab tak vo us methorid ka part na ho ) kisi value ya kisi dusre methorid ko call ya accesses karne ke liye this ka use hota hai 
class bottelmeker {
    constructor(naam1) {
    }
}
let b1 = new bottelmeker("milton");
console.log(b1);
// public ,private and protected:-
// :- jab ham classes public access modifiers banate hain to vo clesses methorids and subclesses and cless scope ke bhar bhi this ka use karke accessible  hoti hain || per jab ham usse protected access modifiers me banate hain to vo keval cless ke scope and subclasses me hi accessible hoti hain  // but private access modifiers me only clesses ke scope me hi accessiblr hain 
class human {
    constructor(name) {
        this.name = name;
    }
    getname() {
        this.name = "king anand";
    }
}
let h1 = new human("Anand");
console.log(h1);
h1.getname();
// readonly :- jab kisi classes ki value ko static rakhna chhate hain to usske aage readonly lagake us change hone se rok sakte hain 
// ex= 
class boys {
    constructor(power) {
        this.power = power;
    }
}
let boy1 = new boys(true);
console.log(boy1);
// getter and setter in ts :- 
class male {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get getname() {
        return this.name;
    }
    set setage(v) {
        this.age = v;
    }
}
let male1 = new male("Anand", 19);
console.log(male1);
male1.setage = 19.5;
console.log(male1);
// static :-  jab ham kisi class me bina new ko chalye koi value set kar ho to ham use value ke aage static lage ye kar sakte hain 
class Girl {
    static getRandomNumber() {
        return Math.random();
    }
}
console.log(Girl.getRandomNumber());
// abstract class :- 
class CookingEssentials {
    constructor(gas, gassname) {
        this.gas = gas;
        this.gassname = gassname;
    }
}
class Sabji extends CookingEssentials {
}
// optional and defult parametre in fuction
let issan = (name, cb) => {
    cb(19);
};
issan("Anand", (age) => {
    console.log(issan);
});
// it is optional function parametre
let aadmi = (name, age, gender) => {
    console.log(name, age, gender);
};
aadmi('anand', 19, "male");
aadmi('ladbataq', 18);
// it is defult function parametre
function ladki(name, age, gender = "bata nhi rha hai matlab😒") {
    console.log(name, gender, age);
}
ladki("tuyen", 30, "female");
ladki('lagbatak', 18);
// rest and spread opreter 
// rest :- jab funtion ke  parametre me ager ... lagaya to aap waha pe diye gaye sar arguments ko ek hi variable me as a array rakh sakte ho 
let friends = (...friend) => {
    console.log(friend);
};
friends("anand ", "bakshi ", "jatin", "saurbh", "monjot", "tuyen", "bhavisya");
// spread :- jab hame kisi array ya object ko copy karna ho to function ke argument me spread ka use karke kar sakte hain 
let chai = ["tata", "taza"];
let chai2 = [...chai];
console.log(chai2);
function abcd(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("hey");
    }
    if (typeof a === "string" && b === Number) {
        return 123;
    }
    else
        throw new Error("kuch to gadbad hai daya");
}
abcd("hey");
abcd("hey", 25);
