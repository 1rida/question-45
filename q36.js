// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be 
// printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message
//  printed on it. Call the function.
function make_shirt(size, text) {
    return "the size of shirt is ".concat(size, ". ").concat(text, " printed in it ");
}
console.log(make_shirt(45, "collection for summer"));
