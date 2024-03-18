// Task No 44 : Sandwiches

// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different numberof arguments each time.

// Solution :

function Sandwiches (...iteams : string []) {
    console.log ("Sandwich Order :")
    for (let i = 0 ; i < iteams.length ; i++) {
        console.log (`- ${iteams[i]}`)
    }
}

Sandwiches ("Chicken","tomatto","mayo")
Sandwiches ("beef","garlic tomatto","chees")
Sandwiches ("Vegetable","Chilli sauce","mayo")