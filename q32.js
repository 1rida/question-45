// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has
//  a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a
//  message that the person will need to enter a new username. If a username has not been used, print a message
//  saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var current_users = ["neha", "noorjahan", "meena", "samina", "ayesha"];
for (var i = 0; i < current_users.length; i++) {
    var new_users = ["neha", "noorjahan", "yusra", "hiba", "fatima"];
    for (var i_1 = 0; i_1 < new_users.length; i_1++) {
        if (current_users[i_1] == (new_users[i_1])) {
            console.log("".concat(new_users.forEach(function (person) {
            }), "the person will need to enter a new user name"));
        }
        else {
            console.log("username is available");
        }
    }
}
