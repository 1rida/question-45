// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should 
// have one parameter that collects as many items as the function call provides, and it should print a summary 
// of the sandwich that is being ordered. Call the function three times, using a different number of arguments 
// each time.


function sandwich(items:string[]){
console.log("your order is redy with:");
console.log(`${items[0]}`);
console.log(`${items[1]}`);
console.log(`${items[2]}`);



}

sandwich(["item1","item2","item3"]);
sandwich(["item4","item5","item6"]);
sandwich(["item7","item8","item9"]);
