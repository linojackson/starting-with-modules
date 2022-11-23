import importGreet from "./greet.js";

importGreet();

import { x } from "./variables.js"

console.log(x);

import { a, b, myFunction } from "./someImports";

console.log(a)
console.log(b)

myFunction()

import { someName as name } from "./changeName";

console.log(name)

import * as myNumbers from "./numbers";

console.log(myNumbers.showNumber)

import { Human } from "./myTypes"

class User implements Human {
    name;
    age;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const someUser: User = new User("joao", 32)

console.log(someUser)