// Task No 32 : Checking Usernames 

// Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.


// Solution:

// • Make a list of five or more usernames called current_users.
let current_users : string [] = ["Ahmad","Sir Zia","Sir Qasim","Miss Iqra","Sir Ameen Alam"]

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users : string [] = ["Sir Zia","Sir Qasim","Sir Daniyal","Sir Kamran Khan Tessori","Miss Mehak Alamgir"]

new_users.forEach (_newUser => {
    if (current_users.some(_current_user => _current_user.toLowerCase () === _newUser.toLowerCase ())) {
        console.log (`${_newUser} will need to enter a new username.`)
    } else {
        console.log (`${_newUser} is available.`)
    }
})