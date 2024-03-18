// Task No 45 : Cars 

// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 

// Print the Object that’s returned to make sure all the information was stored correctly.


// Solution :

type car = {
    manufacture : string
    model : string 
    [key : string ] : any ;
}

function make_car (manufacture : string , model : string , Optional : Record <string, any>) : car {
 return {
    manufacture,
    model,
    ...Optional
 }
}

let myCar : car = make_car ("Toyota","Corolla", {"Color" : "Black"})
console.log (myCar)

console.log (make_car ("Automobili Lamborghini S.p.A.","Lamborghini Gallardo", {"Color" :"Red"}))
