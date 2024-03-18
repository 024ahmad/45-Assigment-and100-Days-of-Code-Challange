"use strict";
// Task No 42 : Great Magicians
// Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// Solution :
function show_magicians(Magicians) {
    Magicians.forEach((Magician) => {
        console.log(Magician);
    });
}
let Magicians = ["Harry Houdini", "David Blaine", "Doug Henning"];
function make_great(Megicians) {
    for (let i = 0; i < Magicians.length; i++) {
        Megicians[i] = Megicians[i] + ' the Great';
    }
}
make_great(Magicians); // Modifies the array
show_magicians(Magicians); // Check array is modified or not
