/*
Every JavaScript object has an internal link to another object called its prototype. This prototype object contains shared properties and methods that can be used by all instances of that object.

Key Terms
Prototype: An object from which other objects inherit properties.
__proto__: A reference to the prototype object.
prototype: A property on constructor functions that is used to set the __proto__ of objects created using new.

*/

function Person(name) {
    this.name = name;
    // greet: function(){
    //     console.log("Hello i am " + this.name);
    // }
};

Person.prototype.greet = function (){
    console.log("Hello My name is " + this.name);
}

// Manually created object
// const john = {
//     name: "john"
// };

// john.__proto__ = person; // Link john to person as its prototype
// john.greet();


const john = new Person("John");
john.greet();


class Person1{
    constructor(name){
        this.name = name
    }
    greet(){
        console.log("Hello I am " + this.name);
    }
}

class Developer extends Person1 {
    constructor(name, skills){
        super(name);
        this.skills = skills;
    }
    code(){
        console.log(this.name + " is coding in " + this.skills);
    }
}

const amit = new Developer("Amit", "Javascript")
amit.greet();
amit.code();