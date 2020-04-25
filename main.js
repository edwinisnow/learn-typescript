"use strict";
exports.__esModule = true;
var message = 'Welcome back';
console.log("Log: -----> : message", message);
// Variable Declarations
var x = 20;
var y = 10;
var sum;
var title = 'Application Title';
// Variable Types
var isBeginner = true;
var total = 0;
var name = 'John';
var sentence = "My name is " + name + " \nI am a beginner in Typescript";
console.log("Log: -----> : sentence", sentence);
// Null
var n = null;
// Undefined
var u = undefined;
// Boolean
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
// or
var list2 = [1, 2, 3];
// Tuple
var person1 = ['John Doe', 23];
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log("Log: -----> : c", c);
// Any
var randomValue = 10;
randomValue = true;
randomValue = 'John Doe';
// Unknown
// let myVariable: unknown = 10;
// function hasName(obj: any): obj is { name: string } {
//     return !!obj && typeof obj === 'object' && "name" in obj
// }
// if (hasName(myVariable)) {
//     console.log("Log: -----> : myVariable", myVariable)
// }
// (myVariable as string).toUpperCase();
// union of types
var multiType;
multiType = 20;
multiType = false;
