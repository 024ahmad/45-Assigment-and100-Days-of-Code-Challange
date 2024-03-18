"use strict";
// Task 16 : More Guests 
// You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people  that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.
// Solution:
let guestArr = ["Meelad", "Hamid", "Furqan", "Farhan"];
guestArr.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));
// // 01 Add begginer 
let begginerArr = "Abdul Rehman";
guestArr.unshift(begginerArr);
// console.log (guestArr)
// 02 Add middle
let middleArr = "Zeeshan";
let middleInd = guestArr.length / 2;
guestArr.splice(middleInd, 0, middleArr);
// console.log (guestArr)
// 03 Add end
let endArr = "Junaid Bhai";
guestArr.push(endArr);
// console.log (guestArr)
// 04 Print Invitation
guestArr.map((index) => console.log(`Dear ${index}, You are invited in the more people category.`));
