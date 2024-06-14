// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printe.
var newArray = ["neha", "noorjahan", "meena", "samina"];
if (newArray.length == 0) {
    console.log("we have users in the list");
}
else {
    newArray = [];
    console.log("we need to find some users ");
}
// newArray = ["neha","noorjahan","meena","samina"]
// newArray.clear((names)=>{
// })
