// //Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code
// // that will print a greeting to each user after they log in to a website. Loop through the array, and print 
// //a greeting to each user:
// //• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a 
// //status report?
// //• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var array = ["admin", "hira", "neha", "yusra", "abiha"];
// console.log(array[1] + " " + `hello!  thanknyou for logging in again`);
// console.log(array[2] + " " + `hello!  thanknyou for logging in again`);
// console.log(array[3] + " " + `hello!  thanknyou for logging in again`);
// console.log(array[4] + " " + `hello!  thanknyou for logging in again`);
// let message =" would you like to see a status report?"
// console.log(`hello admin! ${message}`);
array.forEach(function (girls) {
    console.log("hello !".concat(girls, " thank you for logging in again  "));
});
