// Task No 29 : Favorite Fruit

// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

// Solution :

// • Make a array of your three favorite fruits and call it favorite_fruits.

let favorite_fruits : string [] = ["Bananas","Mangoes","Apples"]

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!

if (favorite_fruits.includes ("Bananas")) {
 console.log ("You realy like Bananas!")
} 

if (favorite_fruits.includes ("Berries")) {
    console.log ("Berries are not in Array")
}

if ( favorite_fruits.includes ("Apples")) {
    console.log ("You really like Apples!")
}

if (favorite_fruits.includes ("Mangoes")) {
    console.log ("You really like Mangoes!")
}

if (favorite_fruits.includes ("Grapes")) {
    console.log ("Grapes are not in Array")
}
