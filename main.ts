export { }
let message = 'Welcome back';
console.log("Log: -----> : message", message)

// Variable Declarations
let x = 20;
const y = 10;

let sum;
const title = 'Application Title'

// Variable Types
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'John'
let sentence: string = `My name is ${name} 
I am a beginner in Typescript`
console.log("Log: -----> : sentence", sentence)
// Null
let n: null = null
// Undefined
let u: undefined = undefined
// Boolean
let isNew: Boolean = null
let myName: string = undefined

let list1: number[] = [1, 2, 3]
// or
let list2: Array<number> = [1, 2, 3]
// Tuple
let person1: [string, number] = ['John Doe', 23]
// Enum
enum Color { Red = 5, Green, Blue }
let c: Color = Color.Green;
console.log("Log: -----> : c", c)
// Any
let randomValue: any = 10;
randomValue = true;
randomValue = 'John Doe'
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
let multiType: number | boolean;
multiType = 20;
multiType = false;