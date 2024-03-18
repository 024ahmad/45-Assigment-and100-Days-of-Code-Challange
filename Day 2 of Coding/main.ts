
// Task 04 : Famous Quote 

// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your 
// output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

// Solution:

let author: string = "Albert Einstein";
let quote : string = "A person who never made a mistake never tried anything new."
console.log (`${author} once said, ${quote}`);


// Task 05 : Famous Quote 2

// Repeat Exercise 4, but this time store the famous person’s name in a variable called 
// famous_person. Then compose your message and store it in a new variable called message. Print your message.

// Solution:

let famous_person: string = "Allama Iqbal";
let quote2: string = "Islam is itself destiny and will not suffer destiny.";
let message: string = `${famous_person} once said, ${quote2}`;
console.log (message);


// Task 06 : Stripping Name

// Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

// Solution:

let myName : string = "\t \n Ahmad Raza \n \t"

console.log ("Original :", myName)
console.log ("Stripped :", myName.trim())