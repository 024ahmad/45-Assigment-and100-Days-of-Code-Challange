// Task 24 : More Conditional Tests
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Solution:
// • Tests for equality and inequality with string 
var myName = "Ahmad";
var myName2 = "Ahmad Raza";
var myName3 = "Ahmad Raza Attari";
var result = myName != myName3;
console.log(result);
result = myName == myName2;
console.log(result);
// • Tests using the lower case function
var fruite = "APPlE";
console.log(fruite.toLowerCase() == "apple");
console.log(fruite.toLowerCase() == "Apple");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// Test for Equal to
console.log(5 == 5);
// Test for not Equal to 
console.log(5 != 5);
// Test for Greater Than
console.log(5 > 4);
// Test for Less Than
console.log(5 < 4);
// Test for Greater than Equal to
console.log(5 >= 4);
// Test for Less than Equal to
console.log(5 <= 4);
// • Tests using "and" and "or" operators
//Test for And && 
console.log(5 > 3 && 10 < 4);
//Test for Or ||
console.log(5 > 3 || 10 > 15);
// • Test whether an item is in a array
var languages = ["English", "Arabic", "Urdu", "Chinees"];
console.log(languages.includes("English"));
// • Test whether an item is not in a array
console.log(languages.includes("Hindi"));
