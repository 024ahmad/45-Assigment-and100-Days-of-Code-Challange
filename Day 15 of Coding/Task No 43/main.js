"use strict";
// Task No 43 : Unchanged Magicians
// Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
// Solution :
function show_magicians(Magicians) {
    Magicians.forEach((Magician) => {
        console.log(Magician);
    });
}
let Magicians = ["Harry Houdini", "David Blaine", "Doug Henning"];
function make_great(Magicians) {
    let greatMagicians = [];
    for (let i = 0; i < Magicians.length; i++) {
        greatMagicians.push(`${Magicians[i]} the Great`);
    }
    return greatMagicians;
}
let greatMagicians = make_great(Magicians.slice());
console.log("Show Original Names");
show_magicians(Magicians);
console.log("Show Modified Names");
show_magicians(greatMagicians);
