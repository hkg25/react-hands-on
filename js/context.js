"use strict";


//var name="abc";

function getName(){
    return this.name;
}

//console.log(getName());

global.name="Global Product";

//console.log(getName());

let product = {
    name:"Product1",
    get:getName
}

console.log(product.get());

console.log("-----------------apply------------------");

console.log(getName.apply({name:"Harish"}));

//console.log(getName.apply(null));// this refers to global context

console.log("----------------call-------------------");

console.log(getName.call({name:"Deepak"}));


setInterval(function(){
    console.log("timer");
    console.log(this);
    console.log(getName());
},2000);