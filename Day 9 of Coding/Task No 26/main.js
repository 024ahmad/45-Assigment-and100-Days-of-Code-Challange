"use strict";
// Task No 26 : Alien Colors 2
// Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// Solution:
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let Alien_color = "green";
if (Alien_color == "green") {
    console.log("Player just earned 5 Points just shooting the Alien.");
}
else {
    console.log("player just earned 10 points.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
Alien_color = "yellow";
if (Alien_color == "green") {
    console.log("Player just earned 5 Points just shooting the Alien.");
}
else {
    console.log("Player just earned 10 points.");
}
