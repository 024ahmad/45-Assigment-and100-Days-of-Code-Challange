"use strict";
// Task No 41 : Magicians
// Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// Solution:
let Magicians = ["Harry Houdini", "David Blaine", "Doug Henning"];
function show_magicians(Magicians) {
    Magicians.forEach((Magician) => {
        console.log(Magician);
    });
}
show_magicians(Magicians);
