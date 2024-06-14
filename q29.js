//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements
// that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the
// fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = ["apple", "mango", "orange"];
if (favorite_fruits.includes("apple")) {
    console.log("i really like apple");
}
if (favorite_fruits.concat("mango")) {
    console.log("i really like mango");
}
if (favorite_fruits.concat("orange")) {
    console.log("i really like orange");
}
else if (favorite_fruits.concat("peach")) {
    console.log("i really like peach");
}
else if (favorite_fruits.concat("melon")) {
    console.log("i really like melon");
}
